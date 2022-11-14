import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";
import "./css/Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="smoothiHeader ion-no-border">
        <IonToolbar class="smoothiHeaderToolBar"></IonToolbar>
        <div class="diagram1Container"></div>
      </IonHeader>

      <IonContent fullscreen class="contentContainer">
        <div class="contentContainerDiv">
          <IonTitle class="contentHeader">Nieuws</IonTitle>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>11 Apr 2022 17:00 - Redactie</IonCardSubtitle>
              <IonCardTitle>Nieuw nieuws, lees het nu</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Deze tekst is zeer interessant en nieuwswaardig, lees daarom snel
              het artikel!
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>10 Apr 2022 14:00 - Redactie</IonCardSubtitle>
              <IonCardTitle>Oud nieuws, lees het nu</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Deze tekst is zeer interessant en nieuwswaardig, lees daarom snel
              het artikel!
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>09 Apr 2022 17:00 - Redactie</IonCardSubtitle>
              <IonCardTitle>Meer nieuws, lees het nu</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Deze tekst is zeer interessant en nieuwswaardig, lees daarom snel
              het artikel!
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>08 Apr 2022 12:00 - Redactie</IonCardSubtitle>
              <IonCardTitle>Nog meer nieuws, lees het nu</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Deze tekst is zeer interessant en nieuwswaardig, lees daarom snel
              het artikel!
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Tab3);
