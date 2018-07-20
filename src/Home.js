import React, { Component } from "react";
import moment from "moment";
import Schedules from "./data/weekly";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>Henlo</h2>
                <p>Testing the stuff</p>
                <div className="flexbox-container">
                    <div className="xsmallitem"><p style={{ textAlign: 'center'}}>Sideblah blhasl j<br /><br />asfs </p></div>
                    <div className="item-panel xsmallitem"><p>Testing123</p></div>
                    <div className="item-panel bigitem"><p>Testing123 {moment().format("dddd, MMMM Do, YYYY")}</p></div>
                    <div className="item-panel bigitem"><p>blahhhhhhhhhhhh</p></div>
                    <div className="item-panel maxitem"><Schedules view='day'/></div>
                </div>
                {/* <table cellSpacing='20px' width='100%' height='1400px' border="5px">
                <tbody>
                    <tr valign='top'>
                        <td width='50%'>test123</td>
                        <td width='50%'>test23211</td>
                    </tr>
                </tbody>
            </table> */}
            </div>)
    }
}

export default Home;