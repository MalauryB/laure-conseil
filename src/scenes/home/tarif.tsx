import React, { useState, useEffect } from "react";
import Card from "../../components/Card";

export default function Tarif() {

    return (
        <div className="mt-28">
            <div className="text-xl">Trouver la bonne scéance</div>
            <div className="flex flex-row">
                <Card src="/assets/img/solo.png" title="Individuelle" price={80} />
                <Card src="/assets/img/couple.png" title="Couple" price={120}/>
                <Card src="/assets/img/famille.png" title="Famille" price={100}/>
            </div>
        </div>
    );
}