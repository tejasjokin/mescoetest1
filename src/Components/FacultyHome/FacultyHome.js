import React from 'react';
import 'tachyons';
import './FacultyHome.css'

const FacultyHome = ({faculty_user, passcode, onGenerate}) => {
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
                                        <div className='b white f2 ma1'>{faculty_user.name}</div>
                                        <div className='b white f3 ma1'>ID No: {faculty_user.prn}</div>
                                        <div className='b white f4 ma1'>{faculty_user.branch} Dept</div>
                                </div>
                        </div>
                        <div className = 'ma3 pa4 shadow-2'>
                                <div className='b f2 black' >On Going Lecture</div>
                                <div className='b f3 black' >(Time)</div>  
                                <button onClick = {() => onGenerate()} className='btn1 grow shadow-5'>Generate passcode</button>
                                <div className='b f2 black' >{passcode}</div>
                        </div>
                        <hr className = 'hr1'/>
                        <div className='f2 ma3' >Schedule</div>
                        <hr className = 'hr1'/>
                        <div className='pa4'>
                                <div className="overflow-auto">
                                        <table className="f6 w-100 mw8 center pa2 shadow-2 br2" cellSpacing="0">
                                                <thead className='cardContainer'>
                                                        <tr>
                                                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3" ></th>
                                                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3" >Monday</th>
                                                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3" >Tuesday</th>
                                                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3" >Wednesday</th>
                                                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3" >Thursday</th>
                                                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3" >Friday</th>
                                                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3" >Saturday</th>
                                                        </tr>
                                                </thead>
                                                <tbody className="lh-copy">
                                                        <tr>
                                                                <th className="pv3 pr3 bb b--black-20" >11:45 am</th>
                                                                <td className="pv3 pr3 bb b--black-20" >SE2</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                        </tr>
                                                        <tr>
                                                                <th className="pv3 pr3 bb b--black-20">11:45 am</th>
                                                                <td className="pv3 pr3 bb b--black-20">SE2</td>
                                                                <td className="pv3 pr3 bb b--black-20">SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20">SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20">SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20">SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20">SE3</td>
                                                        </tr>
                                                        <tr>
                                                                <th className="pv3 pr3 bb b--black-20">11:45 am</th>
                                                                <td className="pv3 pr3 bb b--black-20" >SE2</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                        </tr>
                                                        <tr>
                                                                <th className="pv3 pr3 bb b--black-20" >11:45 am</th>
                                                                <td className="pv3 pr3 bb b--black-20" >SE2</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                        </tr>
                                                        <tr>
                                                                <th className="pv3 pr3 bb b--black-20" >11:45 am</th>
                                                                <td className="pv3 pr3 bb b--black-20" >SE2</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                        </tr>
                                                        <tr>
                                                                <th className="pv3 pr3 bb b--black-20" >11:45 am</th>
                                                                <td className="pv3 pr3 bb b--black-20" >SE2</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                                <td className="pv3 pr3 bb b--black-20" >SE3</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </div>
                        </div>
                </div>
        );
}

export default FacultyHome;


