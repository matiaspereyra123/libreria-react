

import { useState } from "react";
import{ NavLink} from "react-router-dom";

function SideBar() {
const[style,setStyle]=useState(false);
const ocultarMenu=()=>{
     setStyle(!style);
}


  return (

    <div >
        <div onClick={ocultarMenu} > 
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

  
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
            <img className="w-100"  alt=""/>
        </div>
    </a>

   
    <hr className="sidebar-divider my-0"/>

 
    <li className="nav-item active">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span></a>
    </li>

   
    <hr className="sidebar-divider"/>

  
    <div className="sidebar-heading">Actions</div>

   
    <li className="nav-item">
        <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <NavLink className="" to="/">HOME</NavLink>
        </a>
    </li>


    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <NavLink className="" to='/user'>USER</NavLink></a>
    </li>


    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li>


    <hr className="sidebar-divider d-none d-md-block"/>
</ul></div>
    </div>



  )
}

export default SideBar


/* 
import { useState } from "react";
import{ NavLink} from "react-router-dom";

function SideBar() {
const[style,setStyle]=useState(false)
const ocultarMenu=()=>{
     setStyle(!style)
}


  return (

    <div >
        <div onClick={ocultarMenu} > 
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

  
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
            <img className="w-100"  alt=""/>
        </div>
    </a>

   
    <hr className="sidebar-divider my-0"/>

 
    <li className="nav-item active">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <NavLink className="" to='/'>HOME</NavLink></a>
    </li>

   
    <hr className="sidebar-divider"/>

  
    <div className="sidebar-heading">USER</div>

   
    <li className="nav-item">
        <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <NavLink>Libros</NavLink></a>
      
    </li>


    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <NavLink>USERS</NavLink></a>
    </li>


    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li>


    <hr className="sidebar-divider d-none d-md-block"/>
</ul></div>
    </div>



  )
}

export default SideBar */