import React from 'react';
import 'tachyons';
import './StudentHome.css';

const StudentHome = ({student_user, onRouteChange}) => {
    // const {name, PRN, branch, year, div} = student_user;
    return (
        <div >
            <nav className = 'flex justify-end pa3 ma1'>
                <img src="http://tachyons.io/img/logo.jpg" alt="logo" className='mh2 br-100 h2 w2 dib' />
                <a onClick = {() => onRouteChange('Notice_Students')} className="link dim black f2 f3-ns dib ph3" href="0#" title="Home">NoticeBoard</a>
                <a className="link dim black f2 f3-ns dib ph3" href="0#" title="About">Tests</a>
                <a className="link dim black f2 f3-ns dib ph3" href="0#" title="Store">Assignments</a>
                <a className="link dim black f2 f3-ns dib" href="0#" title="Contact">TimeTable</a>
            </nav>


            <div className='bg shadow-2Student'>
                <div className='profile_pic'>
                    <div><img src="http://tachyons.io/img/logo.jpg" alt="profile" className='br-100 h8 w8 dib' /></div>
                </div>
                <div className='description pa4'>
                    <div className='b white f2 ma1'>{student_user.name}</div>
                    <div className='b white f3 ma1'>{student_user.PRN}</div>
                    <div className='b white f4 ma1'>{student_user.branch} {student_user.year}{student_user.div}</div>
                    <div>
                        <button onClick={()=>onRouteChange('Attendance')} className='grow btn shadow-5'>Mark attendance</button>
                    </div>
                </div>
            </div>
            <div className="pa4">
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center pa2 shadow-2 br2" cellSpacing="0">
                        <thead className='cardContainer'>
                            <tr>
                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3">Subject</th>
                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3">Total Lectures</th>
                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3">Attended</th>
                                <th className="f3 fw6 bb b--black-20 tc pb3 pr3">Percentage</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            <tr>
                                <td className="pv3 pr3 bb b--black-20">Hassan Johnson</td>
                                <td className="pv3 pr3 bb b--black-20">@hassan</td>
                                <td className="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
                                <td className="pv3 pr3 bb b--black-20">14419232532474</td>
                            </tr>
                            <tr>
                                <td className="pv3 pr3 bb b--black-20">Taral Hicks</td>
                                <td className="pv3 pr3 bb b--black-20">@hicks</td>
                                <td className="pv3 pr3 bb b--black-20">taral@companywithalongdomain.co</td>
                                <td className="pv3 pr3 bb b--black-20">72326219423551</td>
                            </tr>
                            <tr>
                                <td className="pv3 pr3 bb b--black-20">Tyrin Turner</td>
                                <td className="pv3 pr3 bb b--black-20">@tt</td>
                                <td className="pv3 pr3 bb b--black-20">ty@companywithalongdomain.co</td>
                                <td className="pv3 pr3 bb b--black-20">92325170324444</td>
                            </tr>
                            <tr>
                                <td className="pv3 pr3 bb b--black-20">Oliver Grant</td>
                                <td className="pv3 pr3 bb b--black-20">@oli</td>
                                <td className="pv3 pr3 bb b--black-20">oliverg@companywithalongdomain.co</td>
                                <td className="pv3 pr3 bb b--black-20">71165170352909</td>
                            </tr>
                            <tr>
                                <td className="pv3 pr3 bb b--black-20">Dean Blanc</td>
                                <td className="pv3 pr3 bb b--black-20">@deanblanc</td>
                                <td className="pv3 pr3 bb b--black-20">dean@companywithalongdomain.co</td>
                                <td className="pv3 pr3 bb b--black-20">71865178111909</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default StudentHome;