import React from "react";

// Soucis pour régler premier affichage image lié au 700px
// CUstom scroll bar is complicated, mieux vaut utiliser un composant type blueprint mais je ne connais pas le nom de se composant

export type CarrouselProps = {
    images: string[],
}
const Carrousel: React.FC <CarrouselProps>  = ({images}) => {

    return(
        <div>
            <div className="flex flex-row overflow-x-scroll xl:w-[700px] lg:w-[950px] md:w-[700px] sm:w-[550px] w-[300px]">
                {images.map(url => 
                    <input className="h-[300px] mr-4 object-cover rounded-md" type="image" src={url} /> 
                )}
            </div>
            <div className="h-1 mt-3 bg-white xl:w-[700px] lg:w-[950px] md:w-[700px] sm:w-[550px] w-[300px]"/>
        </div>
    );
}

export default Carrousel;