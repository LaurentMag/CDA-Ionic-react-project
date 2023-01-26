import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {dataServices} from "../services/dataServices";
import {dataURL} from "../services/dataURL";
import {UtilisateurType} from "../type/UtilisateurType";

export const Profils = () => {
  const [utilisateurs, setUtilisateur] = useState<UtilisateurType[]>();

  useEffect(() => {
    dataServices.fetchData(dataURL.utilisateurs).then((data) => setUtilisateur(data));
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profils :</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p> C'est la page des profils </p>
      </IonContent>
    </IonPage>
  );
};
