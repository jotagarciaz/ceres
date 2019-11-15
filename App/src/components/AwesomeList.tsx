import { IonButtons,IonLabel ,IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/react';
import React from 'react';

type AwesomeListProps = {
  image: string,
  name: string,
  description?: string
}

export const AwesomeList: React.FC<AwesomeListProps> = ({image,name,description}) => {

        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(x => {
        return (
          <IonItem key={x}>
            <IonAvatar slot="start">
                <img src={image} />
                <IonLabel>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </IonLabel>
              </IonAvatar>
          </IonItem>
        );
        });
        return <IonList>{items}</IonList>;
};

export default AwesomeList;