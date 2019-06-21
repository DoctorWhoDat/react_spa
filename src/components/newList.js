import React, { useState } from "react";
import moment from "moment";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from '@material-ui/core/TextField';
const y = [
    // Super
    // { id: 99, day: 'Sunday', text: 'Gretna Historical Society Super Game', startDate: moment('Nov 27, 2018 3PM', 'MMMDYYYYhA'), endDate: moment('Nov 27, 2018 6PM', 'MMMDYYYYhA') },
    // { id: 99, text: 'Gretna Economic Development Super Game', startDate: moment('Mar 2, 2019 3PM', 'MMMDYYYYhA'), endDate: moment('Mar 2, 2019 6PM', 'MMMDYYYYhA') },
    // { id: 98, text: 'Knights of Columbus Super Game', startDate: moment('April 6, 2019 3PM', 'MMMDYYYYhA'), endDate: moment('April 6, 2019 6PM', 'MMMDYYYYhA') },
    // { id: 97, text: 'Gretna Police Society Super Game', startDate: moment('May 4, 2019 3PM', 'MMMDYYYYhA'), endDate: moment('May 4, 2019 6PM', 'MMMDYYYYhA') },
    // { id: 96, text: 'Westbank Optimist Society Super Game', startDate: moment('June 7, 2019 3PM', 'MMMDYYYYhA'), endDate: moment('June 7, 2019 6PM', 'MMMDYYYYhA') },
    // { id: 95, text: 'Gretna Historical Society Super Game', startDate: moment('Aug 2, 2019 3PM', 'MMMDYYYYhA'), endDate: moment('Aug 2, 2019 6PM', 'MMMDYYYYhA') },

    // Monday
    { id: 1, day: 'Monday', text: 'Gretna Economic Development', startDate: moment('Mon3PM', 'dddhA'), endDate: moment('Mon4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO' },
    { id: 2, day: 'Monday', text: 'German American', startDate: moment('Mon8PM', 'dddhA'), endDate: moment('Mon9PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO' },
    { id: 3, day: 'Monday', text: 'Italian American', startDate: moment('Mon1030PM', 'dddhmmA'), endDate: moment('Mon1130PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO' },
    // Tuesday
    { id: 4, day: 'Tuesday', text: 'Gretna Historical Society', startDate: moment('Tue3PM', 'dddhA'), endDate: moment('Tue4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU' },
    { id: 5, day: 'Tuesday', text: 'Westbank Optimist', startDate: moment('Tue8PM', 'dddhA'), endDate: moment('Tue9PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU' },
    { id: 6, day: 'Tuesday', text: 'Westbank ARC', startDate: moment('Tue1030PM', 'dddhmmA'), endDate: moment('Tue1130PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=TU' },
    // Wednesday
    { id: 7, day: 'Wednesday', text: 'Gretna Historical Society', startDate: moment('Wed1210PM', 'dddhmmA'), endDate: moment('Wed110PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE' },
    { id: 8, day: 'Wednesday', text: 'David Crockett Fire Co. #1', startDate: moment('Wed3PM', 'dddhA'), endDate: moment('Wed4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE' },
    { id: 9, day: 'Wednesday', text: 'Post Backstage', startDate: moment('Wed8PM', 'dddhA'), endDate: moment('Wed9PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE' },
    { id: 10, day: 'Wednesday', text: 'Westbank ARC', startDate: moment('Wed1030PM', 'dddhmmA'), endDate: moment('Wed1130PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE' },
    // Thursday
    { id: 11, day: 'Thursday', text: 'David Crockett Fire Co. #1', startDate: moment('Thu1210PM', 'dddhmmA'), endDate: moment('Thu110PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=TH' },
    { id: 12, day: 'Thursday', text: 'Post Backstage', startDate: moment('Thu3PM', 'dddhA'), endDate: moment('Thu4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=TH' },
    { id: 13, day: 'Thursday', text: 'Krewe of Cleopatra', startDate: moment('Thu8PM', 'dddhA'), endDate: moment('Thu9PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=TH' },
    { id: 14, day: 'Thursday', text: 'Westbank Rotary', startDate: moment('Thu1030PM', 'dddhmmA'), endDate: moment('Thu1130PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=TH' },
    // Friday
    { id: 15, day: 'Friday', text: 'Gretna Police', startDate: moment('Fri1210PM', 'dddhmmA'), endDate: moment('Fri110PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=FR' },
    { id: 16, day: 'Friday', text: 'Gretna Historical Society', startDate: moment('Fri3PM', 'dddhA'), endDate: moment('Fri4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=FR' },
    { id: 17, day: 'Friday', text: 'Westbank Optimist (Regular)', startDate: moment('Fri8PM', 'dddhA'), endDate: moment('Fri10PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=FR' },
    { id: 18, day: 'Friday', text: 'Westbank Rotary', startDate: moment('Fri11PM', 'dddhA'), endDate: moment('Sat12AM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=FR' },
    // Saturday
    { id: 19, day: 'Saturday', text: 'KC 1905', startDate: moment('Sat1210PM', 'dddhmmA'), endDate: moment('Sat110PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=SA' },
    { id: 20, day: 'Saturday', text: 'Gretna Police', startDate: moment('Sat3PM', 'dddhA'), endDate: moment('Sat4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=SA' },
    { id: 21, day: 'Saturday', text: 'Gretna Economic Development', startDate: moment('Sat8PM', 'dddhA'), endDate: moment('Sat9PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=SA' },
    { id: 22, day: 'Saturday', text: 'German American', startDate: moment('Sat1030PM', 'dddhmmA'), endDate: moment('Sat1130PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=SA' },
    // Sunday
    { id: 23, day: 'Sunday', text: 'Gretna Historical Society', startDate: moment('Sun3PM', 'dddhA'), endDate: moment('Sun4PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU' },
    { id: 24, day: 'Sunday', text: 'Gretna Economic Development', startDate: moment('Sun8PM', 'dddhA'), endDate: moment('Sun9PM', 'dddhA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU' },
    { id: 25, day: 'Sunday', text: 'German American', startDate: moment('Sun1030PM', 'dddhmmA'), endDate: moment('Sun1130PM', 'dddhmmA'), recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU' },
];

function getDay() {
    switch (moment().day()) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 0: return "Sunday";
        default: return "Err";
    };
};

function badChars(str) {
    let chars = ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let bad = false
    chars.forEach(i => {
        if (str.indexOf(i) !== -1) { 
            bad = true; }
    });
    return bad;
};

export default function NewList(props) {
    const [disp, setDisp] = useState('inline-block');
    const [color, setColor] = useState('#123456');
    let list = [];

    y.forEach(i => {
        if (getDay() === i.day) {
            list.push(<div>
                <ListItem onClick={() => { window.alert(i.text) }} button>
                    <ListItemText primary={i.text} secondary={moment(i.startDate).format("h:mm A")} />
                </ListItem>
                {/* <Divider /> */}
            </div>)
        }
    });
    return (<div>
        <TextField style={{ marginBottom: '15px' }} label='Background Color' value={color}
            onChange={function (e) {
                if (badChars(e.target.value.toUpperCase()) || e.target.value.length > 7) { setColor(color); }
                else { setColor(e.target.value); }
            }}
            variant='outlined'
        />
        <br />
        <List style={{ backgroundColor: color, border: 'solid', borderWidth: '1px', display: disp }}>
            <ListItemText style={{ textAlign: 'center' }} primary={color + '\'s Games'}></ListItemText>
            <Divider />
            {list}
        </List>
    </div>);
};