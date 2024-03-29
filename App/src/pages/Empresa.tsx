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
    IonImg,
    IonButton
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
            <img src="/assets/icon/empresa.jpg" alt=""/>
            <IonCardHeader>
              <IonCardSubtitle>Local y sostenible.</IonCardSubtitle>
              <IonCardTitle>¡Bienvenido a Ceres para Empresas,  {window.localStorage.getItem("currentUser")}!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Puedes ayudar a promocionar tu negocio añadiendo tu pagnia web a tu perfil, y ofertando tus productos y actividades.
              </p>
              <p>
                ¡Anímate!
              </p>
            </IonCardContent>
          </IonCard>

          <IonRow>
            <IonCol>
              <IonButton routerLink="/publicarOferta" type="submit" expand="block">Publicar Oferta</IonButton>
            </IonCol>
          </IonRow>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default EmpresaPage;
  