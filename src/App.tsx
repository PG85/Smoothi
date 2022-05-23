import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonListHeader,
  IonPage,
  IonButtons,
  IonButton,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonImg,
  setupIonicReact
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { globe, analytics, bagAdd, list } from "ionicons/icons";

import Tab1 from "./pages/tabs/Tab1";
import Tab2 from "./pages/tabs/Tab2";
import Tab3 from "./pages/tabs/Tab3";

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* Side menu */}
    <IonMenu content-id="main-content" class="sidemenu">
      {/* Side menu header */}
      <IonHeader class="ion-no-border">
        <IonToolbar class="sidemenuHeader">
          <IonTitle class="sidemenuHeadertitle">Smoothi</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Side menu content */}
      <IonContent class="sidemenucontent">
        {/* Side menu buttons */}
        <IonList class="sidemenulist">
          <IonListHeader class="sidemenuHeader2">Home</IonListHeader>

          {/* Wallet */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Wallet</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {/* Goals */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Goals</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {/* Markt */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Markt</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {/* Nieuws */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Nieuws</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonListHeader class="sidemenuHeader2">Instellingen</IonListHeader>

          {/* Account */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Account</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {/* Privacy */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Privacy</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {/* Notificaties */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Notificaties</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {/* Afmelden */}
          <IonMenuToggle auto-hide="false">
            <IonItem button class="sidemenubtn">
              <IonLabel>Afmelden</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    {/* Page */}
    <IonPage className="ion-page" id="main-content">
      {/* Header */}
      <IonHeader class="smoothiHeader ion-no-border">
        <IonToolbar class="smoothiHeaderToolBar">
          <IonButtons slot="start">
            <IonMenuToggle>
              <IonButton>
                <IonIcon icon={list} slot="icon-only" />
              </IonButton>
            </IonMenuToggle>
          </IonButtons>
          <IonImg
            src={"assets/accounticon.png"}
            class="smoothiHeaderAccountIcon"
            slot="end"
          />
        </IonToolbar>
      </IonHeader>

      {/* Tabs */}
      <IonReactRouter>
        <IonTabs>
          {/* Tabs content */}
          <IonRouterOutlet>
            <Route exact path="/tabs/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tabs/tab2">
              <Tab2 />
            </Route>
            <Route exact path="/tabs/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tabs/tab1" />
            </Route>
          </IonRouterOutlet>

          {/* Tabs footer */}
          <IonTabBar slot="bottom" class="smoothiFooter">
            <IonTabButton tab="tab1" href="/tabs/tab1" class="tabBtn">
              <IonIcon icon={bagAdd} />
              <IonLabel>Wallet</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tabs/tab2" class="tabBtn">
              <IonIcon icon={analytics} />
              <IonLabel>Markt</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tabs/tab3" class="tabBtn">
              <IonIcon icon={globe} />
              <IonLabel>Nieuws</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  </IonApp>
);

export default App;
