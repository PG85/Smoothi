import { IonPage, IonContent, IonButton } from "@ionic/react";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton routerLink="/HomePage">Inloggen</IonButton>
        <IonButton>Registreren</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
