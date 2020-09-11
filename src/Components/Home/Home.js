import React from 'react';
import 'tachyons';
import './Home.css';

const Home = () => {
    return (
        <div >
            <nav className = 'pa3 ma1' style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <img src="http://tachyons.io/img/logo.jpg" alt="logo" className='mh2 br-100 h2 w2 dib' />
                <a className="link dim black f2 f3-ns dib ph3" href="#" title="Home">NoticeBoard</a>
                <a className="link dim black f2 f3-ns dib ph3" href="#" title="About">Tests</a>
                <a className="link dim black f2 f3-ns dib ph3" href="#" title="Store">Assignments</a>
                <a className="link dim black f2 f3-ns dib" href="#" title="Contact">TimeTable</a>
            </nav>


            <div className='bg'>
                <div className='profile_pic'>
                    <div><img src="http://tachyons.io/img/logo.jpg" alt="profile" className='br-100 h8 w8 dib' /></div>
                </div>
                <div className='description pa4'>
                    <div className='b white f2 ma1'>Tanmay Jagtap</div>
                    <div className='b white f3 ma1'>F18112045</div>
                    <div className='b white f4 ma1'>Computer TE_2</div>
                    <div>
                        <button className='grow btn'>Mark attendance</button>
                    </div>
                </div>
            </div>
            <div class="pa4">
                <div class="overflow-auto">
                    <table class="f6 w-100 mw8 center pa2 shadow-2 br2" cellspacing="0">
                        <thead className='cardContainer'>
                            <tr>
                                <th class="f3 fw6 bb b--black-20 tc pb3 pr3">Subject</th>
                                <th class="f3 fw6 bb b--black-20 tc pb3 pr3">Total Lectures</th>
                                <th class="f3 fw6 bb b--black-20 tc pb3 pr3">Attended</th>
                                <th class="f3 fw6 bb b--black-20 tc pb3 pr3">Percentage</th>
                            </tr>
                        </thead>
                        <tbody class="lh-copy">
                            <tr>
                                <td class="pv3 pr3 bb b--black-20">Hassan Johnson</td>
                                <td class="pv3 pr3 bb b--black-20">@hassan</td>
                                <td class="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
                                <td class="pv3 pr3 bb b--black-20">14419232532474</td>
                            </tr>
                            <tr>
                                <td class="pv3 pr3 bb b--black-20">Taral Hicks</td>
                                <td class="pv3 pr3 bb b--black-20">@hicks</td>
                                <td class="pv3 pr3 bb b--black-20">taral@companywithalongdomain.co</td>
                                <td class="pv3 pr3 bb b--black-20">72326219423551</td>
                            </tr>
                            <tr>
                                <td class="pv3 pr3 bb b--black-20">Tyrin Turner</td>
                                <td class="pv3 pr3 bb b--black-20">@tt</td>
                                <td class="pv3 pr3 bb b--black-20">ty@companywithalongdomain.co</td>
                                <td class="pv3 pr3 bb b--black-20">92325170324444</td>
                            </tr>
                            <tr>
                                <td class="pv3 pr3 bb b--black-20">Oliver Grant</td>
                                <td class="pv3 pr3 bb b--black-20">@oli</td>
                                <td class="pv3 pr3 bb b--black-20">oliverg@companywithalongdomain.co</td>
                                <td class="pv3 pr3 bb b--black-20">71165170352909</td>
                            </tr>
                            <tr>
                                <td class="pv3 pr3 bb b--black-20">Dean Blanc</td>
                                <td class="pv3 pr3 bb b--black-20">@deanblanc</td>
                                <td class="pv3 pr3 bb b--black-20">dean@companywithalongdomain.co</td>
                                <td class="pv3 pr3 bb b--black-20">71865178111909</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;