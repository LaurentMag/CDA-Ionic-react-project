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
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

import {dataServices} from "../services/dataServices";
import {dataURL} from "../services/dataURL";
import {CompetenceType} from "../type/CompetenceType";
import {UtilisateurType} from "../type/UtilisateurType";

import {useHistory} from "react-router-dom";

export const CompetenceDetail: React.FC = () => {
  const {id} = useParams() as {id: string};
  const [competence, setCompetence] = useState<CompetenceType>();
  const [utilisateurs, setUtilisateurs] = useState<UtilisateurType[]>([]);

  useEffect(() => {
    console.log(id);
    dataServices.fetchDataById(dataURL.competences, id).then((data) => setCompetence(data));
  }, [id]);

  useEffect(() => {
    dataServices.fetchData(dataURL.utilisateurs).then((data) => setUtilisateurs(data));
  }, []);

  const utilisateursFiltre = () => {
    let filteredUsers: UtilisateurType[] = [];
    if (competence) {
      for (const obj of competence.utilisateur) {
        filteredUsers = [...filteredUsers, ...utilisateurs.filter((userF) => userF.id == obj.id)];
      }
    }
    return filteredUsers;
  };

  // const recupereNiveauComp = (user: UtilisateurType) => {
  //   let index = user.competences.map((comp) => comp.id).indexOf(id);
  //   return user.competences[index].niveau;
  // };

  const recupereNiveauComp = (user: UtilisateurType) => {
    if (user) {
      let index = user.competences.map((comp) => comp.id).indexOf(id);
      if (index !== -1) {
        return user.competences[index].niveau;
      }
    } else {
      return "...loading";
    }
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
          {utilisateursFiltre() &&
            utilisateursFiltre().map((user, index) => {
              return (
                <Link
                  key={index}
                  to={`/profil/${user.id}`}
                  style={{textDecoration: "none", color: "black"}}>
                  <section className="utiliser-niveau-container">
                    <div className="utilisateur-niveau">
                      <p>{user.nom}</p>
                      <p>{user.prenom}</p>
                      <p>Niveau : {recupereNiveauComp(user)}</p>
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

/*
<Link
  key={index}
  to={`/profil/${user.id}`}
  style={{textDecoration: "none", color: "black"}}>
  <section className="utiliser-niveau-container">
    <div className="utilisateur-niveau">
      <p>{user.nom}</p>
      <p>{user.prenom}</p>
      <p>Niveau : {recupereNiveauComp(user)}</p>
    </div>
  </section>
</Link>
*/

/* 

  const history = useIonRouter();

                <section
                  className="utiliser-niveau-container"
                  key={index}
                  onClick={() => history.push(`/profil/${user.id}`)}>
                  <div className="utilisateur-niveau">
                    <p>{user.nom}</p>
                    <p>{user.prenom}</p>
                    <p>Niveau : {recupereNiveauComp(user)}</p>
                  </div>
                </section>


*/
