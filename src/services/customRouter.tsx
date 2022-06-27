import React, { useCallback, useState } from "react";
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
  displayForm: true,
  toggledForm: () => {
  }
});

export function CustomRouter() {

  const [displayForm, setDisplayTheme] = useState(true);
  const toggledForm = useCallback(function() {
    setDisplayTheme(!displayForm)
  }, []);

  let currentStateForm = { 
    displayForm: displayForm,
    toggledForm: toggledForm
  }

  return (
      <Router>
        <FormContext.Provider value={currentStateForm}>
          <CustomNavbar></CustomNavbar>
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