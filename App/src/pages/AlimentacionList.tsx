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
          <IonButtons>
            <IonMenuButton />
            <IonGrid>
              <IonRow align-items-right>
                <IonCol>
                  <h1 >Alimentación</h1>
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

  const items = alimentacion.map((alimentacion,i) => {
    return (
      <IonItem key={i} className="alimentacion">

          <IonAvatar slot="start" className="img">
              <img src={alimentacion.Imagen} alt={alimentacion.Nombre}></img>
          </IonAvatar>

            <IonLabel> <a href = {alimentacion.Url}>{alimentacion.Nombre}</a></IonLabel>
            <IonLabel> {alimentacion.Num}</IonLabel>


      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
