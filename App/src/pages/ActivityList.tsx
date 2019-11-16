import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar,IonGrid,IonRow,IonCol, IonImg, IonLabel } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import activities from '../data/actividades.json';
import React from 'react';
import './Actividades.css';




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
                  <h1>Actividades</h1>
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

  const items = activities.map((actividad,i) => {
    return (
      <IonItem key={i} className="actividades">

        <IonGrid>
          <IonRow>
            <IonCol size = "1">
              <IonAvatar className="IonImg">
                <IonImg src={actividad.Imagen} alt={actividad.Nombre}></IonImg>
              </IonAvatar>
            </IonCol>
            <IonCol size = "10">
              <IonLabel>{actividad.Nombre}</IonLabel>
            </IonCol>
            <IonCol size = "1" align-items-right>
              Precio: {actividad.Precio}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
