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
  
  const UsuarioPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton />
              <IonGrid>
                <IonRow align-items-right>
                  <IonCol>
                    <h1>Página de bienvenida</h1>
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
            <img src="/assets/icon/usuarios.jpg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle>Local y sostenible.</IonCardSubtitle>
              <IonCardTitle>¡Bienvenido a Ceres, {window.localStorage.getItem("currentUser")}!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                ¿Sabías que puedes valorar los productos y actividades que mas te gusten?
              </p>
              <p>
                Ayudas con ello a las empresas y mercadillos a ser reconocidos entre el resto de usuarios
              </p>
              <p>
                ¡Anímate!
              </p>
            </IonCardContent>
          </IonCard>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default UsuarioPage;
  