import { home, list, basket, basketball, cart, nutrition } from 'ionicons/icons';

import {
  IonContent,
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
  IonToolbar,
  IonAvatar,
  IonImg
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import "./Menu.css";

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
  
}

const logout = () =>{
  window.localStorage.clear()
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId="main" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menú</IonTitle>
        { window.localStorage.length > 0 
        &&<IonRow slot="end" >
                    <IonCol >
                    <IonAvatar align-items-right>
                          <IonImg id="srredondo" src="/assets/sr_redondo.png" />
                    </IonAvatar>
                    <IonLabel>{window.localStorage.getItem('currentUser')}</IonLabel>
                    </IonCol>
                </IonRow>}
      </IonToolbar>
    
    </IonHeader>
    <IonContent>
      {window.localStorage.length == 0 
        &&<IonGrid>
            <IonMenuToggle key={1} autoHide={false}>
                <IonRow>
                    <IonCol>
                        <IonItem routerLink={"/login"} routerDirection="none">
                            <IonLabel>{"Iniciar sesión"}</IonLabel>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem routerLink={"/regUsr"} routerDirection="none">
                            <IonLabel>{"Crear cuenta"}</IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonMenuToggle>
      </IonGrid>
      }{localStorage.length > 0 
        &&<IonGrid>
            <IonMenuToggle key={1} autoHide={false}>
                <IonRow>
                    <IonCol>
                        <IonItem onClick={logout} routerLink={"#"} routerDirection="none">
                            <IonLabel>{"Cerrar sesión"}</IonLabel>
                        </IonItem>
                    </IonCol>
                    
                </IonRow>
            </IonMenuToggle>
      </IonGrid>
      }
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
