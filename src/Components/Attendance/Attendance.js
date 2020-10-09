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
                <div className='vh-60 dt flex flex-column items-center justify-center ma2 mt6 pv3 shadow-2' >

                    <div className='f2 b ma2'>On Going Class</div>
                    <div className='f4 ma2'>Mon 12 Aug 2020 9:45 am</div>
                    <div>
                    <div className="mt3">
                            <label className="db fw6 lh-copy f4" htmlFor="email-address">Subject</label>
                            <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white tc year" name="year" id="year">
                                <option className='db tc fw6 lh-copy f4 greyed' value='None'>Select Subject</option>
                                <option className='db tc fw6 lh-copy f4' value='DBMS'>FE</option>
                                <option className='db tc fw6 lh-copy f4' value='TOC'>SE</option>
                                <option className='db tc fw6 lh-copy f4' value='SEPM'>SEPM</option>
                                <option className='db tc fw6 lh-copy f4' value='ISEE'>ISEE</option>
                                <option className='db tc fw6 lh-copy f4' value='DBML'>DBML</option>
                                <option className='db tc fw6 lh-copy f4' value='CN'>CN</option>
                                <option className='db tc fw6 lh-copy f4' value='CNL'>CNL</option>
                            </select>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f4" htmlFor="email-address">Year</label>
                            <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white tc year" name="year" id="year">
                                <option className='db tc fw6 lh-copy f4 greyed' value='None'>Select Year</option>
                                <option className='db tc fw6 lh-copy f4' value='FE'>FE</option>
                                <option className='db tc fw6 lh-copy f4' value='SE'>SE</option>
                                <option className='db tc fw6 lh-copy f4' value='TE'>TE</option>
                                <option className='db tc fw6 lh-copy f4' value='BE'>BE</option>
                            </select>
                        </div>
                        <div className="mt3 mb2">
                            <label className="db fw6 lh-copy f4" htmlFor="email-address">Branch</label>
                            <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white tc year" name="branch" id="branch">
                                <option className='db tc fw6 lh-copy f4 greyed' value='None'>Select Div</option>
                                <option className='db tc fw6 lh-copy f4' value='1'>1</option>
                                <option className='db tc fw6 lh-copy f4' value='2'>2</option>
                                <option className='db tc fw6 lh-copy f4' value='SS'>SS</option>
                            </select>
                        </div>

                        </div>
                    <div className='flex items-center ma2 pa1'>
                        <input id='pass' name='passcode' className='tc ba b--black-20 pa2 mb2 db ma2 dn' placeholder='Enter your passcode here' />
                        <input id='confirm' className="b br3 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Confirm" />
                    </div>
                    <div className='f4 green br3 bg-washed-green ph2 fw5'><p>Attendance Marked Successfully!</p></div>
                </div>
            );
        
    }
}

export default Attendance;