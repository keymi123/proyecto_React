import React ,{useState}from 'react';

import './MainNavigation.css'

import MainHeader from './MainHeader';
import  NavLinks  from './NavLinks';

import {Link} from 'react-router-dom'
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import { NavLink } from '../../../../node_modules/react-router-dom/cjs/react-router-dom';
const MainNavigation = (props)=>{
    //declare state darweropen ,setdrawerisopen permite modificar el state
     const[drawerIsOpen,setDrawerIsOpen]=useState(false);
     
     const openDrawerHandler= () => {
      setDrawerIsOpen(true);
     }

     //handler abrir
     const closeDrawerHandler = () => {
         setDrawerIsOpen(false);
     }


    return(
        <React.Fragment>
            {drawerIsOpen ?
             (<Backdrop onClick={closeDrawerHandler} />):
             null}

            
            
            <SideDrawer show={drawerIsOpen}
                onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>)



            {/*Aplicamos para vista web */}
            <MainHeader>
                <button classname="main-navigation__menu-btn"
                    onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />

                </button>

                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>
                </h1>

                <nav className="main-navigation__header-nav">
                    <NavLinks/>

                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;