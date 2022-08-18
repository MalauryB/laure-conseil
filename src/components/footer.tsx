import React from "react";
import { Link } from "react-router-dom";

function Footer(){

    return(
        <div className="flex flex-col lg:flex-row bg-card pt-4 pb-4 rounded-t-2xl items-center justify-center mt-5">
           <p className="mr-1 mb-0">Laure Souchard Lespinas -</p>
           <p className="mr-1 mb-0">Copyriget@2022 -</p>
           <Link className="text-black" to="/conditionsgeneralesdeventes" >Conditions générales de ventes</Link>
        </div>
    );
}
export default Footer;