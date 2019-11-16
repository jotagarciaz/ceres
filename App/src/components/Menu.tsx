import { home, list, basket, basketball, cart, nutrition } from 'ionicons/icons';

import {
  IonContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonRow>
            <IonCol>
                <IonTitle>Menú</IonTitle>
            </IonCol>
            <IonCol>

            </IonCol>
        </IonRow>
      </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonGrid>
            <IonMenuToggle key={1} autoHide={false}>
                <IonRow>
                    <IonCol>
                        <IonItem routerLink={"/login"} routerDirection="none">
                            <IonLabel>{"Iniciar sesión"}</IonLabel>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem routerLink={"/login"} routerDirection="none">
                            <IonLabel>{"Crear cuenta"}</IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonMenuToggle>

      </IonGrid>
      <IonList>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink={appPage.url} routerDirection="none">
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}

      </IonList>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
