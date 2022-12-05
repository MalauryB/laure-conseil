import React, { useRef, useContext, useEffect } from "react";
import Accueil from "./accueil";
import Tarif from "./tarif";
import TarifDetails from "./tarifDetails";
import {contents} from './contents';
import { FormContext } from "../../services/customRouter";

export type HomeProps = {
    goToTarifs: boolean,
    idContentTarifDetails: string
}
const Home: React.FC <HomeProps> = ({goToTarifs, idContentTarifDetails}) => {

    /** Go to tarifs */
    const infoForm = useContext(FormContext);
    const sectionTarifs: any = useRef(React.createRef());

    useEffect(() => {
        if( (goToTarifs || infoForm.displayTarif) && sectionTarifs ){
            sectionTarifs.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        infoForm.goToTarif(false);
      }, [sectionTarifs, infoForm]);
    
    /** Tarifs Details */
    function getContent(){
        return contents.filter(contentTarifDetails => contentTarifDetails.id === idContentTarifDetails);
    }
    
    return (
        <div className="flex justify-center mt-10 mb-20">
            <div className="font-cali flex w-full 2xl:w-11/12 flex-col ml-8 mr-8 ml-10">
                <Accueil></Accueil>
                <div ref={sectionTarifs} className="mt-32">
                    <div className="text-4xl mb-12">Trouver la bonne séance</div>
                    {idContentTarifDetails === "" ? <Tarif/> : 
                        <TarifDetails content={getContent()[0].content} 
                                        mainCard={getContent()[0].mainCard} 
                                        secondCard={getContent()[0].secondCard}
                                        thirdCard={getContent()[0].thirdCard} />}
                </div>
            </div>
        </div>
    );
}

export default Home;