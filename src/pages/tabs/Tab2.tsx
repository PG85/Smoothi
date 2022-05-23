import {
  IonAccordionGroup,
  IonAccordion,
  IonContent,
  IonList,
  IonText,
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonIcon,
  IonLabel,
  IonTitle
} from "@ionic/react";
import React from "react";
import "./css/Tabs.css";
import "./css/Tab2.css";
import {
  logoLinkedin,
  logoTwitter,
  logoFacebook,
  square
} from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="smoothiHeader">
        <IonToolbar class="smoothiHeaderToolBar"></IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonTitle class="contentHeader">Categorieen</IonTitle>

        <IonAccordionGroup>
          {/* Card 1 */}
          <IonAccordion value="card1">
            {/* Card 1 Header */}
            <IonItem
              slot="header"
              class="itemContainerCard itemContainerItem"
              lines="none"
            >
              <IonIcon class="itemContainerLogo1" icon={logoLinkedin} />
              <IonItem class="itemContainerInfoItem1" lines="none">
                <IonLabel class="infoItemLabel1" position="stacked">
                  <IonText class="infoItemText1">
                    <h1>LinkedIn</h1>
                  </IonText>
                </IonLabel>
                <IonLabel class="infoItemLabel2" position="stacked">
                  <IonText class="infoItemText2">
                    <h2>S&P500</h2>
                  </IonText>
                </IonLabel>
              </IonItem>
              <IonIcon
                class="itemContainerLogo2 diagramSquare1"
                icon={square}
                slot="end"
              />
              <IonItem class="itemContainerInfoItem2" lines="none" slot="end">
                <IonLabel class="infoItemLabel3" position="stacked">
                  <IonText class="infoItemText3 infoItemTextGreen">
                    <h2>+7.64%</h2>
                  </IonText>
                </IonLabel>
                <IonLabel class="infoItemLabel4" position="stacked">
                  <IonText class="infoItemText4">
                    <h2>-$2475,06</h2>
                  </IonText>
                </IonLabel>
              </IonItem>
            </IonItem>

            {/* Card 1 Content */}
            <IonList slot="content" class="cardContent">
              Content
            </IonList>
          </IonAccordion>

          {/* Card 2 */}
          <IonAccordion value="card2">
            {/* Card 2 Header */}
            <IonItem
              slot="header"
              class="itemContainerCard itemContainerItem"
              lines="none"
            >
              <IonIcon class="itemContainerLogo1" icon={logoFacebook} />
              <IonItem class="itemContainerInfoItem1" lines="none">
                <IonLabel class="infoItemLabel1" position="stacked">
                  <IonText class="infoItemText1">
                    <h1>Facebook</h1>
                  </IonText>
                </IonLabel>
                <IonLabel class="infoItemLabel2" position="stacked">
                  <IonText class="infoItemText2">
                    <h2>S&P500</h2>
                  </IonText>
                </IonLabel>
              </IonItem>
              <IonIcon
                class="itemContainerLogo2 diagramSquare2"
                icon={square}
                slot="end"
              />
              <IonItem class="itemContainerInfoItem2" lines="none" slot="end">
                <IonLabel class="infoItemLabel3" position="stacked">
                  <IonText class="infoItemText3 infoItemTextRed">
                    <h2>-2.64%</h2>
                  </IonText>
                </IonLabel>
                <IonLabel class="infoItemLabel4" position="stacked">
                  <IonText class="infoItemText4">
                    <h2>-$2475,06</h2>
                  </IonText>
                </IonLabel>
              </IonItem>
            </IonItem>

            {/* Card 2 Content */}
            <IonList slot="content" class="cardContent">
              Content
            </IonList>
          </IonAccordion>

          {/* Card 3 */}
          <IonAccordion value="numbers">
            {/* Card 3 Header */}
            <IonItem
              slot="header"
              class="itemContainerCard itemContainerItem"
              lines="none"
            >
              <IonIcon class="itemContainerLogo1" icon={logoTwitter} />
              <IonItem class="itemContainerInfoItem1" lines="none">
                <IonLabel class="infoItemLabel1" position="stacked">
                  <IonText class="infoItemText1">
                    <h1>Twitter</h1>
                  </IonText>
                </IonLabel>
                <IonLabel class="infoItemLabel2" position="stacked">
                  <IonText class="infoItemText2">
                    <h2>S&P500</h2>
                  </IonText>
                </IonLabel>
              </IonItem>
              <IonIcon
                class="itemContainerLogo2 diagramSquare3"
                icon={square}
                slot="end"
              />
              <IonItem class="itemContainerInfoItem2" lines="none" slot="end">
                <IonLabel class="infoItemLabel3" position="stacked">
                  <IonText class="infoItemText3 infoItemTextGreen">
                    <h2>+7.64%</h2>
                  </IonText>
                </IonLabel>
                <IonLabel class="infoItemLabel4" position="stacked">
                  <IonText class="infoItemText4">
                    <h2>-$2475,06</h2>
                  </IonText>
                </IonLabel>
              </IonItem>
            </IonItem>

            {/* Card 3 Content */}
            <IonList slot="content" class="cardContent">
              Content
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
