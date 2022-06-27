import React from "react";

export default function EnsavoirPlus(){
    return(
        <div className="flex justify-center">
            <div className="flex flex-row mt-14 ml-10 mr-10 lg:w-[1280px] w-[600px]">
                <div className="flex flex-col w-1/2 mr-10 mt-10">
                    <div className="text-2xl mb-14">Mon parcours, mon métier</div>
                    <div className="text-lg mb-6">
                    Thérapeute depuis plus d'une dizaine d'années, j'ai accompagné des centaines
                    de patients dans la résolution de leurs problèmes.<br/><br/>

                    Mes patients se sentent en sécurité dans mon cabinet et écouté.
                    J'ai à cœur de leur apporter de réels chemins de résolution à leur problématique,
                    par une écoute active et par l'exposition de différents points de vue sur la vie.<br/><br/>

                    "Connais-toi toi-même et tu connaîtras l'Univers et les Dieux" Maxime du temple
                    de Delphes<br/><br/>

                    L'un des buts les plus nobles de l'existence est d'abord d'apprendre à se connaitre,
                    en tant qu'individu ayant une conscience dans un monde qui peut parfois 
                    nous s'embler vide de sens. Un but si compliqué et qui ne s'atteint que 
                    par le dialogue. Le dialogue avec les autres, avec les choses et avec soi.<br/><br/>

                    Il est bon, d'avoir une personne apte à  nous guider dans les moments. 
                    J'aime à croire que je peux être ce petit coup de pouce
                    qui vous aidera à vous reconnecter avec vous-même, avec le monde et avec votre
                    entourage.
                    </div>
                    <button className="xl:ml-0 ml-10 mt-6 bg-brown-click w-80 h-14 flex justify-center items-center rounded-md">
                        <div className="text-white text-lg no-underline">Demander à être rappelé.e</div>
                    </button>
                </div>
                <input className="w-1/2 h-[750px] object-contain rounded-xl" type="image" src="assets/img/laure-portrait.jpg"/>
            </div>
        </div>
    )
}