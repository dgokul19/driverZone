import { Fragment, useState } from "react";
import { FiChevronDown } from 'react-icons/fi';

import Header from "./Header";
import SubBanner from './SubBanner';
import BookUs from './BookUs';

import { FAQ_CONTENT } from '../util/constants';

import '../styles/pages.scss';

const FaqComponent = () => {
    const [faqContent, setFaqContent] = useState([...FAQ_CONTENT]);

    const handleSelection = (contentId) => {
        let contentIndex = [...faqContent].map(value => {
            value.active = false;
            if (value.id === contentId) {
                value.active = !value.active;
            }
            return value;
        });
        setFaqContent([...contentIndex]);
    };

    return (
        <Fragment>
            <Header />
            <SubBanner title={'Faq'} path={`faq`} />

            <div className="faqMainContainer">
                <div className="faqWrapper container">
                    {
                        faqContent.map(content => {
                            return (
                                <div key={content.id} className={`faqElement ${content.active ? 'openMode' : ''}`}>
                                    <div className="faqHead" onClick={() => handleSelection(content.id)}>
                                        <h3>{content.header}</h3>
                                        <FiChevronDown className="handlerIcon" />
                                    </div>
                                    <div className={`faqBody ${content.active ? 'active' : ''}`}>
                                        <p>{content.answer}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            <BookUs />
        </Fragment>
    );
};

export default FaqComponent;