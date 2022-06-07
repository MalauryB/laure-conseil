import React, { useState, useEffect } from "react";
import { Drawer, Navbar, Alignment } from "@blueprintjs/core";
import { Link, useLocation } from "react-router-dom";

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

    const linkNavbar="text-xl mr-7 font-cali tracking-wide text-black no-underline";
    const linkNavbarSelected="text-xl mr-7 font-cali tracking-wide text-amber-700 no-underline";

    /** Début Partitiions Content */
    const bigNavbar = (
        <div className="mt-8">
            <Navbar.Group align={Alignment.LEFT}>
                <input className="w-[50px] ml-4 mr-4" type="image" src="/assets/img/logo_black.png" /> 
                <p className="text-xl font-cali tracking-wide">Laure Souchard Lespinas</p>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}> 
                <div className="mr-4">
                    <Link className={ location === "/" ?  linkNavbarSelected : linkNavbar } onClick={() => setLocation("/")}  to="/">L'essentiel</Link>
                    <Link className={ location === "/tarifs" ? linkNavbarSelected  : linkNavbar } onClick={() => setLocation("/tarifs")} to="/">Tarifs</Link>
                    <Link className={ location === "/temoignages" ?  linkNavbarSelected : linkNavbar } onClick={() => setLocation("/temoignages")}  to="/temoignages">Témoignages</Link>
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
                <input className="w-[50px] mt-16 mr-6" type="image" src="/assets/img/logo_black.png" />
            </Navbar.Group>
            <Navbar.Group align={Alignment.LEFT}>
                {collapsed ? <input type="image" className="w-[50px] mt-16 ml-6" onClick={toggleNavbar} src="/assets/img/menu.png" /> : ''  } 
                <Drawer isOpen={!collapsed} position='left' size={width> 750 ? "500px": "100%"}>
                    <div>
                        <input type="image" className="w-[50px] float-right mr-8 mt-8" onClick={toggleNavbar} src="/assets/img/close.png" />
                    
                        <div className="flex ml-20 items-center mt-52">
                            <div className="flex flex-col">
                                <Link className={ location === "/" ? linkMiddleNavabarSelected  : linkMiddleNavbar } onClick={() => setLocation("/")} to="/">L'essentiel</Link>
                                <Link className={ location === "/tarifs" ? linkMiddleNavabarSelected  : linkMiddleNavbar } onClick={() => setLocation("/tarifs")} to="/">Tarifs</Link>
                                <Link className={ location === "/temoignages" ? linkMiddleNavabarSelected : linkMiddleNavbar } onClick={() => setLocation("/temoignages")} to="/temoignages">Témoignages</Link>
                                <Link className={ location === "/ensavoirplus" ? linkMiddleNavabarSelected : linkMiddleNavbar } onClick={() => setLocation("/ensavoirplus")} to="/ensavoirplus">En savoir plus</Link>
                                <div className="mt-8 bg-brown-click w-72 h-12 flex justify-center items-center rounded">
                                    <div className="text-white font-cali text-xl no-underline">Demander à être rappelé.e</div>
                                </div>
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
        <Navbar className="bg-general shadow-none">
            { content }
        </Navbar>
    );
}