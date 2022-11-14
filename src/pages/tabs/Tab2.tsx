import {
  IonAccordionGroup,
  IonAccordion,
  IonContent,
  IonText,
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonLabel,
  IonTitle,
  IonSearchbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";
import "./css/Tabs.css";
import "./css/Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="smoothiHeader ion-no-border">
        <IonToolbar class="smoothiHeaderToolBar"></IonToolbar>
        <div class="diagram1Container"></div>
      </IonHeader>

      <IonContent fullscreen class="contentContainer">
        <div class="contentContainerDiv">
          <IonTitle class="contentHeader">Markt</IonTitle>
          <IonItem lines="none" class="searchBarContainer ion-no-padding">
            <IonSearchbar class="searchBar" />
          </IonItem>
          <IonItem lines="none" class="searchBarFilterContainer ion-no-padding">
            <IonButton
              fill="clear"
              slot="end"
              class="searchBarFilter ion-no-padding"
            >
              Filter
            </IonButton>
          </IonItem>
          <IonTitle class="contentHeaderWallets">Wallets</IonTitle>
          <IonItem lines="none" class="walletsParagraph">
            Kies een van de zorgvuldig samengestelde wallets die bij jou past
          </IonItem>
          <IonGrid class="walletsGrid">
            <IonRow class="walletsGridRow">
              <IonCol class="walletsGridColumn walletsGridColumn1">
                <IonImg class="walletSquare" src="assets/wallets1.png" />
                Duurzaam
              </IonCol>
              <IonCol class="walletsGridColumn walletsGridColumn2">
                <IonImg class="walletSquare" src="assets/wallets2.png" />
                Pensioen
              </IonCol>
              <IonCol class="walletsGridColumn walletsGridColumn3">
                <IonImg class="walletSquare" src="assets/wallets3.png" />
                Dividend
              </IonCol>
            </IonRow>
            <IonRow class="walletsGridRow">
              <IonCol class="walletsGridColumn walletsGridColumn1">
                <IonImg class="walletSquare" src="assets/wallets4.png" />
                NL-tilt
              </IonCol>
              <IonCol class="walletsGridColumn walletsGridColumn2">
                <IonImg class="walletSquare" src="assets/wallets5.png" />
                Opkomend
              </IonCol>
              <IonCol class="walletsGridColumn walletsGridColumn3">
                <IonImg class="walletSquare" src="assets/wallets6.png" />
                Disruptie
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonTitle class="contentHeader">Meest gekozen</IonTitle>

          <IonAccordionGroup>
            {/* Card 1 */}
            <IonAccordion value="card1" class="itemContainerCard">
              {/* Card 1 Header */}
              <IonItem slot="header" class="itemContainerItem" lines="none">
                {/*<IonIcon class="itemContainerLogo1" icon={logoLinkedin} />*/}
                <IonItem
                  class="itemContainerInfoItem1 ion-no-padding"
                  lines="none"
                >
                  <IonLabel class="infoItemLabel1" position="stacked">
                    <IonText class="infoItemText1">
                      <h2>USB EM</h2>
                    </IonText>
                  </IonLabel>
                  <IonLabel class="infoItemLabel2" position="stacked">
                    <IonText class="infoItemText2">
                      <h3>Emerging Market SR</h3>
                    </IonText>
                  </IonLabel>
                </IonItem>
                <IonItem
                  class="itemContainerInfoItem2 ion-no-padding"
                  lines="none"
                  slot="end"
                >
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

              {/* Card 1 Content 
              <IonList slot="content">
                <IonItem class="itemContainerInfoItem1" lines="none">
                  <IonLabel class="infoItemLabel1">
                    <IonText class="infoItemText1">
                      <h3>Naam: Invesco EQQQ NASDAQ-100 ETF</h3>
                      <h3>Symbool I ISIN: EQQQ | IE0032077012</h3>
                      <h3>Beurs: XET</h3>
                      <h3>Aantal: 10,58</h3>
                      <h3>Koers: € 289,90</h3>
                      <h3>Risicoprofiel: 6</h3>
                      <h3>Valuta: EUR</h3>
                    </IonText>
                    <IonText class="infoItemText1">
                      <br />
                      <h3>Waarde: 3220,56</h3>
                      <h3>GAK: 208,45</h3>
                      <h3>W/V €: 30,40</h3>
                      <h3>W/V %: 0,93%</h3>
                      <h3>Totale W/V €: 823,40</h3>
                    </IonText>
                  </IonLabel>
                </IonItem>
              </IonList>
              */}
            </IonAccordion>

            {/* Card 2 */}
            <IonAccordion value="card2" class="itemContainerCard">
              {/* Card 2 Header */}
              <IonItem slot="header" class="itemContainerItem" lines="none">
                {/*<IonIcon class="itemContainerLogo1" icon={logoFacebook} />*/}
                <IonItem
                  class="itemContainerInfoItem1 ion-no-padding"
                  lines="none"
                >
                  <IonLabel class="infoItemLabel1" position="stacked">
                    <IonText class="infoItemText1">
                      <h2>Blackrock All World</h2>
                    </IonText>
                  </IonLabel>
                  <IonLabel class="infoItemLabel2" position="stacked">
                    <IonText class="infoItemText2">
                      <h3>ESG Impact ETF</h3>
                    </IonText>
                  </IonLabel>
                </IonItem>
                <IonItem
                  class="itemContainerInfoItem2 ion-no-padding"
                  lines="none"
                  slot="end"
                >
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

              {/* Card 2 Content 
              <IonList slot="content">
                <IonItem class="itemContainerInfoItem1" lines="none">
                  <IonLabel class="infoItemLabel1">
                    <IonText class="infoItemText1">
                      <h3>Naam: Invesco EQQQ NASDAQ-100 ETF</h3>
                      <h3>Symbool I ISIN: EQQQ | IE0032077012</h3>
                      <h3>Beurs: XET</h3>
                      <h3>Aantal: 10,58</h3>
                      <h3>Koers: € 289,90</h3>
                      <h3>Risicoprofiel: 6</h3>
                      <h3>Valuta: EUR</h3>
                    </IonText>
                    <IonText class="infoItemText1">
                      <br />
                      <h3>Waarde: 3220,56</h3>
                      <h3>GAK: 208,45</h3>
                      <h3>W/V €: 30,40</h3>
                      <h3>W/V %: 0,93%</h3>
                      <h3>Totale W/V €: 823,40</h3>
                    </IonText>
                  </IonLabel>
                </IonItem>
              </IonList>
              */}
            </IonAccordion>

            {/* Card 3 */}
            <IonAccordion value="numbers" class="itemContainerCard">
              {/* Card 3 Header */}
              <IonItem slot="header" class="itemContainerItem" lines="none">
                {/*<IonIcon class="itemContainerLogo1" icon={logoTwitter} />*/}
                <IonItem
                  class="itemContainerInfoItem1 ion-no-padding"
                  lines="none"
                >
                  <IonLabel class="infoItemLabel1" position="stacked">
                    <IonText class="infoItemText1">
                      <h2>I-Shares Durable Energy</h2>
                    </IonText>
                  </IonLabel>
                  <IonLabel class="infoItemLabel2" position="stacked">
                    <IonText class="infoItemText2">
                      <h3>Future proof energy ETF</h3>
                    </IonText>
                  </IonLabel>
                </IonItem>
                <IonItem
                  class="itemContainerInfoItem2 ion-no-padding"
                  lines="none"
                  slot="end"
                >
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

              {/* Card 3 Content 
              <IonList slot="content">
                <IonItem class="itemContainerInfoItem1" lines="none">
                  <IonLabel class="infoItemLabel1">
                    <IonText class="infoItemText1">
                      <h3>Naam: Invesco EQQQ NASDAQ-100 ETF</h3>
                      <h3>Symbool I ISIN: EQQQ | IE0032077012</h3>
                      <h3>Beurs: XET</h3>
                      <h3>Aantal: 10,58</h3>
                      <h3>Koers: € 289,90</h3>
                      <h3>Risicoprofiel: 6</h3>
                      <h3>Valuta: EUR</h3>
                    </IonText>
                    <IonText class="infoItemText1">
                      <br />
                      <h3>Waarde: 3220,56</h3>
                      <h3>GAK: 208,45</h3>
                      <h3>W/V €: 30,40</h3>
                      <h3>W/V %: 0,93%</h3>
                      <h3>Totale W/V €: 823,40</h3>
                    </IonText>
                  </IonLabel>
                </IonItem>
              </IonList>
              */}
            </IonAccordion>
          </IonAccordionGroup>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Tab2);
