import { Position, Toast, Toaster } from "@blueprintjs/core";
import React, { useCallback, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ContactForm from "../components/contactForm";
import CustomNavbar from "../components/customNavbar";
import EnsavoirPlus from "../scenes/home/ensavoirplus";
import Home from "../scenes/home/home";


export const FormContext =  React.createContext({
  displayForm: false,
  toggledForm: () => {},
  displayTarif: false,
  goToTarif: (value:boolean) => {},
  displayInfoBullEnvoiMeassage: (value: boolean) => {}
});

export function CustomRouter() {

  const [displayForm, setDisplayForm] = useState(false);
  const [displayTarif, setDisplayTarif] = useState(false);
  const toggledForm = useCallback(function() {
    setDisplayForm(!displayForm)
  }, [displayForm]);
  const goToTarif = useCallback(function(value:boolean) {
    setDisplayTarif(value);
  },  [displayTarif])

  const [displayInfoBullEnvoiMessage, setDisplayInfoBullEnvoiMessage] = useState(true);
  const displayInfoBullEnvoiMeassage = useCallback(function() {
    setDisplayInfoBullEnvoiMessage(true);
  },[displayInfoBullEnvoiMessage])

  let currentStateForm = { 
    displayForm: displayForm,
    toggledForm: toggledForm,
    displayTarif: displayTarif,
    goToTarif: goToTarif,
    displayInfoBullEnvoiMeassage: displayInfoBullEnvoiMeassage
  }

  return (
      <Router>
        <FormContext.Provider value={currentStateForm}>
          <CustomNavbar></CustomNavbar>
          { displayInfoBullEnvoiMessage ? 
          <Toaster position={Position.TOP}>
              <Toast onDismiss={() => {setDisplayInfoBullEnvoiMessage(false)}} message="Votre message a bien été envoyé." className="text-lime-800" timeout={5000}/>
          </Toaster>
          : "" }
          <ContactForm></ContactForm>
          <Routes>
            <Route path="/" element={<Home goToTarifs={false} idContentTarifDetails=""/>}></Route>
            <Route path="/ensavoirplus" element={<EnsavoirPlus/>}></Route>
            <Route path="/tarifs" element={<Home goToTarifs={true} idContentTarifDetails=""/>}></Route>
            <Route path="/tarifs/individuelle" element={<Home goToTarifs={true} idContentTarifDetails="SCEANCE_INDIVIDUELLE"/>}></Route>
            <Route path="/tarifs/couple" element={<Home goToTarifs={true} idContentTarifDetails="SCEANCE_COUPLE"/>}></Route>
            <Route path="/tarifs/famille" element={<Home goToTarifs={true} idContentTarifDetails="SCEANCE_FAMILIAL"/>}></Route>
          </Routes>
        </FormContext.Provider>
      </Router>
  );
}