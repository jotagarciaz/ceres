import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRow,
    IonGrid,
    IonCol,
    IonImg
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  import './Home.css';
  
  const EmpresaPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton />
              <IonGrid>
                <IonRow align-items-right>
                  <IonCol>
                    <IonTitle>Ceres</IonTitle>
                  </IonCol>
                  <IonCol size = '1'>
                    <IonImg src = "/img/logo.svg" alt = ''></IonImg>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard className="welcome-card">
            <img src="/assets/icon/lesvaques.jpg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle>Local y sostenible.</IonCardSubtitle>
              <IonCardTitle>¡Bienvenid@ {window.localStorage.getItem("currentUser")}!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Promociona tus productos.
              </p>
            </IonCardContent>
          </IonCard>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default EmpresaPage;
  