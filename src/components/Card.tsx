import React, { useState, useEffect } from "react";

export type CardProps = {
    src: string,
    title: string,
    price: number,
    detailButtonDisplay: boolean
}
const Card: React.FC <CardProps> = ({src, title, price, detailButtonDisplay}) => {

    return(
        <div className="mb-8 rounded-xl bg-card 2xl:w-[400px] sm:w-[350px] w-[300px] p-6 text-black">
            <input className="w-full h-80 object-cover rounded-xl focus:outline-0" type="image" src={src} />
            <div className="flex flex-row mt-4">
                <div>
                    <div className="text-xl">{title}</div>
                    <div className="text-sm">Durée de 2h à 3h</div>
                    <div className="text-xl mt-4 font-bold">{price} €</div>
                </div>
                { detailButtonDisplay ? 
                <div className="flex justify-end w-full">
                    <div className="border border-amber-700 border-solid rounded-md flex justify-center items-center h-8 w-2/6 mt-10 mr-4">
                        <div className="text-amber-700 text-base">Détail</div>
                    </div>  
                </div> : '' }
            </div>
        </div>
    );
}

export default Card;