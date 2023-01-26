import {IonButton, IonInput, IonItem, IonLabel, IonList, IonTextarea} from "@ionic/react";
import {create} from "domain";
import React, {useState} from "react";

import uuid4 from "uuid4";
import {CompetenceType} from "../type/CompetenceType";

type PropsType = {
  createCompetence: Function;
  closeModal: Function;
};

export const ModalFormComp = (props: PropsType) => {
  const [newCompetence, setNewCompetence] = useState<CompetenceType>({
    id: uuid4(),
    nom: "",
    description: "",
    image: "",
    utilisateur: [],
  });

  const handleInput = (e: any) => {
    setNewCompetence((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const Submit = (e: any) => {
    e.preventDefault();
    if (newCompetence.nom !== "" && newCompetence.description !== "") {
      props.createCompetence(newCompetence);
      props.closeModal(e);
    }
  };

  return (
    <IonList className="form-class">
      <IonItem>
        <IonLabel>Nom de compétence : </IonLabel>
        <IonInput
          placeholder="Nom..."
          onIonChange={handleInput}
          name="nom"></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Liens d'image : </IonLabel>
        <IonInput
          placeholder="Lien..."
          onIonChange={handleInput}
          name="image"></IonInput>
      </IonItem>
      <IonItem>
        <IonTextarea
          autoGrow={true}
          placeholder="Ajouter une description"
          onIonChange={handleInput}
          name="description"></IonTextarea>
      </IonItem>

      <IonButton
        color="dark"
        onClick={Submit}>
        Valider
      </IonButton>
    </IonList>
  );
};
