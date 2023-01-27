import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from "@ionic/react";
import React, {useState} from "react";
import {UtilisateurCompType} from "../type/UtilisateurCompType";

type PropsType = {
  closeModal: Function;
};

export const ModalFormNiveau = (props: PropsType) => {
  const [editNiveau, SetEditNiveau] = useState<UtilisateurCompType>({
    id: "",
    niveau: "",
  });

  const handleInput = (e: any) => {
    SetEditNiveau((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const Submit = (e: any) => {
    e.preventDefault();
  };
  return (
    <IonList className="form-class">
      <IonItem>
        <h1> Compétence : </h1>
        <IonLabel>Niveau : </IonLabel>
        <IonInput
          placeholder="Nom..."
          onIonChange={handleInput}
          name="nom"></IonInput>
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
