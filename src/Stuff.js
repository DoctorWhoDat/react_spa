import React, { Component } from "react";
// import * as dx from "devextreme";
import { TextBox, Button, DataGrid } from "devextreme-react";
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
                    <div className="item-panel maxitem">
                    <h1>Paul Stuff</h1>
                        <TextBox
                            ref={(ref) => ref ? this.textBox = ref.instance : null}
                            value={this.state.text}
                            onValueChanged={this.handleChange}
                            valueChangeEvent='input'
                        />

                        <Button text='Go to the TextBox' onClick={() => this.textBox.focus()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Stuff;