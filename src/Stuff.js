import React, { Component } from "react";
// import * as dx from "devextreme";
import { TextBox, Button, DataGrid } from "devextreme-react";
// import * as dx from 'devextreme/data/data_source';
import { rand } from "./Main";
// import {ArrayStore}  from "devextreme";

import List from "./components/list";

var x = [
    { name: 'BLAAAAhhhh', title: 'You know it' },
    { name: 'Test2', title: 'A title' }
];

// let arr = [
//     { club: 'Davy Crocket', time: '8PM', date: 'May 30, 2017' },
//     { club: 'GHS', time: '8PM', date: 'May 30, 2018' },
//     { club: 'ROT', time: '3PM', date: 'June 2, 2018' },
//     { club: 'OPT', time: '8PM', date: 'July 1, 2018' },
//     { club: 'OPT', time: '8PM', date: 'July 1, 2019' }
// ];

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
                        <TextBox value={this.state.textItem} ref={(ref) => ref ? this.dxTextBox = ref.instance : null}
                            onValueChanged={(e) => {
                                this.setState({ textItem: e.value });
                            }}
                        />
                        <br />
                        <Button text="Blah" type="danger"
                            onClick={
                                () => {
                                    var z = rand(1, 100);
                                    var y = rand(101, 200);
                                    this.dxTextBox.focus();
                                    // this.dxTextBox.option('value',rand(z,y)+ " " + z + " " + y);
                                    this.setState({ textItem: `${z + y} ${z} dsfsdaf ${y}` });
                                }
                            }
                        />
                    </div>
                    <div className="item-panel bigitem">
                        <DataGrid dataSource={x} />
                    </div>
                    <div className="item-panel bigitem">
                        <h1>Paul Stuff</h1>
                        <TextBox
                            ref={(ref) => ref ? this.textBox = ref.instance : null}
                            value={this.state.text}
                            onValueChanged={this.handleChange}
                            valueChangeEvent='input'
                        />

                        <Button text='Go to the TextBox' onClick={() => this.textBox.focus()} />
                    </div>
                    <div className="item-panel xsmallitem">
                        {/* <List array={arr} /> passes prop called array*/}
                        <List />
                    </div>
                </div>
            </div>
        );
    }
}

export default Stuff;