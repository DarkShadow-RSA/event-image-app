import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardContent,
  IonImg,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

export default function InsertForm(props) {
  const handleInput = (el) => {
    props.updateAndDeleteBtn(el);
  };
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-right">
            <IonButton onClick={props.insertBtn}>Add Item</IonButton>
          </IonCol>
        </IonRow>

        {/* row for results */}
        {props.inputList.map((e) => (
          <IonRow key={e.id}>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <IonImg className="userImage" src={e.image} />
                  <h1>Event Name:</h1>
                  <h2>{e.eventName}</h2>
                  <h1>About that day: </h1>
                  <h3>{e.aboutThatDay}</h3>
                  <IonButton onClick={() => handleInput(e.id)}>
                    Update/delete
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </div>
  );
}
