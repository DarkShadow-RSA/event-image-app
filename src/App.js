import React, { useRef, useState } from "react";
import { IonReactRouter } from "@ionic/react-router";

import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
} from "@ionic/react";

//  indicate which icons you would like to import

import InsertForm from "./pages/InsertForm";
import UpdateOrDelete from "./pages/UpdateOrDelete";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// ********************************LOGIC *******************************************
export default function App() {
  const [changePage, setChangePage] = useState("home");
  const [selectedItemHandler, setSelectedItemHandler] = useState("");

  let content = "";
  const [inputList, setInputList] = useState([]);

  const saveInputHandler = (pic, e, f) => {
    setInputList([
      ...inputList,
      {
        id: new Date().getTime().toString(),
        image: pic,
        eventName: e,
        aboutThatDay: f,
      },
    ]);
    setChangePage("home");
    changePageHandler();
  };

  const cancelBtnHandler = () => {
    setChangePage("home");
    changePageHandler();
  };

  const addItemHandler = () => {
    setChangePage("insertPage");
    changePageHandler();
  };

  const updateAndDeleteHandler = (selectedID) => {
    setChangePage("UpdateOrDelete");
    setSelectedItemHandler(selectedID);
    changePageHandler();
  };

  const updateInputHandler = (idList, imageList, eventList, nameList) => {
    const newList = inputList.filter((item) => item.id !== selectedItemHandler);
    setInputList([
      ...newList,
      {
        id: idList,
        image: imageList,
        eventName: eventList,
        aboutThatDay: nameList,
      },
    ]);
    setChangePage("home");
    changePageHandler();
  };

  const deleteInputHandler = () => {
    const newList = inputList.filter((item) => item.id !== selectedItemHandler);
    setInputList(newList);
    setChangePage("home");
    changePageHandler();
  };

  // *******************************Change page content**************************************************

  const changePageHandler = () => {
    if (changePage == "home") {
      content = (
        <Home
          inputList={inputList}
          insertBtn={addItemHandler}
          updateAndDeleteBtn={updateAndDeleteHandler}
        />
      );
    } else if (changePage == "insertPage") {
      content = (
        <InsertForm cancelBtn={cancelBtnHandler} saveBtn={saveInputHandler} />
      );
    } else if (changePage == "UpdateOrDelete") {
      content = (
        <UpdateOrDelete
          cancelBtn={cancelBtnHandler}
          inputList={inputList}
          selectedItem={selectedItemHandler}
          deleteBtn={deleteInputHandler}
          updateBtn={updateInputHandler}
        />
      );
    }
  };
  changePageHandler();

  // *******************************FRONT END**************************************************
  return (
    <IonApp>
      <IonHeader className="ion-text-center">
        <IonToolbar>
          <IonTitle>Event Images App</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Body content */}
      <IonContent className="ion-text-center">
        <IonGrid>{content}</IonGrid>
      </IonContent>
    </IonApp>
  );
}
