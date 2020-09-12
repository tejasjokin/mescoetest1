import React from 'react';
import 'tachyons';
import './Attendance.css';

const Attendance = ({onRouteChange}) => {
    return (
        <div className='vh-100 dt w-100 flex flex-column items-center justify-center' >
            <div className='f2 b ma2'>On Going Class</div>
            <div className='f4 ma2'>Mon 12 Aug 2020 9:45 am</div>
            <button className='btn grow ma2 shadow-5' >Mark Attendance</button>
            <input name='passcode' className='ba b--black-20 pa2 mb2 db ma2 dn' placeholder='Enter your passcode here' />
            <div className='f4 gray ma2'>Attendance Marked Successfully!</div>
            <button className='btn grow ma2 shadow-5 ' onClick={()=>onRouteChange('Home')} >Check Attendance</button>
        </div>
    );
}

export default Attendance;