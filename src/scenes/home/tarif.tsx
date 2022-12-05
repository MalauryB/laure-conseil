import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";

export default function Tarif() {

    return (
        <div className="flex flex-wrap flex-row justify-around justify-center">
            <Link className="!no-underline" to="/tarifs/individuel">
                <Card src="/assets/img/solo.png" title="Individuel" price={80} detailButtonDisplay={true} />
            </Link>
            <Link className="!no-underline" to="tarifs/couple">
                <Card src="/assets/img/couple.png" title="Couple" price={100} detailButtonDisplay={true}/>
            </Link>
            <Link className="!no-underline" to="tarifs/famille">
                <Card src="/assets/img/famille.png" title="Famille" price={100} detailButtonDisplay={true}/>
            </Link>
            
        </div>
        
    );
}