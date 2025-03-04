import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
const Header=()=>{
    return(
        <div className="holder">
<header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
        <h2 className="header-title text-capitalize">Find the book of choice.</h2><br />
        <p className="header-text fs-18 fw-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus, corrupti hic eos nisi minus nulla non provident vel. Amet distinctio impedit sunt accusantium ex modi culpa error consectetur deserunt.</p>
            <SearchForm/>
            </div>
        </header>
        </div>
    )
}
export default Header
