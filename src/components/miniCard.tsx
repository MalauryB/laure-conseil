import React from "react";

export type MiniCardProps = {
    image: string,
    title: string,
    price: number
}
const MiniCard: React.FC <MiniCardProps> = ({image, title, price}) => {

    return(
        <div className="ml-10 bg-card rounded-xl flex flex-row w-[400px] p-6 text-black">
            <input className="w-full h-40 object-cover rounded-xl focus:outline-0" type="image" src={image}/>
            <div className="ml-6">
                <div className="text-xl">{title}</div>
                <div className="text-sm">Durée de 2h à 3h</div>
                <div className="text-xl mt-4 font-bold">{price} €</div>
                <div className="flex justify-end w-full">
                    <div className="border border-amber-700 border-solid rounded-md flex justify-center items-center h-8 mt-10 mr-4">
                        <div className="text-amber-700 text-base ml-6 mr-6">Détail</div>
                    </div>  
                </div>
            </div>

        </div>
    )
}

export default MiniCard;