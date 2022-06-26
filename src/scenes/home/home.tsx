import React, { useRef, useState, useEffect } from "react";
import Essentiel from "./essentiel";
import Tarif from "./tarif";
import TarifDetails from "./tarifDetails";
import {contents} from './contents';

export type HomeProps = {
    goToTarifs: boolean,
    idContentTarifDetails: string
}
const Home: React.FC <HomeProps> = ({goToTarifs, idContentTarifDetails}) => {

    /** Go to tarifs */
    const sectionTarifs: any = useRef(React.createRef());

    useEffect(() => {
        if( goToTarifs && sectionTarifs ){
            sectionTarifs.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
      }, [sectionTarifs]);
    
    /** Tarifs Details */
    function getContent(){
        return contents.filter(contentTarifDetails => contentTarifDetails.id === idContentTarifDetails);
    }
    
    return (
        <div className="flex justify-center">
            <div className="font-cali flex flex-col ml-8 mr-8 lg:w-[1280px] w-[600px] mb-10">
                <Essentiel></Essentiel>
                <div ref={sectionTarifs} className="mt-28">
                    <div className="text-xl mb-10 xl:ml-0 ml-10">Trouver la bonne scéance</div>
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