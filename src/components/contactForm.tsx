import { Button, ControlGroup, Drawer, DrawerSize, FormGroup, HTMLSelect, InputGroup, Label, Radio, RadioGroup } from "@blueprintjs/core";
import React, { useContext, useState } from "react";
import { FormContext } from "../services/customRouter";
import * as emailjs from 'emailjs-com';


function ContactForm(){

    /** Début Drawer */
    const infoForm = useContext(FormContext);
    /** Fin Drawer */

    /**Debut From */
    const initialForm = {
        speedCall: "maintenant",
        phoneNumber: "",
        date: "",
        heure: ""
    }
    const [form, setForm] = useState(initialForm);
    const [validForm, setValidForm] = useState(false);

    function formChange(event: any) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        if(form.phoneNumber !== ""){
            setValidForm(true);
        } else {
            setValidForm(false);
        }
        console.log(validForm);
    }

    function resetForm() {
        setForm({
            speedCall: "maintenant",
            phoneNumber: "",
            date: "",
            heure: ""
        });
        setValidForm(false);
    }

    function handleSubmit() {
        if ( form.phoneNumber === "" ) {
            return;
        }
        else {
            let templateParams = {
                speedCall: form.speedCall,
                phoneNumber: form.phoneNumber,
                date: form.date,
                heure: form.heure,
            }
            console.log(templateParams);
            /**emailjs.send(
                'gmail',
                'template_li5dbtp',
                templateParams,
                'user_azEOdhu0mi0nuNIMqjEW1'
            )**/
            resetForm();
            infoForm.toggledForm();
            infoForm.displayInfoBullEnvoiMeassage(true);
        }
    }
    

    /**Fin form */


    const validButtonStyle = "border border-amber-700 border-solid rounded-md flex justify-center items-center h-8 w-2/3 lg:w-1/5 mt-6 lg:mt-10 mr-4"
    const disbledValidButtonStyle = "bg-gray " + validButtonStyle;
    const basicForm = (
        <div className="mr-12">
            <div className="text-xl lg:mt-20 mt-8">À quel numéro souhaitez-vous être rappelé.e ?</div>
            <div className=" lg:w-2/3 xl:w-1/2">
                <FormGroup className="mt-8 text-xl border-b-2">
                    <InputGroup value={form.phoneNumber} name="phoneNumber" onChange={formChange} className="mb-2" placeholder="* Téléphone"/>
                </FormGroup>
                    <div className="text-xs text-slate-500 flex justify-end"> Exemple : 06 60 06 60 06 </div>
            </div>
            <div className="text-sm lg:mt-20 mt-8">Horaire d'ouverture : du lundi au samedi de 9h à 20h</div>
        
            <button disabled={!validForm} onClick={() => {handleSubmit()}} className={validForm ? validButtonStyle : disbledValidButtonStyle}>
                <div className="text-amber-700 text-base">Valider</div>
            </button>
        </div> 
    );

    const FILTER_OPTIONS = ["8h00", "9h00", "10h00", "11h00", "12h00", "13h00", "14h00", "15h00", "16h00", "17h00", "18h00", "19h00", "20h00"];
    const specificForm = (
        <div className="mr-12">
            <div className="text-sm mt-6 lg:mt-10">Précisez le jour et l'heure qui vous arrangent, ainsi que le numéro de téléphone auquel vous souhaitez être rappelé.e</div>
            <div className=" w-5/6 lg:w-1/2">
                <FormGroup className="lg:mt-8 mt-4 text-xl border-b-2">
                    <InputGroup value={form.phoneNumber} name="phoneNumber" onChange={formChange} className="mb-2" placeholder="* Téléphone"/>
                </FormGroup>
                    <div className="text-xs text-slate-500 flex justify-end"> Exemple : 06 60 06 60 06 </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-2 ">
                <div className=" w-5/6 lg:w-1/2">
                    <div className="text-sm">Date</div>
                    <FormGroup className="border-b-2 mt-2">
                        <InputGroup value={form.date} name="date" onChange={formChange} placeholder="JJ/MM/AAAA"/>
                    </FormGroup>
                </div>
                <div className="lg:ml-8 w-5/6 lg:w-1/2">
                    <div className="text-sm">Heure</div>
                    <FormGroup className="border-b-2 lg:mt-2">
                        <InputGroup value={form.heure} name="heure" onChange={formChange} placeholder="HH:mm"/>
                    </FormGroup>
                </div>
            </div>
    
            <div className="text-sm mt-4 lg:mt-8">Horaire d'ouverture : du lundi au samedi de 9h à 20h</div>

            <div className="flew flex-row justify-start">
                <button disabled={!validForm} onClick={() => {handleSubmit()}} className={validForm ? validButtonStyle : disbledValidButtonStyle}>
                    <div className="text-amber-700 text-base">Valider</div>
                </button>
            </div>
        </div>
    );

    return(
        <Drawer isOpen={infoForm.displayForm} className="md:h-[610px] lg:h-[625px] top-[5%] sm:top-[14%] right-[10%] tracking-wider w-5/6 sm:w-2/3 lg:w-1/2 overflow-y-scroll overflow-y-visible">
            <div className="flex-col m-10 xl:ml-20">
                <div className="flex justify-between">
                    <h2 className="text-2xl">Vous souhaitez être rappelé.e</h2>
                    <input className="w-[30px] h-[30px] ml-4" type="image" src="assets/img/close.png" onClick={infoForm.toggledForm}/>
                </div>
                <RadioGroup
                    name="speedCall"
                    className="mt-10 text-xl"
                    onChange={formChange}
                    selectedValue={form.speedCall}>
                    <Radio label="Maintenant" value="maintenant"/>
                    <Radio label="Plus tard" value="plustard"/>
                </RadioGroup>
                {form.speedCall === "maintenant" ? basicForm : specificForm}
            </div>
        </Drawer>
    );
}
export default ContactForm;