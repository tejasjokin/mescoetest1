import React, { Component } from 'react';
import 'tachyons';
import './Attendance.css';

class Attendance extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: 'false',
            marked: 'pending',
        }
    }

    onMarkInitiate = (isVisible) => {
        this.setState({ isVisible: isVisible });
    }

    onSubmit = (marked) => {
        this.setState({ marked: marked });
    }


    render() {

        return (
            <div className='ma3 pa4 shadow-2'>

                <div className="mt3">
                    <label className="db fw6 lh-copy f4" htmlFor="email-address">Subject</label>
                    <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-20" name="year" id="year">
                        <option className='db fw6 lh-copy f4 greyed' value='None'>Select Subject</option>
                        <option className='db fw6 lh-copy f4' value='DBMS'>FE</option>
                        <option className='db fw6 lh-copy f4' value='TOC'>SE</option>
                        <option className='db fw6 lh-copy f4' value='SEPM'>SEPM</option>
                        <option className='db fw6 lh-copy f4' value='ISEE'>ISEE</option>
                        <option className='db fw6 lh-copy f4' value='DBML'>DBML</option>
                        <option className='db fw6 lh-copy f4' value='CN'>CN</option>
                        <option className='db fw6 lh-copy f4' value='CNL'>CNL</option>
                    </select>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4" htmlFor="email-address">Year</label>
                    <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-20" name="year" id="year">
                        <option className='db fw6 lh-copy f4 greyed' value='None'>Select Year</option>
                        <option className='db fw6 lh-copy f4' value='FE'>FE</option>
                        <option className='db fw6 lh-copy f4' value='SE'>SE</option>
                        <option className='db fw6 lh-copy f4' value='TE'>TE</option>
                        <option className='db fw6 lh-copy f4' value='BE'>BE</option>
                    </select>
                </div>
                <div className="mt3 mb2">
                    <label className="db fw6 lh-copy f4" htmlFor="email-address">Branch</label>
                    <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-20" name="branch" id="branch">
                        <option className='db fw6 lh-copy f4 greyed' value='None'>Select Div</option>
                        <option className='db fw6 lh-copy f4' value='1'>1</option>
                        <option className='db fw6 lh-copy f4' value='2'>2</option>
                        <option className='db fw6 lh-copy f4' value='SS'>SS</option>
                    </select>
                </div>
                <button onClick={() => onGenerate()} className='btn1 grow shadow-5'>Generate passcode</button>
                <div className='b f2 black' >{passcode}</div>
            </div>
        );

    }
}

export default Attendance;