import React, { useContext } from "react";
import { FormContext } from "../../services/customRouter";

export default function EnsavoirPlus(){

    const infoForm = useContext(FormContext);
    
    return(
        <div className="flex justify-center mt-10 xl:mt-0">
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-14 ml-10 sm:mr-10 lg:w-[1280px]">
                <div className="flex sm:ml-10 flex-col lg:w-1/2 mr-10">
                    <div className="text-2xl mb-10 lg:mb-14">Mon parcours, mon métier</div>
                    <div className="text-lg">
                    Thérapeute depuis plus d'une dizaine d'années, j'ai accompagné des centaines
                    de patients dans la résolution de leurs problèmes.<br/><br/>

                    Mes patients se sentent en sécurité dans mon cabinet et écoutés.
                    J'ai à cœur de leur apporter de réels chemins de résolution à leur problématique,
                    par une écoute active et par l'exposition de différents points de vue sur la vie.<br/><br/>

                    L'un des buts les plus nobles de l'existence est d'abord d'apprendre à se connaitre,
                    en tant qu'individu ayant une conscience dans un monde qui peut parfois 
                    nous sembler vide de sens. Un but si compliqué et qui ne s'atteint que 
                    par le dialogue. Le dialogue avec les autres, avec les choses et avec soi.<br/><br/>

                    Il est bon, d'avoir une personne apte à nous aider dans les moments compliqués. 
                    J'aime à croire que je peux être ce petit coup de pouce
                    qui vous aidera à vous sentir mieux, avec vous-même, avec le monde et avec votre
                    entourage.
                    </div>
                    <div className="flex lg:justify-start justify-center">
                        <button  onClick={infoForm.toggledForm} className="mb-10 xl:ml-0 lg:ml-10 mt-10 bg-brown-click w-80 h-14 flex justify-center items-center rounded-md">
                            <div className="text-white text-lg no-underline">Demander à être rappelé.e</div>
                        </button>
                    </div>
                </div>
                <input className="xl:mr-10 mb-10 lg:w-1/2 h-[450px] sm:h-[750px] object-contain rounded-xl" type="image" src="assets/img/laure-portrait.jpg"/>
            </div>
        </div>
    )
}