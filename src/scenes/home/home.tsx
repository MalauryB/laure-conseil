import React, { useRef, useContext, useEffect } from "react";
import Essentiel from "./essentiel";
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
        <div className="flex justify-center">
            <div className="font-cali flex flex-col ml-8 mr-8 xl:w-[1280px] w-[1000px] xl:ml-0 ml-10">
                <Essentiel></Essentiel>
                <div ref={sectionTarifs} className="mt-20">
                    <div className="text-xl mb-10">Trouver la bonne scéance</div>
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