import { Fragment } from "react";
import Header from "./Header";
import SubBanner from './SubBanner';

const FaqComponent = () => {
    return (
        <Fragment>
             <Header/>
            <SubBanner title={'Faq'} path={`faq`}/>
        </Fragment>
    );
};

export default FaqComponent;