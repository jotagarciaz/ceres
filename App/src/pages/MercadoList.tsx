import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar, IonCol, IonGrid, IonRow, IonImg, IonLabel, IonChip } from '@ionic/react';
import { pricetag } from 'ionicons/icons';
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
                    <IonLabel>{mercadillo.Nombre}</IonLabel>
                    <IonChip>
                        <IonItem>
                            <IonIcon slot="start" icon={pricetag} />
                            <IonLabel>{mercadillo.Tipo}</IonLabel>
                        </IonItem>
                    </IonChip>
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
