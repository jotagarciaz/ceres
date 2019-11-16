import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar, IonCol, IonGrid, IonRow, IonImg, IonLabel, IonChip } from '@ionic/react';
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

          <IonAvatar slot="start" className="img">
              <img src={mercadillo.Imagen} alt={mercadillo.Nombre}/>
          </IonAvatar>

            <IonLabel>{mercadillo.Nombre}</IonLabel>
            <IonChip>
                <IonIcon icon="close"/>
                <IonLabel>{mercadillo.Tipo}</IonLabel>
            </IonChip>
        
          Horario: {mercadillo.HoraIni} - {mercadillo.HoraFin}

      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
