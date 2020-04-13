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

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
            <IonGrid>
              <IonRow align-items-right>
                <IonCol>
                  <h1>Ceres</h1>
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
            <IonCardTitle>¡Bienvenido a Ceres!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Desde Ceres queremos ayudarte a encontrar los mejores productos orgánicos y artesanos, a la venta a tu alrededor. También queremos darte ideas de actividades que puedes hacer todos los días, libres de contaminación, y acercar a los consumidores a los mercados de su comunidad, para fomentar el desarrollo de los negocios de la zona.
            </p>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
