import React, { Component } from 'react'
import Rasm from './woomen.png'
import Rasm2 from './Man.png'
import './Clients.css'

export default class Clients extends Component {
    render() {
        return (
           <section className="Clientsection">
               <div className="text-center">
                   <h1>What Clients Say</h1>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere, <br/>mollitia pariatur culpa molestias officia rerum.</p>
               </div>
               <div className="d-flex">
                   <div className="row">
                       <div className="col-lg-6">
                            <div className="d-flex Cards2">
                                <img src={Rasm} alt="" className="users"/>
                                <div>
                                    <h3>Regina Miles</h3>
                                    <p className="text-secondary">Designer</p>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="d-flex Cards2">
                       <img src={Rasm2} alt="" className="users"/>
                       <div>
                           <h3>Regina Miles</h3>
                           <p className="text-secondary">Designer</p>
                           <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                       </div>
                       </div>
                   </div>
                   </div>
                        
                      
                  
                   
               </div>
           </section>
        )
    }
}
