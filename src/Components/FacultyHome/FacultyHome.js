import React from 'react';
import 'tachyons';
import './FacultyHome.css'

const FacultyHome = () => {
        return (
                <div>
                        <nav className='flex justify-end pa3 ma1'>
                                <img src="http://tachyons.io/img/logo.jpg" alt="logo" className='mh2 br-100 h2 w2 dib' />
                                <a className="link dim black f2 f3-ns dib ph3" href="0#" title="Home">NoticeBoard</a>
                                <a className="link dim black f2 f3-ns dib ph3" href="0#" title="About">Tests</a>
                                <a className="link dim black f2 f3-ns dib ph3" href="0#" title="Store">Assignments</a>
                                <a className="link dim black f2 f3-ns dib" href="0#" title="Contact">TimeTable</a>
                        </nav>


                        <div className='bg shadow-2'>
                                <div className='profile_pic'>
                                        <div><img src="http://tachyons.io/img/logo.jpg" alt="profile" className='br-100 h8 w8 dib' /></div>
                                </div>
                                <div className='description pa4'>
                                        <div className='b white f2 ma1'>Mohini Devikar</div>
                                        <div className='b white f3 ma1'>ID No: 710520</div>
                                        <div className='b white f4 ma1'>Computer Dept</div>
                                </div>
                        </div>
                        <div className='b f2 white' >On Going Lec</div>
                        <div className='b f3 white' >(Time)</div>
                        <div>
                                <button className='grow btn shadow-5'>Generate Pass Key</button>
                        </div>
                        <div className='b f2 white' >P7852</div>
                        <div className='f2 ma3' >Schedule</div>
                        <div className='flex justify-center items-center f4 '>
                                <table>
                                        <tr>
                                                <th className='pr3 pb3' ></th>
                                                <th className='pr3 pb3' >Monday</th>
                                                <th className='pr3 pb3' >Tuesday</th>
                                                <th className='pr3 pb3' >Wednesday</th>
                                                <th className='pr3 pb3' >Thursday</th>
                                                <th className='pr3 pb3' >Friday</th>
                                                <th className='pr3 pb3' >Saturday</th>
                                        </tr>
                                        <tr>
                                                <th className='pr3 pv3' >11:45 am</th>
                                                <td className='pr3 pv3' >SE2</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                        </tr>
                                        <tr>
                                                <th className='pr3 pv3 ' >11:45 am</th>
                                                <td className='pr3 pv3 ' >SE2</td>
                                                <td className='pr3 pv3 ' >SE3</td>
                                                <td className='pr3 pv3 ' >SE3</td>
                                                <td className='pr3 pv3 ' >SE3</td>
                                                <td className='pr3 pv3 ' >SE3</td>
                                                <td className='pr3 pv3 ' >SE3</td>
                                        </tr>
                                        <tr>
                                                <th className='pr3  pv3' >11:45 am</th>
                                                <td className='pr3  pv3' >SE2</td>
                                                <td className='pr3  pv3' >SE3</td>
                                                <td className='pr3  pv3' >SE3</td>
                                                <td className='pr3  pv3' >SE3</td>
                                                <td className='pr3  pv3' >SE3</td>
                                                <td className='pr3  pv3' >SE3</td>
                                        </tr>
                                        <tr>
                                                <th className='pr3 pv3' >11:45 am</th>
                                                <td className='pr3 pv3' >SE2</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                        </tr>
                                        <tr>
                                                <th className='pr3 pv3' >11:45 am</th>
                                                <td className='pr3 pv3' >SE2</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                        </tr>
                                        <tr>
                                                <th className='pr3 pv3' >11:45 am</th>
                                                <td className='pr3 pv3' >SE2</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                                <td className='pr3 pv3' >SE3</td>
                                        </tr>
                                </table>
                        </div>
                </div>
        );
}

export default FacultyHome;


