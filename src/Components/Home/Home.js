import React from 'react';
import 'tachyons';
import './Home.css';

const Home = () => {
    return (
        <div >
            <nav className="flex pa3 pa4-ns justify-center">
                <img src="http://tachyons.io/img/logo.jpg" alt="logo" className='br-100 h2 w2 dib' />
                <a className="link dim black    f2 f3-ns dib mr3" href="#" title="Home">NoticeBoard</a>
                <a className="link dim black    f2 f3-ns dib mr3" href="#" title="About">Tests</a>
                <a className="link dim black    f2 f3-ns dib mr3" href="#" title="Store">Assignments</a>
                <a className="link dim black    f2 f3-ns dib" href="#" title="Contact">TimeTable</a>
            </nav>


            <div className='bg'>
                <div className='profile_pic'>
                    <div><img src="http://tachyons.io/img/logo.jpg" alt="profile" className='br-100 h8 w8 dib' /></div>
                </div>
                <div className='discription'>
                    <div className='b white f2 ma1'>Tanmay Jagtap</div>
                    <div className='b white f3 ma1'>F18112045</div>
                    <div className='b white f4 ma1'>Computer TE_2</div>
                    <div>
                        <button className='grow btn'>Summary</button>
                        <button className='grow btn'>mark attendance</button>
                    </div>
                </div>
            </div>
            <div class="pa4">
                <div class="overflow-auto">
                    <table class="f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Username</th>
                                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
                                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
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