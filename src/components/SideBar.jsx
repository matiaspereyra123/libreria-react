/* import { useState } from "react"; */
import{ Link} from "react-router-dom";

function SideBar() {
/* const[style,setStyle]=useState(false);
const ocultarMenu=()=>{
     setStyle(!style);
} */


  return (
    <>
   
   
    <div className="main-div-sidebar">
        <div className="barra" > 
        <ul className="navbar-nav sidebar h-100" id="accordionSidebar">

  
   {/*  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
            <img className="w-100"  alt=""/>
        </div>
    </a> */}

   
    <hr className="sidebar-divider my-0"/>

 
    <li className="nav-item active">
        <p className="" href="/">

            <img className="mini-logo" src="/miniOsiasLogo.png" alt="" />

            <img className="logo" src="/osiasLogo.png" alt="" />
    
            </p>
    </li>

   
    <hr className="sidebar-divider"/>

  
 

   
    <li className="nav-item">
        <p className="item-sidebar" href="/">
        <Link className="linkIcono" to="/inicio"><i className="fa-solid fa-house"></i></Link>
        <Link className="barraLink" to="/inicio">INICIO</Link>
        </p>  
    </li>


    <li className="nav-item">
        <p className="item-sidebar" href="/">
        <Link className="linkIcono" to="/libros"><i className="fa-solid fa-book"></i></Link>
        <Link className="barraLink" to="/libros">LIBROS</Link>
             </p>
    </li>


    <li className="nav-item">
        <p className="item-sidebar" href="/">
        <Link className="linkIcono" to="/usuarios"><i className="fa-solid fa-user"></i></Link>
        <Link className="barraLink" to="/usuarios">USUARIOS</Link>
             </p>
    </li>


    <hr className="sidebar-divider d-none d-md-block"/>
</ul></div>
    </div>



  </>
    
   


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