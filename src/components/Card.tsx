import React, { useState, useEffect } from "react";

export type CardProps = {
    src: string,
    title: string,
    price: number
}
const Card: React.FC <CardProps> = ({src, title, price}) => {

    return(
        <div className="mt-10 ml-10 rounded-md bg-card w-[350px] p-6">
            <input className="w-full h-80 object-cover rounded-md" type="image" src={src} />
            <div className="flex flex-row mt-4">
                <div>
                    <div className="text-xl">{title}</div>
                    <div className="text-sm">Durée de 2h à 3h</div>
                    <div className="text-xl mt-4 font-bold">{price} €</div>
                </div>
                <div className="flex justify-end w-2/6">
                    <div className="border border-amber-700 border-solid rounded-md flex justify-center items-center h-8 mt-10">
                        <div className="text-amber-700 text-base">Détail</div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Card;