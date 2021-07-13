import React, { Component } from 'react'
import './Prising.css';

export default class Pricing extends Component {
    render() {
        return (
            <section className="Picing">
                <div className="Picing2 text-center">
                    <h1>Pricing</h1>
                    <div className="row text-center">
                        <div className="col-lg-4 bg-white text-dark organize">
                        <h2>FREE</h2>
                        <p>Organize across all apps by hand</p>
                        <h2>0$</h2>
                        <p>Per Month</p>
                        <button>Try for free</button>
                        <ul>
                            <li>Unlimited product updates</li>
                            <li>Unlimited product updates</li>
                            <li>Unlimited product updates</li>
                            <li>1GB  Cloud storage</li>
                            <li>Email and community support</li>
                        </ul>
                        </div>
                        <div className="col-lg-4  bg-white text-dark organize">
                        <h2>FREE</h2>
                        <p>Organize across all apps by hand</p>
                        <h2>10$</h2>
                        <p>Per Month</p>
                        <button>Try for free</button>
                        <ul>
                            <li>Unlimited product updates</li>
                            <li>Unlimited product updates</li>
                            <li>Unlimited product updates</li>
                            <li>1GB  Cloud storage</li>
                            <li>Email and community support</li>
                        </ul>
                        </div>
                        <div className="col-lg-4  bg-white text-dark organize">
                        <h2>FREE</h2>
                        <p>Organize across all apps by hand</p>
                        <h2>20$</h2>
                        <p>Per Month</p>
                        <button>Try for free</button>
                        <ul>
                            <li>Unlimited product updates</li>
                            <li>Unlimited product updates</li>
                            <li>Unlimited product updates</li>
                            <li>1GB  Cloud storage</li>
                            <li>Email and community support</li>
                        </ul>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
