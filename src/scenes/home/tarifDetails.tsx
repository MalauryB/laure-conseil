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
        <div className="bg-card rounded-xl p-8 lg:ml-10">
            <div className="text-xl mb-3 ">{content.mainTitle}</div>
            <div className="text-sm mb-6">{content.introductionLittleSentence}</div>
            <div className="bg-white rounded-xl p-4">
                <div className="text-lg mb-3">{content.titleWhiteCard}</div>
                <div className="text-sm mb-4 ml-4">
                    {content.sentenceWhiteCardList.map( sentence => 
                        <div>- {sentence}</div>
                    )}
                </div>
            </div>
            <div className="text-xl mb-3 mt-6">{content.secondTitle}</div>
            <div className="text-sm mb-8 ">{content.secondText}</div>
            <div className="text-xl mb-4">{content.thirdTitle}</div>
            <div className="flex flex-row flex-wrap">
                {content.tagList.map( tag =>
                    <div className="bg-white rounded-xl pt-2 pb-2 pr-8 pl-8 mr-2 mt-2">
                        <div className="text-sm">{tag}</div>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="">
            <div className="flex lg:flex-row flex-col mb-10">
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