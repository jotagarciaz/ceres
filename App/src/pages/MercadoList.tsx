import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar, IonCol, IonGrid, IonRow, IonImg, IonLabel } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';
import mercadillos from '../data/mercadillos.json';
import './Mercado.css';


const ListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
            <IonGrid>
              <IonRow align-items-right>
                <IonCol>
                  <IonTitle>Mercados</IonTitle>
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
        <ListItems />
      </IonContent>
    </IonPage>
  );
};


const ListItems = () => {
  const icons = [
    flask,
    wifi,
    beer,
    football,
    basketball,
    paperPlane,
    americanFootball,
    boat,
    bluetooth,
    build
  ];

  const items = mercadillos.map((mercadillo,i) => {
    return (
      <IonItem key={i} className="mercados">
          <IonGrid>
            <IonRow>
              <IonCol size = "1">
                <IonAvatar className="IonImg">
                  <IonImg src={mercadillo.Imagen} alt={mercadillo.Nombre}></IonImg>
                </IonAvatar>
              </IonCol>
              <IonCol size = "4">
                <IonLabel>{mercadillo.Nombre} ({mercadillo.Tipo})</IonLabel>
              </IonCol>
              <IonCol size = "4">
                <IonLabel>{mercadillo.Lugar}</IonLabel>
              </IonCol>
              <IonCol size = "3">
                {mercadillo.Fecha} de {mercadillo.HoraIni} - {mercadillo.HoraFin}
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
