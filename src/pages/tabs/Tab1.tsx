import {
  IonAccordionGroup,
  IonAccordion,
  IonSlides,
  IonSlide,
  IonContent,
  IonImg,
  IonList,
  IonText,
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton
} from "@ionic/react";
import React from "react";
import { useState } from "react";
import "./css/Tabs.css";
import "./css/Tab1.css";
import {
  logoLinkedin,
  logoTwitter,
  logoFacebook,
  square
} from "ionicons/icons";

const Tab1: React.FC = () => {
  // Swiper is used for the Wallet/Goals tabs

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };

  const [swiper, setSwiper] = useState<any>({});
  const init = async function (this: any) {
    setSwiper(await this.getSwiper());
  };

  const handleWalletClick = async () => {
    swiper.slideTo(0);
    const walletBtn = document.getElementById(
      "headerTabBtnLabel1"
    ) as HTMLElement;
    walletBtn.style.setProperty("color", "#EF7754");
    const goalsBtn = document.getElementById(
      "headerTabBtnLabel2"
    ) as HTMLElement;
    goalsBtn.style.setProperty("color", "#FFFFFF");
  };

  const handleGoalsClick = async () => {
    swiper.slideTo(1);
    const walletBtn = document.getElementById(
      "headerTabBtnLabel1"
    ) as HTMLElement;
    walletBtn.style.setProperty("color", "#FFFFFF");
    const goalsBtn = document.getElementById(
      "headerTabBtnLabel2"
    ) as HTMLElement;
    goalsBtn.style.setProperty("color", "#EF7754");
  };

  return (
    <IonPage>
      {/* Wallet & Goals header (buttons/tabs) */}
      <IonHeader class="smoothiHeader">
        <IonToolbar class="smoothiHeaderToolBar"></IonToolbar>
        <IonContent class="smoothiHeaderContent">
          <IonButton
            class="headerTabBtn"
            fill="clear"
            onClick={handleWalletClick}
          >
            <IonLabel
              class="headerTabBtnLabel headerTabBtnLabelRed"
              id="headerTabBtnLabel1"
            >
              <h2>Wallet</h2>
            </IonLabel>
          </IonButton>
          <IonButton
            class="headerTabBtn"
            fill="clear"
            onClick={handleGoalsClick}
          >
            <IonLabel class="headerTabBtnLabel" id="headerTabBtnLabel2">
              <h2>Goals</h2>
            </IonLabel>
          </IonButton>
        </IonContent>
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
              <IonImg src={"assets/diagram1.png"} class="diagram1" />

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
                    <IonItem
                      class="itemContainerInfoItem2"
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

                  {/* Card 1 Content */}
                  <IonList slot="content">Content</IonList>
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
                    <IonItem
                      class="itemContainerInfoItem2"
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

                  {/* Card 2 Content */}
                  <IonList slot="content">Content</IonList>
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
                    <IonItem
                      class="itemContainerInfoItem2"
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

                  {/* Card 3 Content */}
                  <IonList slot="content">Content</IonList>
                </IonAccordion>
              </IonAccordionGroup>
            </IonContent>
          </IonSlide>

          {/* Goals */}
          <IonSlide>
            <IonContent fullscreen>
              <IonImg src={"assets/diagram2.png"} class="diagram1" />

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
                    <IonItem
                      class="itemContainerInfoItem2"
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

                  {/* Card 1 Content */}
                  <IonList slot="content">Content</IonList>
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
                    <IonItem
                      class="itemContainerInfoItem2"
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

                  {/* Card 2 Content */}
                  <IonList slot="content">Content</IonList>
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
                    <IonItem
                      class="itemContainerInfoItem2"
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

                  {/* Card 3 Content */}
                  <IonList slot="content">Content</IonList>
                </IonAccordion>
              </IonAccordionGroup>
            </IonContent>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
