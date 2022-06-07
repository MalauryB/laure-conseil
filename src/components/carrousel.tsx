import React from "react";

// Soucis pour régler premier affichage image lié au 700px
// CUstom scroll bar is complicated, mieux vaut utiliser un composant type blueprint mais je ne connais pas le nom de se composant

export type CarrouselProps = {
    images: string[],
    size: number
}
const Carrousel: React.FC <CarrouselProps>  = ({images, size}) => {

    return(
        <div>
            <div className="flex flex-row overflow-x-scroll w-[700px]">
                {images.map(url => 
                    <input className={`h-[${size}px] mr-4 object-cover rounded-md`} type="image" src={url} /> 
                )}
            </div>
            <div className="h-1 mt-3 bg-white w-[700px]"/>
        </div>
    );
}

export default Carrousel;