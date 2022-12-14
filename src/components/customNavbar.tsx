import React, { useState, useEffect, useContext } from "react";
import { Drawer, Navbar, Alignment } from "@blueprintjs/core";
import { Link, useLocation } from "react-router-dom";
import { FormContext } from "../services/customRouter";

export default function CustomNavbar() {


    /**Début Taille fenêtre */
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
        }
    },[updateWidthAndHeight]);
    /** Fin Taille fenêtre */

    /** Début Drawer */
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }
    /** Fin Drawer */

    /** Début listening location */
    const [location, setLocation] = useState(useLocation().pathname);
    console.log(location)
    /** Fin listening location */  

    const linkNavbar="text-2xl mr-7 font-cali tracking-wide text-black no-underline";
    const linkNavbarSelected="text-2xl mr-7 font-cali tracking-wide text-amber-700 no-underline";

    /** Début Partitiions Content */

    /** Go to tarifs */
    const infoForm = useContext(FormContext);

    /** End go to tarifs **/
    const bigNavbar = (
        <div className="mt-8">
            <Navbar.Group align={Alignment.LEFT}>
                <Link className="!no-underline" to="/">
                    <input className="w-[50px] ml-4 mr-4" type="image" src="/assets/img/logo_black.png"/>
                </Link>
                <p className="text-2xl font-cali tracking-wide">Laure Souchard Lespinas</p>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}> 
                <div className="mr-4">
                    <Link className={ location === "/" ?  linkNavbarSelected : linkNavbar } onClick={() => setLocation("/")}  to="/">Accueil</Link>
                    <Link className={ location === "/tarifs" ? linkNavbarSelected  : linkNavbar } onClick={() => {
                        setLocation("/tarifs");
                        infoForm.goToTarif(true);
                        }} to="/">Tarifs</Link>
                    <Link className={ location === "/ensavoirplus" ?  linkNavbarSelected : linkNavbar } onClick={() => setLocation("/ensavoirplus")}  to="/ensavoirplus">En savoir plus</Link>
                </div>
            </Navbar.Group>
        </div>  
    );

    const linkMiddleNavbar = "text-2xl font-cali text-black mb-14 no-underline";
    const linkMiddleNavabarSelected = "text-2xl font-cali text-amber-700 mb-14 no-underline";
    const midddleNavbar = (
        <div>
            <Navbar.Group align={Alignment.RIGHT}>
                <Link className="!no-underline" to="/">
                    <input className="w-[50px] mt-16 mr-6" type="image" src="/assets/img/logo_black.png" />
                </Link>
            </Navbar.Group>
            <Navbar.Group align={Alignment.LEFT}>
                {collapsed ? <input type="image" className="w-[50px] mt-16 ml-6" onClick={toggleNavbar} src="/assets/img/menu.png" /> : ''  } 
                <Drawer isOpen={!collapsed} position='left' size={width> 750 ? "500px": "100%"}>
                    <div>
                        <input type="image" className="w-[50px] float-right mr-8 mt-8" onClick={toggleNavbar} src="/assets/img/close.png" />
                    
                        <div className="flex ml-10 md:ml-20 items-center mt-52">
                            <div className="flex flex-col">
                                <Link className={ location === "/" ? linkMiddleNavabarSelected  : linkMiddleNavbar } onClick={() => setLocation("/")} to="/">Accueil</Link>
                                <Link className={ location === "/tarifs" ? linkMiddleNavabarSelected  : linkMiddleNavbar } onClick={() => {
                                    setLocation("/tarifs");
                                    infoForm.goToTarif(true);
                                    }} to="/">Tarifs</Link>
                                <Link className={ location === "/temoignages" ? linkMiddleNavabarSelected : linkMiddleNavbar } onClick={() => setLocation("/ensavoirplus")} to="/ensavoirplus">En savoir plus</Link>
                                <button  onClick={infoForm.toggledForm} className="mt-8 bg-brown-click w-72 h-12 flex justify-center items-center rounded">
                                    <div className="text-white font-cali text-xl no-underline">Demander à être rappelé.e</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </Navbar.Group>
        </div>
    );
    /** Fin Partitiions Content */

    let content = bigNavbar;

    if(width > 1250){
        content = bigNavbar;
    } else {
        content = midddleNavbar;
    }

    return(
        <Navbar className="bg-general shadow-none fixed h-[100px]">
            { content }
        </Navbar>
    );
}