import React, { useRef } from "react";
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

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

export default function UpdateOrDelete(props) {
  const eventNameInput = useRef(null);
  const aboutDayInput = useRef(null);

  const listItem = props.inputList.filter((x) => x.id == props.selectedItem);

  const saveBtnHandler = () => {
    if (!eventNameInput.current.value) {
      alert("Missing Input: Add an input for event name");
      return;
    } else if (!aboutDayInput.current.value) {
      alert("Missing Input: Add an input for about that day");
    } else {
      props.updateBtn(
        listItem.id,
        listItem[0].image,
        eventNameInput.current.value,
        aboutDayInput.current.value
      );
    }
  };

  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonTitle>Update/Delete</IonTitle>
        </IonRow>

        <IonRow>
          <IonCard>
            <IonItem>
              <IonImg className="userImage" src={listItem[0].image} />
            </IonItem>
          </IonCard>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">
                Change:'{listItem[0].eventName}'
              </IonLabel>
              <IonInput ref={eventNameInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">
                Change:'{listItem[0].aboutThatDay}'
              </IonLabel>
              <IonInput ref={aboutDayInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow className="ion-text-right">
          <IonCol>
            <IonButton color="light" onClick={props.cancelBtn}>
              Cancel
            </IonButton>
            <IonButton onClick={props.deleteBtn} color="danger">
              Delete
            </IonButton>
            <IonButton onClick={saveBtnHandler}>Update</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}
