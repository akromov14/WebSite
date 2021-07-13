import React, { Component } from 'react';
import './Biznes.css';

export default class Biznes extends Component {
    render() {
        return (
           <section className="Biznes">
               <div className="text-center">
                    <h2>Better Strategy With<br/> Quality Business</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere, <br/>mollitia pariatur culpa molestias officia rerum.</p>
               </div>
               <div className="row pt-4">
                   <div className="col-lg-4">
                       <div className="Cards">
                           <h4>Investment</h4>
                           <p className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="Cards">
                           <h4>Raising Funds</h4>
                           <p className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="Cards">
                           <h4>Financial Analiysis</h4>
                           <p className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="Cards">
                           <h4>Texation Planning</h4>
                           <p className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="Cards">
                           <h4>Save money and time</h4>
                           <p className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
                   <div className="col-lg-4">
                       <div className="Cards">
                           <h4>Outsourced Consulting</h4>
                           <p className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                       </div>
                   </div>
               </div>
           </section>
        )
    }
}
