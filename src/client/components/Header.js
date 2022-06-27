import { Fragment, useState } from "react";
import { ImHome } from 'react-icons/im';
import { FaQq } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

import { HOMEPAGE } from '../util/constants';


import Logo from '../assets/images/driverzone_logo.png';

const Header = () => {
    const [language, setLanguage] = useState('En');
    const handleLanguage = () => {

    };
    return (
        <Fragment>
            <div className="headerContainer">
                <div className="logo">
                    <img src={Logo} alt={`Logo DriverZone`} />
                </div>
                <div className="right_header">
                    <div className="language_selectn">
                        <select onChange={handleLanguage}>
                            {HOMEPAGE.language.map(lang => (<option key={lang} value={lang}>{lang}</option>))}
                        </select>
                    </div>
                    <ul>
                        <li className="active"><a href=""><ImHome /></a></li>
                        {/* <li><a href=""><ImProfile /></a></li> */}
                        <li><a href=""><FaQq /></a></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};


export default Header;