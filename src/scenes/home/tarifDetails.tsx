import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import MiniCard from "../../components/miniCard";
import { FormContext } from "../../services/customRouter";

export type TarifDetailsProps = {
    mainCard: {
        title: string,
        image: string,
        price: number
    },
    secondCard: {
        title: string,
        image: string,
        price: number
    },
    thirdCard: {
        title: string,
        image: string,
        price: number
    },
    content: {
        mainTitle: string,
        introductionLittleSentence: string,
        titleWhiteCard: string,
        sentenceWhiteCardList : string[],
        secondTitle: string,
        secondText: string,
        thirdTitle: string,
        tagList: string[]
    }
}
const TarifDetails: React.FC<TarifDetailsProps> = ({content, mainCard, secondCard, thirdCard}) => {

    const infoForm = useContext(FormContext);

    let textPart = (
        <div className="bg-card rounded-xl p-8 lg:ml-10 2xl:w-2/3">
            <div className="text-2xl mb-3 text-amber-800">{content.mainTitle}</div>
            <div className="text-lg bg-white rounded-xl p-4 mb-4">
                <div className="ml-4">{content.introductionLittleSentence}</div>
            </div>
            <div className="text-xl mb-3">{content.titleWhiteCard}</div>
            <div className="bg-white rounded-xl p-4">
                <div className="text-lg ml-4">
                    {content.sentenceWhiteCardList.map( sentence => 
                        <div>- {sentence}</div>
                    )}
                </div>
            </div>
            <div className="text-xl mb-3 mt-6">{content.secondTitle}</div>
            <div className="bg-white rounded-xl p-4 mb-4">
                <div className="text-lg ml-4">{content.secondText}</div>
            </div>
            
            <div className="text-xl mb-4">{content.thirdTitle}</div>
            <div className="text-lg bg-white rounded-xl p-4">
                {content.tagList.map( tag =>
                    <div className="ml-4">- {tag}</div>
                )}
            </div>
        </div>
    )

    return (
        <div>
            <div className="flex lg:flex-row lg:justify-between flex-col mb-10">
                <div className="flex flex-col items-center">
                    <Card price={mainCard.price} src={mainCard.image} title={mainCard.title} detailButtonDisplay={false}></Card>
                    <button className="bg-brown-click w-[300px] h-10 flex justify-center items-center rounded-md mb-10" onClick={infoForm.toggledForm}>
                        <div className="text-white text-xl no-underline">Demander à être rappelé.e</div>
                    </button>
                </div>
                {textPart}
            </div>
            <div className="flex flex-row flex-wrap xl:justify-center xl:items-center">
                <Link className="!no-underline mb-5" to={`/tarifs/${secondCard.title}`}><MiniCard image={secondCard.image} title={secondCard.title} price={secondCard.price}/></Link>
                <Link className="!no-underline mb-5" to={`/tarifs/${thirdCard.title}`}><MiniCard image={thirdCard.image} title={thirdCard.title} price={thirdCard.price}/></Link>
            </div>
        </div>
    );
}
export default TarifDetails;