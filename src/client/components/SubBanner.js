import { Fragment } from "react";
import { Link } from 'react-router-dom';
const SubBanner = ({ title, path }) => {
    return (
        <Fragment>
            <div className='SubPageBanner'>
                <div className="banner-content">
                    <h1>{title}</h1>
                    <p><Link to='/'>Home</Link> | {title}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default SubBanner;