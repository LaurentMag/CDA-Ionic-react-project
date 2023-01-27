import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {dataServices} from "../services/dataServices";
import {dataURL} from "../services/dataURL";
import {UtilisateurType} from "../type/UtilisateurType";

export const Profils: React.FC = () => {
  const [utilisateurs, setUtilisateur] = useState<UtilisateurType[]>();

  useEffect(() => {
    dataServices.fetchData(dataURL.utilisateurs).then((data) => setUtilisateur(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profils :</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {utilisateurs &&
          utilisateurs.map((user, index) => {
            return (
              <IonCard
                key={index}
                routerLink={`/profil/${user.id}`}>
                <IonCardHeader>
                  <IonCardTitle>{user.prenom}</IonCardTitle>
                  <IonCardSubtitle>{user.nom}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  Here's a small text description for the card content. Nothing more, nothing less.
                </IonCardContent>
              </IonCard>
            );
          })}
      </IonContent>
    </IonPage>
  );
};
