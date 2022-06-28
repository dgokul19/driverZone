import { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

import { ImHome } from 'react-icons/im';
import { FaQq } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';

import { HOMEPAGE } from '../util/constants';


import Logo from '../assets/images/driverzone_logo.png';

const Header = ({landingPage}) => {
    const [language, setLanguage] = useState('En');
    const handleLanguage = () => {

    };
    return (
        <Fragment>
            <div className={`headerContainer ${!landingPage ? 'subPages' : ''}`}>
                <div className="logo">
                    <Link to="/"><img src={Logo} alt={`Logo DriverZone`} /></Link>
                </div>
                <div className="right_header">
                    <div className="language_selectn">
                        <select onChange={handleLanguage}>
                            {HOMEPAGE.language.map(lang => (<option key={lang} value={lang}>{lang}</option>))}
                        </select>
                    </div>
                    <ul>
                        <li className="active"><Link to="/"><ImHome /></Link></li>
                        <li><Link to="/faq"><FaQq /></Link></li>
                        <li><Link to="/contact"><RiContactsFill /></Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};


export default Header;