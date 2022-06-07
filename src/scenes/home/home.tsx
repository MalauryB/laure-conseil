import React, { useState, useEffect } from "react";
import Essentiel from "./essentiel";
import Tarif from "./tarif";

export default function Home() {


    return (
        <div className="flex justify-center">
            <div className="font-cali flex flex-col ml-8 mr-8 w-[1280px]">
                <Essentiel></Essentiel>
                <Tarif></Tarif>
            </div>
        </div>
    );
}