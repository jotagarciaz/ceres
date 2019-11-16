import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar, IonCol, IonGrid, IonRow, IonImg, IonLabel } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';
import alimentacion from '../data/alimentacion.json';
import './Alimentacion.css';


const ListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
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

  const items = alimentacion.map((alimentacion,i) => {
    return (
      <IonItem key={i} className="alimentacion">

          <IonAvatar slot="start" className="img">
              <img src={alimentacion.Imagen} alt={alimentacion.Nombre}></img>
          </IonAvatar>

            <IonLabel> <a href = {alimentacion.Url}>{alimentacion.Nombre}</a></IonLabel>


      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
