import {IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import CardComposant from "../components/CardCompetence";
import {Modal} from "../components/Modal";

import {dataServices} from "../services/dataServices";
import {dataURL} from "../services/dataURL";
import {CompetenceType} from "../type/CompetenceType";

const Competences: React.FC = () => {
  const [competencesList, setCompetencesList] = useState<CompetenceType[]>();
  const [isModalVisible, setIsModalVisibile] = useState<boolean>(false);

  const setModalVisibility = () => {
    setIsModalVisibile((prev) => !prev);
  };

  useEffect(() => {
    fetchCompetences();
  }, []);

  const fetchCompetences = () => {
    dataServices.fetchData(dataURL.competences).then((data) => setCompetencesList(data));
  };

  const createCompetence = (competence: CompetenceType) => {
    dataServices.postData(dataURL.competences, competence).then(() => fetchCompetences());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Compétences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton
          onClick={setModalVisibility}
          color="dark"
          fill="outline"
          className="comptence-button">
          Ajouter une competence
        </IonButton>
        <Modal
          isComptenceOruser="competence"
          isVisible={isModalVisible}
          setModalVisibility={setModalVisibility}
          createCompetence={createCompetence}
        />
        <IonList>
          {competencesList &&
            competencesList.map((competence, index) => {
              return (
                <Link
                  key={index}
                  to={`/competences/${competence.id}`}
                  style={{textDecoration: "none"}}>
                  <CardComposant competenceObj={competence} />
                </Link>
              );
            })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Competences;

/* 
             <IonItem routerLink={`/competences/${competence.id}`}>
                  <CardComposant
                    key={index}
                    competenceObj={competence}
                  />
                </IonItem>
*/

/* 
                  <Link
                  key={index}
                  to={`/competences/${competence.id}`}
                  style={{textDecoration: "none"}}>
                  <CardComposant competenceObj={competence} />
                </Link>
*/
