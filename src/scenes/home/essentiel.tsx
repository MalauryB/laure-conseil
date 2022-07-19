import React, { useState, useEffect, useContext } from "react";
import Carrousel from "../../components/carrousel";
import { FormContext } from "../../services/customRouter";

export default function Essentiel() {

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
                <div className="mr-20 xl:mb-0 mb-10">
                    <h2 className="text-xl">
                        Thérapeute à Strasbourg
                    </h2>

                    <h1 className="text-2xl mt-10">Prenons <span className="text-amber-700">vraiment</span> le temps d'en parler</h1>
                    
                    <h2 className="text-xl  mt-4">
                            Scéance à durée variable, selon votre volonté et pouvant aller jusqu'à <span className="text-amber-700">3 heures</span> (tarification fixe).
                    </h2>   
                    <h2 className="text-xl mt-2">
                        En cabinet ou en visio-conférence.
                    </h2>

                    <h3 className="text-l mt-10">
                        Vous pouvez venir seul.e pour <span className="text-amber-700">67 euros</span>, en couple pour 
                        <span className="text-amber-700">75 euros</span> ou en famille pour <span className="text-amber-700">100 euros</span>.
                    </h3>
                </div>
                    
                <div className="xl:mb-0 mb-6">
                    <Carrousel images={images}></Carrousel>
                </div>
            </div> 
            <button className="xl:ml-0 mt-6 bg-brown-click w-full lg:w-60 h-10 flex justify-center items-center rounded-md" onClick={infoForm.toggledForm}>
                <div className="text-white text-l no-underline">Demander à être rappelé.e</div>
            </button>
            <div className="xl:ml-0  mt-6 xl:mt-12 text-l flex flex-col xl:flex-row justify-between tracking-wider">
                {width > 1028 ? 
                <>
                    <div className="xl:mb-0 mb-6 flex-col h-28 flex bg-white w-4/12 justify-center rounded-md">
                        <div className="ml-6">Du Lundi au Samedi</div>
                        <div className="ml-6 mt-2">De <span className="text-amber-700">9h</span> à <span className="text-amber-700">23h</span></div>
                    </div> 
                    <div className="bg-white h-28 lg:w-7/12 flex items-center justify-between rounded-md">
                        <div className="flex flex-row ml-6 mr-10">
                            <input className="w-[30px] h-[30px]" type="image" src="/assets/img/location.png" /> 
                            <div className="ml-6">16 Rue<br/>du Vieux-Marché-aux-Vins<br/> <b>Strasbourg</b></div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <input className="w-[20px] h-[20px]" type="image" src="/assets/img/phone.png" />
                                <div className="ml-6">06.95.60.15.81</div>
                            </div>
                            <div className="flex flex-row mr-20 mt-4">
                                <input className="w-[20px] h-[20px]" type="image" src="/assets/img/mail.png" />
                                <div className="ml-6">laure.conseil@gmail.com</div>
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
                        <div className="ml-6">06.95.60.15.81</div>
                    </div>
                    <div className="bg-white mt-4 h-28 flex items-center justify-center rounded-md flex flex-row">
                        <input className="w-[20px] h-[20px]" type="image" src="/assets/img/mail.png" />
                        <div className="ml-6">laure.conseil@gmail.com</div>
                    </div>
                    <div className="bg-white mt-4 h-28 flex flex-col items-center justify-center rounded-md flex flex-row">
                        <div>
                            <div className="ml-6">Du Lundi au Samedi</div>
                            <div className="ml-6 mt-2">De <span className="text-amber-700">9h</span> à <span className="text-amber-700">23h</span></div>
                        </div>
                    </div>
                </> }
            </div>
        </div>
    );
}