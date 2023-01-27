import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonList,
  IonBackButton,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import {add} from "ionicons/icons";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {dataServices} from "../services/dataServices";
import {dataURL} from "../services/dataURL";
import {UtilisateurType} from "../type/UtilisateurType";

export const ProfilDetail: React.FC = () => {
  const {id} = useParams() as {id: string};
  const [utilisateur, setUtilisateur] = useState<UtilisateurType>();

  useEffect(() => {
    dataServices.fetchDataById(dataURL.utilisateurs, id).then((data) => setUtilisateur(data));
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil detail</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton className="comptence-button">
          <IonIcon
            slot="start"
            icon={add}
          />
          Ajouter un niveau
        </IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{utilisateur && utilisateur.prenom}</IonCardTitle>
            <IonCardSubtitle>{utilisateur && utilisateur.nom}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>A suite la liste des compétences :</IonCardContent>
        </IonCard>

        <h1 className="detail-user-list">Compétences : </h1>
        <IonList inset={true}>
          <IonItem>test</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
