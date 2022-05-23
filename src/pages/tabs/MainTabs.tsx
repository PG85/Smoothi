import {
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import React from "react";
import "./css/Tabs.css";
import { globe, analytics, bagAdd } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
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
  );
};

export default MainTabs;
