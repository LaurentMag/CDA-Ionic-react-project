import {Redirect, Route} from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";

import Competences from "./pages/Competences";
import {ProfilDetail} from "./pages/ProfilDetail";

import {CompetenceDetail} from "./pages/CompetenceDetail";
import {Profils} from "./pages/Profils";
import {body, book} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* main.css : sass */
import "./css/main.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect
            exact
            from="/"
            to="/competences"
          />
          <Route
            exact
            path="/competences">
            <Competences />
          </Route>
          <Route path="/competences/:id">
            <CompetenceDetail />
          </Route>
          <Route
            exact
            path="/profils">
            <Profils />
          </Route>
          <Route path="/profil/:id">
            <ProfilDetail />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton
            tab="competences"
            href="/competences">
            <IonIcon icon={book} />
            <IonLabel>Competences</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="Profils"
            href="/profils">
            <IonIcon icon={body} />
            <IonLabel>Profils</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
