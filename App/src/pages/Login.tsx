import React, { useState } from 'react';
import { IonImg, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow,IonGrid, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import usuarios from '../data/usuarios.json';
interface OwnProps extends RouteComponentProps {}


interface LoginProps extends OwnProps { }

const Login: React.FC<LoginProps> = ({history}) => {

  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [hasMatch,setHasMatch] = useState(false);
  
  
  const login = async (e: React.FormEvent) => {
    console.log("entrando")
    e.preventDefault();
    
    setFormSubmitted(true);
    if(!username) {
      setUsernameError(true);
    }
    if(!password) {
      setPasswordError(true);
    }
    
    let tipo = "";
    let hasMatch = false;
    if(username && password) {
      for (var index = 0; index < usuarios.length; ++index) {

          var user = usuarios[index];

          if(user.Email === username && user.Contrasenha === password ){
            hasMatch=true;
            tipo = user.Tipo;
            break;
          }
      }
      

      if (hasMatch){
        

        window.localStorage.setItem('currentUser',username);
        window.localStorage.setItem('tipo', tipo);
    
       
        if(tipo === "Empresa"){
          history.push('/empresa', {direction: '/empresa'});
        }else{
          history.push('/usuario', {direction: '/usuario'});
        }
      }
      
    }
  };

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
            <IonGrid>
              <IonRow align-items-right>
                <IonCol>
                  <h1>Iniciar sesión</h1>
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

        <form noValidate onSubmit={login}>
          <IonList>
            {formSubmitted && !hasMatch && <IonText color="danger">
              <p className="ion-padding-start">
                Los datos no son validos.
              </p>
            </IonText>}
            <IonItem>
              <IonLabel position="stacked" color="primary">Nombre usuario</IonLabel>
              <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={(e: { detail: { value: any; }; }) => setUsername(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere nombre de usuario
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Contraseña</IonLabel>
              <IonInput name="password" type="password" value={password} onIonChange={(e: { detail: { value: any; }; }) => setPassword(e.detail.value!)}>
              </IonInput>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere contraseña
              </p>
            </IonText>}

          </IonList>

          <IonRow>
            <IonCol>
              <IonButton routerLink="/regUsr" color="light" expand="block">Crear cuenta</IonButton>
            </IonCol>
            <IonCol>
              <IonButton type="submit" expand="block">Iniciar sesión</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default Login;