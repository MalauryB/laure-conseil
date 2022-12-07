import React, { useState, useEffect, useContext } from "react";
import Carrousel from "../../components/carrousel";
import { FormContext } from "../../services/customRouter";

export default function Accueil() {

    const images = [
        "/assets/img/laure-portrait.jpg",
        "/assets/img/salon-laure-1.jpg",
        "/assets/img/salon-laure-2.jpg"
    ]

    const infoForm = useContext(FormContext);

     /**Début Taille fenêtre */
     const [width, setWidth] = useState(window.innerWidth);
     const updateWidthAndHeight = () => {
         setWidth(window.innerWidth);
     };
 
     useEffect(() => {
         window.addEventListener("resize", updateWidthAndHeight);
         return () => {
             window.removeEventListener("resize", updateWidthAndHeight);
         }
     },[updateWidthAndHeight]);
     /** Fin Taille fenêtre */
    
    return (
        <div>
            <div className="flex xl:flex-row flex-col mt-20">
                <div className="2xl:mr-32 xl:mr-40 xl:mb-0 mb-10">
                    <h2 className="text-4xl">
                        Thérapeute, conseillère conjugale à Strasbourg
                    </h2>
                    <h1 className="text-2xl mt-5">Prenons <span className="text-amber-700">vraiment</span> le temps d'en parler</h1>
                    
                    <h2 className="text-xl mt-6">
                        Séance à durée variable, pouvant aller jusqu'à <span className="text-amber-700">3 heures</span> (tarification fixe). <br/>
                        En cabinet ou en visio-conférence.
                    </h2>   

                    <h2 className="mt-6 text-xl">
                        - Consultation individuelle: <span className="text-amber-700">80 €</span><br/>
                        - Consultation en couple: <span className="text-amber-700">100 €</span><br/>
                        - Consultation familialle: <span className="text-amber-700">100 €</span>
                    </h2>

                    <button className="mt-8 xl:ml-0 bg-brown-click w-full lg:w-60 h-10 flex justify-center items-center rounded-md" onClick={infoForm.toggledForm}>
                        <div className="text-white text-lg no-underline">Demander à être rappelé.e</div>
                    </button>
                </div>
                    
                <div className="xl:mb-0 mb-6">
                    <Carrousel images={images}></Carrousel>
                </div>
            </div> 
            <div className="xl:ml-0 xl:mt-10 text-lg flex flex-col xl:flex-row justify-between tracking-wider">
                {width > 1028 ? 
                <>
                    <div className="xl:mb-0 mb-6 flex-col h-28 flex bg-white 2xl:w-3/12 w-4/12 justify-center rounded-md">
                        <div className="ml-6">Du Lundi au Samedi</div>
                        <div className="ml-6 mt-2">De <span className="text-amber-700">9h</span> à <span className="text-amber-700">20h</span></div>
                    </div> 
                    <div className="bg-white h-28 3xl:w-[1200px] 2xl:w-[1000px] xl:w-6/12 flex items-center justify-between rounded-md">
                        <div className="flex flex-row ml-6 mr-10">
                            <input className="w-[30px] h-[30px] mt-6" type="image" src="/assets/img/location.png" /> 
                            <div className="ml-6">16 Rue<br/>du Vieux-Marché-aux-Vins<br/> <b>Strasbourg</b></div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <input className="w-[20px] h-[20px] mt-1" type="image" src="/assets/img/phone.png" />
                                <div className="ml-6">06.76.87.33.67</div>
                            </div>
                            <div className="flex flex-row mr-20 mt-4">
                                <input className="w-[20px] h-[20px] mt-1" type="image" src="/assets/img/mail.png" />
                                <div className="ml-6">lauresouchardlespinas@gmail.com</div>
                            </div>
                        </div>    
                    </div>
                </> : 
                <>
                    <div className="bg-white mt-4 h-28 flex items-center justify-center rounded-md flex flex-row">
                            <input className="w-[30px] h-[30px]" type="image" src="/assets/img/location.png" /> 
                            <div className="ml-6">16 Rue<br/>du Vieux-Marché-aux-Vins<br/> <b>Strasbourg</b></div>
                    </div>
                    <div className="bg-white mt-4 h-28 flex items-center justify-center rounded-md flex flex-row">
                        <input className="w-[20px] h-[20px]" type="image" src="/assets/img/phone.png" />
                        <div className="ml-6">06.76.87.33.67</div>
                    </div>
                    <div className="bg-white mt-4 h-28 flex items-center justify-center rounded-md flex flex-row">
                        <input className="w-[20px] h-[20px]" type="image" src="/assets/img/mail.png" />
                        <div className="ml-6">lauresouchardlespinas@gmail.com</div>
                    </div>
                    <div className="bg-white mt-4 h-28 flex flex-col items-center justify-center rounded-md flex flex-row">
                        <div>
                            <div className="ml-6">Du Lundi au Samedi</div>
                            <div className="ml-6 mt-2">De <span className="text-amber-700">9h</span> à <span className="text-amber-700">20h</span></div>
                        </div>
                    </div>
                </> }
            </div>
        </div>
    );
}