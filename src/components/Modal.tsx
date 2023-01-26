import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import {CompetenceType} from "../type/CompetenceType";
import {ModalFormComp} from "./ModalFormComp";
import {ModalFormNiveau} from "./ModalFormNiveau";

type PropsType = {
  isVisible: boolean;
  setModalVisibility: Function;
  isComptenceOruser: string;
  createCompetence: Function;
};

export const Modal = (props: PropsType) => {
  const closeModal = (e: any) => {
    props.setModalVisibility(e);
  };

  const createCompetence = (competence: CompetenceType) => {
    props.createCompetence(competence);
  };

  return (
    <IonModal isOpen={props.isVisible}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.isComptenceOruser === "competence" ? "Ajout de Competence" : "Edition de niveau"}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={closeModal}>Fermer</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {props.isComptenceOruser === "competence" ? (
          <ModalFormComp
            createCompetence={createCompetence}
            closeModal={closeModal}
          />
        ) : (
          <ModalFormNiveau />
        )}
      </IonContent>
    </IonModal>
  );
};
