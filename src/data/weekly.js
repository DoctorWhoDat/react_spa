import React, { Component } from "react";
import { Scheduler } from "devextreme-react";

import moment from "moment";
let view = '';
let y = [
    // Monday
    { id: 1, day: 'Monday', text: 'lsaihfoiusadhfsoi', startDate: moment('Mon3PM', 'dddhA'), endDate: moment('Mon4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO' },
    { id: 2, day: 'Monday', text: 'GHS', startDate: moment('Tue3PM', 'dddhA'), endDate: moment('Tue4PM', 'dddhA') },
    // Tuesday
    { id: 3, day: 'Tuesday', text: 'GHS', startDate: '12:10 pm', endDate: '1:10 pm' }
    // Wednesday
    // Thursday
    // Friday
    // Saturday
    // Sunday
];

class Schedules extends Component {
    constructor(props) {
        super(props);
        this.state = {view: props.view};
        view = props.view;
    }
    render() {
        return (
            <div>
                <Scheduler
                    // dataSource={[{text: 'safd', startDate: moment(), endDate: moment().add(1,'h'), day: 'Monday'}]} 
                    dataSource={y} 
                    currentView={this.state.view === 'day' ? 'day' : 'month'} optionChanged = {(e)=>{
                        this.setState({view: e.value});
                    }}
                    views={['day','week','month']} startDayHour={12} editing={false}
                    resources={[{ fieldExpr: 'day', dataSource: { id: 'Monday', color: '#D9534F' } }]}
                />
            </div>
        )
    }
}

export default Schedules;