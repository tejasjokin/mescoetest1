import React from 'react';
import 'tachyons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faBookmark,faTrash } from '@fortawesome/free-solid-svg-icons'


const NoticeBoard = () => {
        return (
                <div>
                    <nav className="pa3 pa4-ns flex justify-end">
                <a className="link dim black   f3 f3-ns dib mr3" href="0#" title="Home">Pinned</a>
                <a className="link dim black   f3 f3-ns dib mr3" href="0#" title="About">Saved</a>
                <a className="link dim black   f3 f3-ns dib mr3" href="0#" title="Store">Recents</a>
            </nav>
            <article className="grow shadow-5 center mw6 mw6-ns br3 hidden ba b--black-10 mv4">
                <div className='flex justify-between bg-near-white br3 br--top' >
                <h1 className="f4  br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
                <h2 className="f4  br3 br--top black-60 mv0 pv2 ph3">24 Jan 2020</h2>
                </div>
                <div className="pa3 bt b--black-10">
                    <p className="f6 f5-ns lh-copy measure">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                     </p>
                     <div className='flex justify-end' >
                     <button><FontAwesomeIcon icon={faThumbtack} /></button>
                     <button><FontAwesomeIcon icon={faBookmark} /></button>
                     <button><FontAwesomeIcon icon={faTrash} /></button>
                     </div>
                </div>
            </article>   
                </div>
        );
}

export default NoticeBoard;

