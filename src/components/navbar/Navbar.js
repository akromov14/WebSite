import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



class Navbar extends React.Component {
    state = { a: false }

    showNavbar = () => {
        this.setState((state) => {
            return { a: !state.a }
        })
    }


    render() {
        return <div className="bar py-4">
            <div className="container container-flied d-flex justify-content-between align-items-center">
                <h3 className="navbar-brand text-white me-5">BrandName</h3>

                <div className={`nav__menu ${this.state.a && "show__nav" || ""}`}>
                    <a href="#" className="nav__link">Home</a>
                    <a href="#" className="nav__link">Product</a>
                    <a href="#" className="nav__link">Pricing</a>
                    <a href="#" className="nav__link">Contact</a>
                    <button className="btn btn__close" onClick={this.showNavbar}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <div className="nav__btn">
                    <p className="me-5 mb-0 d-flex justify-content-cneter align-items-center"><a href="#">Log in</a></p>
                    <button type="button" className="btn btn-primary btn-lg">Become a member <FontAwesomeIcon className="ms-3" /></button>
                    
                </div>
                <button className="btn btn__open" onClick={this.showNavbar}><FontAwesomeIcon icon={faBars} /></button>
            </div>
        </div>

    }
}

export default Navbar;