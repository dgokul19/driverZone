import { Fragment } from "react";
import Header from "./Header";

import SubBanner from './SubBanner';

const ContactComponent = () => {
    return (
        <Fragment>
            <Header/>
            <SubBanner title={'Contacts Us'} path={`contact`}/>
        </Fragment>
    );
};


export default ContactComponent;