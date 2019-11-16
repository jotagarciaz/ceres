import React, { useState } from 'react';
import { IonImg, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow,IonGrid, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
interface OwnProps extends RouteComponentProps {}


interface LoginProps extends OwnProps { }

const Oferta: React.FC<LoginProps> = ({history}) => {

  const [titulo, setTitulo] = useState('');  
  const [descripcion, setDescripcion] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [tituloError, setTituloError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);
  
  
    const oferta = async (e: React.FormEvent) => {

        e.preventDefault();
    
        setFormSubmitted(true);
        if(!titulo) {
            setTituloError(true);
        }
        
        if(!descripcion) {
            setDescripcionError(true);
        }
       
        if(titulo && descripcion){
            history.push('/empresa', {direction: '/empresa'});
        }
    };

  return (
    <IonPage id="publicar-oferta-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
            <IonGrid>
              <IonRow align-items-right>
                <IonCol>
                  <h1>Publicar Oferta</h1>
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

        <form noValidate onSubmit={oferta}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Título</IonLabel>
              <IonInput name="titulo" type="text" value={titulo} spellCheck={false} autocapitalize="off" onIonChange={(e: { detail: { value: any; }; }) => setTitulo(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && tituloError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere un título
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Descripcion</IonLabel>
              <IonInput name="descripcion" type="text" value={descripcion} onIonChange={(e: { detail: { value: any; }; }) => setDescripcion(e.detail.value!)}>
              </IonInput>
            </IonItem>

            {formSubmitted && descripcionError && <IonText color="danger">
              <p className="ion-padding-start">
                Se requiere una descripcion
              </p>
            </IonText>}

          </IonList>

          <IonRow>
            <IonCol>
            </IonCol>
            <IonCol>
            <IonButton type="submit" expand="block">Publicar</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default Oferta;