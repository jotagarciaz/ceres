import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar,IonGrid,IonRow,IonCol, IonImg, IonLabel, IonChip } from '@ionic/react';
import {thumbsUp,thumbsDown } from 'ionicons/icons';
import activities from '../data/actividades.json';
import React from 'react';
import { pricetag } from 'ionicons/icons';
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
    thumbsDown,
    thumbsUp
  ];

  const items = activities.map((actividad,i) => {
    return (
      <IonItem key={i} className="actividades">
        <IonGrid>
          <IonRow>
            <IonCol size = "2">
              <IonAvatar className="IonImg">
                <IonImg src={actividad.Imagen} alt={actividad.Nombre}></IonImg>
              </IonAvatar>
            </IonCol>
            
            <IonCol size = "9">
              <IonLabel>{actividad.Nombre}</IonLabel>
                <IonChip>
                  <IonItem color='default'>
                    <IonIcon slot="start" icon={pricetag}/>
                    <IonLabel>{actividad.Etiqueta}</IonLabel>
                </IonItem>
              </IonChip>        
            </IonCol>
            <IonCol size = "3">
              <IonRow>
                <IonCol size="2">
                  <IonIcon icon={thumbsDown} />
                </IonCol>
                <IonCol size="2">
                  <IonLabel>{actividad.Valoracion}</IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonIcon icon={thumbsUp}/>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size = "2" align-items-right>
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
