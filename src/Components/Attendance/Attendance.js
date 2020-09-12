import React, {Component} from 'react';
import 'tachyons';
import './Attendance.css';

class Attendance extends Component{
    constructor()
    {
        super();
        this.state = {
            isVisible:'false',
            marked: 'pending',
        }
    }

    onMarkInitiate = (isVisible) => {
        this.setState({isVisible: isVisible});
    }

    onSubmit = (marked) => {
        this.setState({marked: marked});
    }


    render()
    {
        const {isVisible, marked} = this.state;
        if(isVisible==='false' && marked==='pending')
        {
        return (
            <div className='vh-60 dt w-100 flex flex-column items-center justify-center ma2 mt6 pv3 shadow-2' >
                <div className='f2 b ma2'>On Going Class</div>
                <div className='f4 ma2'>Mon 12 Aug 2020 9:45 am</div>
                <button onClick = {() => this.onMarkInitiate('true')} className='btn1 grow ma2 shadow-5' >Mark Attendance</button>
                <div className='f4 gray br3 bg-washed-green ph2 fw5'><p>Attendance Pending</p></div>
            </div>
        );
        }
        else if(isVisible==='true' && marked==='pending')
        {
         return (
            <div className='vh-60 dt w-100 flex flex-column items-center justify-center ma2 mt6 pv3 shadow-2' >
                <div className='f2 b ma2'>On Going Class</div>
                <div className='f4 ma2'>Mon 12 Aug 2020 9:45 am</div>
                <button className='btn1 grow ma2 shadow-5' >Mark Attendance</button>
                <div className='flex items-center ma2 pa1'>
                    <input id = 'pass' name='passcode' className='tc ba b--black-20 pa2 mb2 db ma2 dn' placeholder='Enter your passcode here' />
                    <input onClick= {() =>this.onSubmit('marked') } id = 'confirm' className="b br3 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Confirm" />
                </div>
                <div className='f4 gray br3 bg-washed-green ph2 fw5'><p>Attendance Pending</p></div>
            </div>
        );   
        }
        else if(isVisible==='true' && marked==='marked')
        {
           return (
            <div className='vh-60 dt w-100 flex flex-column items-center justify-center ma2 mt6 pv3 shadow-2' >
                <div className='f2 b ma2'>On Going Class</div>
                <div className='f4 ma2'>Mon 12 Aug 2020 9:45 am</div>
                <button className='btn1 grow ma2 shadow-5' >Mark Attendance</button>
                <div className='flex items-center ma2 pa1'>
                    <input id = 'pass' name='passcode' className='tc ba b--black-20 pa2 mb2 db ma2 dn' placeholder='Enter your passcode here' />
                    <input id = 'confirm' className="b br3 input-reset ba b--black bg-transparent grow pointer f5 dib" type="button" value="Confirm" />
                </div>
                <div className='f4 green br3 bg-washed-green ph2 fw5'><p>Attendance Marked Successfully!</p></div>
            </div>
        );     
        }
    }
}

export default Attendance;