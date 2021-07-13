import React, { Component } from 'react';
import './About.css';
import Rasm from './biznes.jpg'

export default class About extends Component {
    render() {
        return (
            <section className="AboutUs text-center">
                <div>
                    <h1>About Us</h1>
                    <p>Problems trying to resolve the conflict between<br/> 
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="row p-4">
                    <div className="col-lg-6">
                        <img src={Rasm} alt="" className="biznesPhoto" />
                    </div>
                    <div className="col-lg-6 most">
                        <h1>Most trusted in our field</h1>
                        <p>Most calendars are designed for teams. Slate <br/>
                            is designed for freelancers who want a <br/>
                            simple way to plan their schedule.</p>
                        <p>the quick fox jumps over the lazy dog<br/> Things on a very small scale ...</p>
                        <p>the quick fox jumps over the lazy dog<br/> Things on a very small scale ...</p>
                    </div>
                </div>
            </section>
        )
    }
}

