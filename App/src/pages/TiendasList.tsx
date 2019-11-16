import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar, IonCol, IonGrid, IonRow, IonImg, IonLabel } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';
import tiendas from '../data/tiendas.json';
import './Tiendas.css';


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
                  <IonTitle>Empresas artesanales</IonTitle>
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

  const items = tiendas.map((tiendas,i) => {
    return (
      <IonItem key={i} className="tiendas">

          <IonAvatar slot="start" className="img">
              <img src={tiendas.Imagen} alt={tiendas.Nombre}></img>
          </IonAvatar>

            <IonLabel> <a href = {tiendas.Url}>{tiendas.Nombre}</a></IonLabel>


      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
