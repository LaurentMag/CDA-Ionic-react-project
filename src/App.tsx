import {Link, Redirect, Route} from "react-router-dom";
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
import {Profil} from "./pages/Profil";

import {CompetenceDetail} from "./components/CompetenceDetail";
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
import {PageTest} from "./pages/PageTest";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            exact
            path="/competences">
            <Competences />
          </Route>
          <Route
            exact
            path="/">
            <Redirect to="/competences" />
          </Route>
          <Route
            path="/competences/:id"
            component={CompetenceDetail}></Route>
          <Route
            path="/profil/:id"
            component={Profil}></Route>

          <Route
            path="/test"
            component={PageTest}></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {/* <Link
            to={`/competences`}
            style={{textDecoration: "none", color: "black"}}> */}
          <IonTabButton
            tab="competences"
            href="/competences">
            <IonIcon icon={book} />
            <IonLabel>Competences</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="test"
            href="/test">
            <IonIcon icon={body} />
            <IonLabel>test</IonLabel>
          </IonTabButton>

          {/* </Link> */}
          {/* <IonTabButton
            tab="profil"
            href="/profil">
            <IonIcon icon={ellipse} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
