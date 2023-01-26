import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";
import React from "react";

import {CompetenceType} from "../type/CompetenceType";

type propsType = {
  competenceObj: CompetenceType;
};

const CardComposant = (props: propsType) => {
  return <IonCardTitle className="competence-list-element">{props.competenceObj.nom}</IonCardTitle>;
};

export default CardComposant;
