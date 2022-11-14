import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
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
import {
  walletOutline,
  searchOutline,
  newspaperOutline,
  cashOutline,
  cartOutline,
  shuffleOutline,
  eyeOutline,
  personOutline,
  lockOpenOutline,
  notificationsOutline,
  logOutOutline,
  list,
  chevronForward
} from "ionicons/icons";

import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

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
import "./../theme/variables.css";

setupIonicReact();

const HomePage: React.FC = () => {
  return (
    <IonContent fullscreen>
      {/* Side menu */}
      <IonMenu content-id="main-content" class="sidemenu">
        {/* Side menu header */}
        <IonHeader class="ion-no-border">
          <IonToolbar class="sidemenuHeader">
            <IonImg
              src={"assets/avatar2.png"}
              class="smoothiSideMenuAccountIcon"
            />
            <IonLabel class="sidemenuHeadertitle">Anne de Vries</IonLabel>
          </IonToolbar>
        </IonHeader>

        {/* Side menu content */}
        <IonContent class="sidemenucontent">
          {/* Side menu buttons */}
          <IonList class="sidemenulist">
            {/*
          <IonListHeader class="sidemenuHeader2">Home</IonListHeader>
          */}

            {/* Wallet */}
            <IonMenuToggle auto-hide="false">
              <IonItem button class="sidemenubtn sidemenuHeader2" lines="none">
                <IonIcon
                  icon={cashOutline}
                  class="sideMenuBtnIcon"
                  slot="start"
                />
                <IonLabel>Home</IonLabel>
                <IonIcon
                  icon={chevronForward}
                  class="sideMenuBtnIcon"
                  slot="end"
                />
              </IonItem>
            </IonMenuToggle>

            {/* Goals */}
            <IonMenuToggle auto-hide="false">
              <IonItem button class="sidemenubtn" lines="none">
                <IonIcon
                  icon={cartOutline}
                  class="sideMenuBtnIcon"
                  slot="start"
                />
                <IonLabel>Markt</IonLabel>
                <IonIcon
                  icon={chevronForward}
                  class="sideMenuBtnIcon"
                  slot="end"
                />
              </IonItem>
            </IonMenuToggle>

            {/* Markt */}
            <IonMenuToggle auto-hide="false">
              <IonItem button class="sidemenubtn" lines="none">
                <IonIcon
                  icon={shuffleOutline}
                  class="sideMenuBtnIcon"
                  slot="start"
                />
                <IonLabel>Wijzig wallet</IonLabel>
                <IonIcon
                  icon={chevronForward}
                  class="sideMenuBtnIcon"
                  slot="end"
                />
              </IonItem>
            </IonMenuToggle>

            {/* Nieuws */}
            <IonMenuToggle auto-hide="false">
              <IonItem button class="sidemenubtn" lines="none">
                <IonIcon
                  icon={eyeOutline}
                  class="sideMenuBtnIcon"
                  slot="start"
                />
                <IonLabel>Kenniscentrum</IonLabel>
                <IonIcon
                  icon={chevronForward}
                  class="sideMenuBtnIcon"
                  slot="end"
                />
              </IonItem>
            </IonMenuToggle>

            {/*<IonListHeader class="sidemenuHeader2"></IonListHeader>*/}

            {/* Account */}
            <IonMenuToggle auto-hide="false">
              <IonItem button class="sidemenubtn sidemenuHeader2" lines="none">
                <IonIcon
                  icon={personOutline}
                  class="sideMenuBtnIcon"
                  slot="start"
                />
                <IonLabel>Account</IonLabel>
                <IonIcon
                  icon={chevronForward}
                  class="sideMenuBtnIcon"
                  slot="end"
                />
              </IonItem>
            </IonMenuToggle>

            {/* Privacy */}
            <IonMenuToggle auto-hide="false">
              <IonItem button class="sidemenubtn" lines="none">
                <IonIcon
                  icon={lockOpenOutline}
                  class="sideMenuBtnIcon"
                  slot="start"
                />
                <IonLabel>Privacy</IonLabel>
                <IonIcon
                  icon={chevronForward}
                  class="sideMenuBtnIcon"
                  slot="end"
                />
              </IonItem>
            </IonMenuToggle>

            {/* Notificaties */}
            <IonMenuToggle auto-hide="false">
              <IonItem button class="sidemenubtn" lines="none">
                <IonIcon
                  icon={notificationsOutline}
                  class="sideMenuBtnIcon"
                  slot="start"
                />
                <IonLabel>Notificaties</IonLabel>
                <IonIcon
                  icon={chevronForward}
                  class="sideMenuBtnIcon"
                  slot="end"
                />
              </IonItem>
            </IonMenuToggle>
          </IonList>

          {/* Afmelden */}
          <IonContent class="sidemenubtn2Container">
            <IonButton class="sidemenubtn2 ion-no-border">
              <IonIcon
                icon={logOutOutline}
                class="sideMenuBtnIcon"
                slot="end"
              />
              <IonLabel>Afmelden</IonLabel>
            </IonButton>
          </IonContent>
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
              src={"assets/avatar2.png"}
              class="smoothiHeaderAccountIcon"
              slot="end"
            />
          </IonToolbar>
        </IonHeader>

        {/* Tabs */}
        <IonReactRouter>
          <IonTabs>
            {/* create the routes for all of the tabs here */}
            <IonRouterOutlet>
              <Route path="/Tab1" component={Tab1} exact={true} />
              <Route path="/Tab2" component={Tab2} exact={true} />
              <Route path="/Tab3" component={Tab3} exact={true} />
              <Route exact path="/*" render={() => <Redirect to="/Tab1" />} />
            </IonRouterOutlet>

            {/* Tabs footer */}
            <IonTabBar slot="bottom" class="smoothiFooter">
              <IonTabButton tab="Tab1" href="/tabs/Tab1" class="tabBtn">
                <IonIcon icon={walletOutline} />
                <IonLabel>Wallet</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Tab2" href="/tabs/Tab2" class="tabBtn">
                <IonIcon icon={searchOutline} />
                <IonLabel>Markt</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Tab3" href="/tabs/Tab3" class="tabBtn">
                <IonIcon icon={newspaperOutline} />
                <IonLabel>Nieuws</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonPage>
    </IonContent>
  );
};

export default withRouter(HomePage);
