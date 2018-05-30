import React, { Component } from "react";
import moment from "moment";

let arr = [
    { club: 'Davy Crocket', time: '8PM', date: 'May 30, 2017' },
    { club: 'GHS', time: '8PM', date: 'May 30, 2018' },
    { club: 'ROT', time: '3PM', date: 'June 2, 2018' },
    { club: 'OPT', time: '8PM', date: 'July 1, 2018' },
    { club: 'OPT', time: '8PM', date: 'July 1, 2019' }
];

function build() {
    let list = [];
    let current = 0;
    arr.forEach(i => {
        if (!moment(i.date).add(1, 'd').isBefore(moment())) {
            if (current !== moment(i.date).year()) {
                current = moment(i.date).year();
                list.push(<h1 className="year-header">{current}</h1>);
            }
            if (moment(i.date).year() > current) {
                list.push(
                    <h1 className="year-header">{moment(i.date).year()}</h1>
                );
            }
            list.push(<li>{i.club} {i.time}, {moment(i.date).format('MMM D')}</li>);
        }
    });
    return (
        <div className='customList'>
            <h1 className='year-header'>SPECIAL GAMES CALENDAR</h1>
            <ul>{list}</ul>
        </div>
    );
};
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() { return (build()); }
}

export default List;