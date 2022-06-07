import React, { useState, useEffect } from "react";
import Carrousel from "../../components/carrousel";

export default function Essentiel() {

    const images = [
        "/assets/img/laure-portrait.jpg",
        "/assets/img/salon-laure-1.jpg",
        "/assets/img/salon-laure-2.jpg"
    ]
    return (
        <div>
            <div className="flex flex-row mt-16 justify-between">
                <div className="mr-20">
                    <h2 className="text-xl">
                        Thérapeute à Strasbourg
                    </h2>

                    <h1 className="text-2xl mt-12">Prenons <span className="text-amber-700">vraiment</span> le temps d'en parler</h1>
                    
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
                    
                <div className="float">
                    <Carrousel size={300} images={images}></Carrousel>
                </div>
            </div> 
            <div className="mt-6 bg-brown-click w-60 h-10 flex justify-center items-center rounded-md">
                <div className="text-white text-l no-underline">Demander à être rappelé.e</div>
            </div>
            <div className=" mt-12 text-l flex flex-row justify-between h-28 tracking-wider">
                <div className="flex-col flex bg-white w-4/12 justify-center rounded-md">
                    <div className="ml-6">Du Lundi au Samedi</div>
                    <div className="ml-6 mt-2">De <span className="text-amber-700">9h</span> à <span className="text-amber-700">23h</span></div>
                </div> 
                <div className="ml-8 bg-white w-7/12 flex items-center justify-between rounded-md">
                    <div className="flex flex-row ml-6">
                        <input className="w-[30px] h-[30px]" type="image" src="/assets/img/location.png" /> 
                        <div className="ml-6">16 Rue<br/>du Vieux-Marché-aux-Vins<br/> <b>Strasbourg</b></div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-row mr-20">
                            <input className="w-[20px] h-[20px]" type="image" src="/assets/img/phone.png" />
                            <div className="ml-6">06.95.60.15.81</div>
                        </div>
                        <div className="flex flex-row mr-20 mt-4">
                            <input className="w-[20px] h-[20px]" type="image" src="/assets/img/mail.png" />
                            <div className="ml-6">laure.conseil@gmail.com</div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}