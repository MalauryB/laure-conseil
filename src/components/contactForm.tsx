import { Button, ControlGroup, Drawer, HTMLSelect, Label, Radio, RadioGroup } from "@blueprintjs/core";
import React, { useContext, useState } from "react";
import { FormContext } from "../services/customRouter";

function ContactForm(){

    /** Début Drawer */
    const infoForm = useContext(FormContext);
    /** Fin Drawer */

    /**Debut From */
    const initialForm = {
        speedCall: "plustard",
        phoneNumber: ""
    }
    const [form, setForm] = useState(initialForm);

    function formChange(event: any) {
        console.log(event.target)
        setForm({
            ...form,
            speedCall: event.target.value
        });
    }
    /**Fin form */

    const basicForm = (
        <div>
            <div className="text-xl mt-16">À quel numéro souhaitez-vous être rappelé.e ?</div>
            <div className="w-1/2">
                <Label className="mt-8 text-xl border-b-2">
                    +33 0 
                    <input className="ml-2 mb-2" placeholder="Téléphone"/>
                </Label>
                    <div className="text-xs text-slate-500 flex justify-end"> Exemple : 06 60 06 60 06 </div>
            </div>
            <div className="text-sm mt-16">Horaire d'ouverture : du lundi au samedi de 9h à 20h</div>
            <div className="border border-amber-700 border-solid rounded-md flex justify-center items-center h-8 w-1/5 mt-10 mr-4">
                <div className="text-amber-700 text-base">Valider</div>
            </div> 
        </div> 
    );

    const FILTER_OPTIONS = ["8h00", "9h00", "12h00", "14h00", "20h00"];
    const specificForm = (
        <div>
            <div className="text-sm mt-10">Précisez le jour et l'heure qui vous arrangent, ainsi que le numéro de téléphone auquel vous souhaitez être rappelé.e</div>
            <div className="w-1/2">
                <Label className="mt-8 text-xl border-b-2">
                    +33 0 
                    <input className="ml-2 mb-2" placeholder="Téléphone"/>
                </Label>
                    <div className="text-xs text-slate-500 flex justify-end"> Exemple : 06 60 06 60 06 </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <div className="text-sm">Date</div>
                    <Label className="border-b-2 mt-2">
                        <input className="" placeholder="JJ/MM/AAAA"/>
                    </Label>
                </div>
                <ControlGroup className="w-1/2 mt-4 ml-4" fill={true} vertical={false}>
                    <HTMLSelect className="select:bg-white" options={FILTER_OPTIONS} />
                </ControlGroup>
            </div>
    
            <div className="text-sm mt-8">Horaire d'ouverture : du lundi au samedi de 9h à 20h</div>
            <div className="border border-amber-700 border-solid rounded-md flex justify-center items-center h-8 w-1/5 mt-8 mr-4">
                <div className="text-amber-700 text-base">Valider</div>
            </div> 

        </div>
    );

    return(
        <Drawer isOpen={infoForm.displayForm} className="h-[600px]  top-[14%] right-[10%] tracking-wider">
            <div className="flex-col m-10 ml-20">
                <div className="flex justify-between">
                    <h2 className="text-2xl">Vous souhaitez être rappelé.e</h2>
                    <input className="w-[50px]" type="image" src="assets/img/close.png" onClick={infoForm.toggledForm}/>
                </div>
                <RadioGroup
                    name="speedCallRadioButton"
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