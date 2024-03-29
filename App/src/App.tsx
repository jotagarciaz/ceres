import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Login from './pages/Login';
import RegistroUsuario from './pages/RegistroUsuario'

import Menu from './components/Menu';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Usuario from './pages/Usuario';
import List from './pages/List';
import ActivityList from './pages/ActivityList';
import MercadoList from './pages/MercadoList';
import TiendasList from './pages/TiendasList';
import AlimentacionList from './pages/AlimentacionList';
import Oferta from './pages/PublicarOferta'
import { home, list, basket, basketball, cart, nutrition, chatboxes } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const appPages: AppPage[] = [
  {
    title: 'Bienvenida',
    url: '/empresa',
    icon: chatboxes
  },
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Actividades',
    url: '/activities',
    icon: basketball
  },
  {
    title: 'Alimentación',
    url: '/alimentacion',
    icon: nutrition
  },
  {
    title: 'Mercado',
    url: '/mercados',
    icon: cart
  },
  {
    title: 'Empresas artesanales',
    url: '/tiendas',
    icon: basket
  },
  
];


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/tiendas" component={TiendasList} exact={true} />
          <Route path="/activities" component={ActivityList} exact={true} />
          <Route path="/mercados" component={MercadoList} exact={true} />
          <Route path="/alimentacion" component={AlimentacionList} exact={true} />
          <Route path="/empresa" routerLink={"/empresa"} routerDirection="none" component={Empresa} exact={true} /> 
          <Route path="/usuario" routerLink={"/usuario"} routerDirection="none" component={Usuario} exact={true} />  
          <Route path="/login" component={Login} exact={true} /> 
          <Route path="/regUsr" component={RegistroUsuario} exact={true} />
          <Route path="/publicarOferta" component={Oferta} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" exact={true} /> } />
         
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
