import {
  IonAccordionGroup,
  IonAccordion,
  IonSlides,
  IonSlide,
  IonContent,
  IonImg,
  IonText,
  IonHeader,
  IonPage,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import "./css/Tabs.css";
import "./css/Tab1.css";
import { square } from "ionicons/icons";

const Tab1: React.FC = () => {
  // Swiper is used for the Wallet/Goals tabs

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };

  const [swiper1, setSwiper] = useState<any>({});
  const init = async function (this: any) {
    setSwiper(await this.getSwiper());
  };

  const [swiper2, setSwiper2] = useState<any>({});
  const init2 = async function (this: any) {
    setSwiper2(await this.getSwiper());
  };

  const handleWalletClick = async () => {
    swiper1.slideTo(0);
    swiper2.slideTo(0);
    const walletBtn = document.getElementById(
      "headerTabBtnLabel1"
    ) as HTMLElement;
    walletBtn.style.setProperty("font-weight", "bold");
    const goalsBtn = document.getElementById(
      "headerTabBtnLabel2"
    ) as HTMLElement;
    goalsBtn.style.setProperty("font-weight", "normal");
  };

  const handleGoalsClick = async () => {
    swiper1.slideTo(1);
    swiper2.slideTo(1);
    const walletBtn = document.getElementById(
      "headerTabBtnLabel1"
    ) as HTMLElement;
    walletBtn.style.setProperty("font-weight", "normal");
    const goalsBtn = document.getElementById(
      "headerTabBtnLabel2"
    ) as HTMLElement;
    goalsBtn.style.setProperty("font-weight", "bold");
  };

  return (
    <IonPage>
      {/* Wallet & Goals header (buttons/tabs) */}
      <IonHeader class="smoothiPageHeader ion-no-border">
        <IonContent class="smoothiPageHeaderInfo">
          <IonLabel class="headerTabInfoLabel">
            <h1 id="headerTabInfoLabel1">€ 20.405.34</h1>
            <h3 id="headerTabInfoLabel2">
              5,63%
              <IonImg src={"assets/icon_ytd.png"} class="ytdHeaderIcon" />
            </h3>
          </IonLabel>
        </IonContent>
        <IonContent class="smoothiPageHeaderContent">
          <IonButton
            class="headerTabBtn"
            fill="clear"
            onClick={handleWalletClick}
          >
            <IonLabel class="headerTabBtnLabel headerTabBtnLabelSelected">
              <h2 id="headerTabBtnLabel1">Wallet</h2>
            </IonLabel>
          </IonButton>
          <IonButton
            class="headerTabBtn"
            fill="clear"
            onClick={handleGoalsClick}
          >
            <IonLabel class="headerTabBtnLabel">
              <h2 id="headerTabBtnLabel2">Goals</h2>
            </IonLabel>
          </IonButton>
        </IonContent>

        <div class="diagram1Container">
          {/* Wallet & Goals slider */}
          <IonSlides
            options={slideOpts}
            onIonSlidesDidLoad={init2}
            class="slides1"
          >
            {/* Wallet */}
            <IonSlide class="slide1">
              <IonImg src={"assets/diagram4.png"} class="diagram1" />
            </IonSlide>
            {/* Goals */}
            <IonSlide class="slide1">
              <div class="contentContainerDivGoals">
                <IonImg src={"assets/diagram5.jpg"} class="diagram5" />
              </div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonHeader>

      <IonContent fullscreen>
        {/* Wallet & Goals slider */}
        <IonSlides
          options={slideOpts}
          onIonSlidesDidLoad={init}
          class="walletGoalsTab"
        >
          {/* Wallet */}
          <IonSlide>
            <IonContent fullscreen>
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
                    <IonIcon
                      class="itemContainerLogo2 diagramSquare1"
                      icon={square}
                      slot="end"
                    />
                  </IonItem>

                  {/* Card 1 Content 
                  
                  <IonList slot="content">
                    <IonItem class="itemContainerInfoItem1" lines="none">
                      <IonLabel class="infoItemLabel1">
                        <IonText class="infoItemText1">
                          <h3>Naam: Invesco EQQQ NASDAQ-100 ETF</h3>
                          <h3>Symbool I ISIN: EQQQ | IE0032077012</h3>
                        </IonText>
                        <IonText class="infoItemText1">
                          <br />
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
                    <IonIcon
                      class="itemContainerLogo2 diagramSquare2"
                      icon={square}
                      slot="end"
                    />
                  </IonItem>

                  {/* Card 2 Content 
                  <IonList slot="content">
                    <IonItem class="itemContainerInfoItem1" lines="none">
                      <IonLabel class="infoItemLabel1">
                        <IonText class="infoItemText1">
                          <h3>Naam: Invesco EQQQ NASDAQ-100 ETF</h3>
                          <h3>Symbool I ISIN: EQQQ | IE0032077012</h3>
                        </IonText>
                        <IonText class="infoItemText1">
                          <br />
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
                    <IonIcon
                      class="itemContainerLogo2 diagramSquare3"
                      icon={square}
                      slot="end"
                    />
                  </IonItem>

                  {/* Card 3 Content 
                  <IonList slot="content">
                    <IonItem class="itemContainerInfoItem1" lines="none">
                      <IonLabel class="infoItemLabel1">
                        <IonText class="infoItemText1">
                          <h3>Naam: Invesco EQQQ NASDAQ-100 ETF</h3>
                          <h3>Symbool I ISIN: EQQQ | IE0032077012</h3>
                        </IonText>
                        <IonText class="infoItemText1">
                          <br />
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
            </IonContent>
          </IonSlide>

          {/* Goals */}
          <IonSlide>
            <IonContent fullscreen>
              <IonAccordionGroup>
                {/* Card 1 */}
                <IonAccordion value="card1" class="itemContainerCard">
                  {/* Card 1 Header */}
                  <IonItem slot="header" class="itemContainerItem" lines="none">
                    <IonLabel class="infoItemLabelGoals1" slot="start">
                      <h2>Goal</h2>
                    </IonLabel>
                    <IonLabel class="infoItemLabelGoals2" slot="end">
                      <h2>€ 100.000</h2>
                    </IonLabel>
                  </IonItem>
                </IonAccordion>

                {/* Card 2 */}
                <IonAccordion value="card2" class="itemContainerCard">
                  {/* Card 2 Header */}
                  <IonItem slot="header" class="itemContainerItem" lines="none">
                    <IonLabel class="infoItemLabelGoals1" slot="start">
                      <h2>Horizon</h2>
                    </IonLabel>
                    <IonLabel class="infoItemLabelGoals2" slot="end">
                      <h2>10 jaar</h2>
                    </IonLabel>
                  </IonItem>
                </IonAccordion>

                {/* Card 3 */}
                <IonAccordion value="numbers" class="itemContainerCard">
                  {/* Card 3 Header */}
                  <IonItem slot="header" class="itemContainerItem" lines="none">
                    <IonLabel class="infoItemLabelGoals1" slot="start">
                      <h2>Risicoprofiel</h2>
                    </IonLabel>
                    <IonLabel class="infoItemLabelGoals2" slot="end">
                      <h2>Matig offensief</h2>
                    </IonLabel>
                  </IonItem>
                </IonAccordion>
              </IonAccordionGroup>
            </IonContent>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Tab1);
