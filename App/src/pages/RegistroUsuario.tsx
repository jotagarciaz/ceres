import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText, IonGrid, IonImg } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps {}

interface LoginProps extends OwnProps { }

const RegistroUsuario: React.FC<LoginProps> = ({history}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [tipo, setTipo] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordError2, setPassword2Error] = useState(false);
  const [tipoError, setTipoError] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!username) {
      setUsernameError(true);
    }
    if(!password) {
      setPasswordError(true);
    }

    if(!password2) {
      setPassword2Error(true);
    }

    if(!tipo) {
      setTipoError(true);
    }

    if(username && password) {
      history.push('/tabs/schedule', {direction: 'none'});
    }
  };

  return (
    <IonPage id="signup-page">
     <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
            <IonGrid>
              <IonRow align-items-right>
                <IonCol>
                  <IonTitle>Registro</IonTitle>
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
            <IonItem>
              <IonLabel position="stacked" color="primary">Nombre Usuario</IonLabel>
              <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => {
                setUsername(e.detail.value!);
                setUsernameError(false);
              }}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere Nombre de Usuario
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Contraseña</IonLabel>
              <IonInput name="password" type="password" value={password} onIonChange={e => {
                setPassword(e.detail.value!);
                setPasswordError(false);
              }}>
              </IonInput>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere contraseña
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Repetir Contraseña</IonLabel>
              <IonInput name="password2" type="password" value={password2} onIonChange={e => {
                setPassword2(e.detail.value!);
                setPassword2Error(false);
              }}>
              </IonInput>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere repetir la contraseña
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Tipo de cuenta</IonLabel>
              <IonInput name="tipo" type="text" value={tipo} onIonChange={e => {
                setTipo(e.detail.value!);
                setTipoError(false);
              }}>
              </IonInput>
            </IonItem>

            {formSubmitted && tipoError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere Tipo de Cuenta
              </p>
            </IonText>}

          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Crear</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default RegistroUsuario;