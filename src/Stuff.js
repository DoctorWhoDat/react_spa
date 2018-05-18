import React, { Component } from "react";
// import * as dx from "devextreme";
import * as devextremeReact from "devextreme-react";
// import * as dx from 'devextreme/data/data_source';
import { rand } from "./Main";
// import {ArrayStore}  from "devextreme";

var x = [
    { name: 'BLAAAAhhhh', title: 'You know it' },
    { name: 'Test2', title: 'A title' }
];
class Stuff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textItem: ''
        }
    }
    render() {
        return (
            <div>
                <h2>Stuff N' Things</h2>
                {/* <dx.Button></dx.Button> */}
                <div className="flexbox-container">
                    <div className="item-panel xsmallitem">
                        <devextremeReact.TextBox value={this.state.textItem}
                            onValueChanged={(e) => {
                                this.setState({ textItem: e.value });
                            }}
                        />{/*ref={(ref) => {this.TextBox = ref.instance}}*/}
                        <br />
                        <devextremeReact.Button text="Blah" type="danger"
                            onClick={
                                () => {
                                    var z = rand(1, 100);
                                    var y = rand(101, 200);
                                    //this.TextBox.option('value',rand(z,y)+ " " + z + " " + y);
                                    this.setState({ textItem: `${z + y} ${z} dsfsdaf ${y}` });
                                }
                            }
                        ></devextremeReact.Button>
                    </div>
                    <div className="item-panel bigitem">
                        <devextremeReact.DataGrid dataSource={x} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Stuff;