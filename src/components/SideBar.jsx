



/* import { useState } from "react"; */
import{ Link} from "react-router-dom";

function SideBar() {
/* const[style,setStyle]=useState(false);
const ocultarMenu=()=>{
     setStyle(!style);
} */


  return (
    <>
   
   
    <div >
        <div className="barra" > 
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion h-100 acordeon" id="accordionSidebar">

  
   {/*  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
            <img className="w-100"  alt=""/>
        </div>
    </a> */}

   
    <hr className="sidebar-divider my-0"/>

 
    <li className="nav-item active">
        <p className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span className="titulo">OSÍAS - LIBROS ILUSTRADOS</span></p>
    </li>

   
    <hr className="sidebar-divider"/>

  
 

   
    <li className="nav-item">
        <p className="nav-link" href="/">
            <i className=""> <Link className="barraLink" to="/inicio">INICIO</Link></i>
          
        </p>  
    </li>


    <li className="nav-item">
        <p className="nav-link" href="/">
            <i className=""><Link className="barraLink" to="/libros">LIBROS</Link></i>
             </p>
    </li>


    <li className="nav-item">
        <p className="nav-link" href="/">
            <i className=""><Link className="barraLink" to="/usuarios">USUARIOS</Link></i>
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