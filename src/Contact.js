import React, { Component } from "react";
import { rand } from "./Main";

function mon() {
    var r = rand(1, 10);
    return r % 2 === 0 ? 'You were sacrificed for balance in the universe' : 'You were spared';
}

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="grid-container">
                    <div className="grid-item-side"><p>asfs </p></div>
                    <div className="grid-item-main"><p>Testing123</p></div>
                    <div className="grid-item-maxitem"><p>Testing123</p></div>
                </div>
                <h2>Did you make it?</h2>
                {mon()}
            </div>
        )
    }
} export default Contact;