import { useState, useRef } from "react";

import {
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonImg,
} from "@ionic/react";

import "@ionic/react/css/core.css";
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";

export default function InsertForm(props) {
  const eventNameInput = useRef(null);
  const aboutDayInput = useRef(null);

  const [photo, setPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    var imageUrl = image.dataUrl;
    setPhoto(imageUrl);
  };

  const saveBtnHandler = () => {
    if (!eventNameInput.current.value || !aboutDayInput.current.value) {
      alert("Missing Input: Add an input");
      return;
    }

    props.saveBtn(
      photo,
      eventNameInput.current.value,
      aboutDayInput.current.value
    );
  };

  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonTitle>Insert Form</IonTitle>
        </IonRow>

        <IonRow>
          <IonCard className="ion-text-center">
            <IonImg className="userImage" src={photo} />

            <IonItem className="ion-text-center">
              <IonButton onClick={() => takePhoto()}>Upload here</IonButton>
            </IonItem>
          </IonCard>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Event Name:</IonLabel>
              <IonInput ref={eventNameInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">About that day:</IonLabel>
              <IonInput ref={aboutDayInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow className="ion-text-right">
          <IonCol>
            <IonButton color="light" onClick={props.cancelBtn}>
              Cancel
            </IonButton>
            <IonButton onClick={saveBtnHandler}>Save</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}
