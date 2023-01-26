import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  NavContext,
} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

import {dataServices} from "../services/dataServices";
import {dataURL} from "../services/dataURL";
import {CompetenceType} from "../type/CompetenceType";
import {UtilisateurType} from "../type/UtilisateurType";

export const CompetenceDetail = () => {
  const {id} = useParams() as {id: string};
  const [competence, setCompetence] = useState<CompetenceType>();
  const [utilisateurs, setUtilisateurs] = useState<UtilisateurType[]>([]);

  useEffect(() => {
    dataServices.fetchDataById(dataURL.competences, id).then((data) => setCompetence(data));
  }, [id]);

  useEffect(() => {
    dataServices.fetchData(dataURL.utilisateurs).then((data) => setUtilisateurs(data));
  }, []);

  const userFilter = () => {
    let filteredUsers: UtilisateurType[] = [];
    if (competence) {
      for (const obj of competence.utilisateur) {
        filteredUsers = [...filteredUsers, ...utilisateurs.filter((userF) => userF.id == obj.id)];
      }
    }

    return filteredUsers;
  };

  const getNiveau = (user: UtilisateurType) => {
    let index = user.competences.map((comp) => comp.id).indexOf(id);
    return user.competences[index].niveau;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Détails :</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="detail-page">
        <IonCard>
          <img src={competence && competence.image} />
          <IonCardHeader>
            <IonCardTitle>{competence && competence.nom}</IonCardTitle>
            <IonCardSubtitle>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequuntur rem quam odio perspiciatis
              fugit consequatur deleniti aliquid quia.
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{competence && competence.description}</IonCardContent>
        </IonCard>

        <h1 className="detail-user-list">Utilisateurs : </h1>

        <IonList inset={true}>
          {userFilter().map((user, index) => {
            return (
              <Link
                key={index}
                to={`/profil/${user.id}`}
                style={{textDecoration: "none", color: "black"}}>
                <section className="utiliser-niveau-container">
                  <div className="utilisateur-niveau">
                    <p>{user.nom}</p>
                    <p>{user.prenom}</p>
                    <p>Niveau : {getNiveau(user)}</p>
                  </div>
                </section>
              </Link>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

/* 
  créer un array avec uniquement les ID venant de l'array d'obj de utilisateur.competences avec le .map
  ET
  Récupère l'index de la valeur correspondant à l'ID de la compétence selectionné pour afficher les détails

  user.competences.map((comp) => comp.id).indexOf(id)
*/