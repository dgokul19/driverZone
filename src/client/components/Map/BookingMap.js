import { Fragment } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import './map.scss';

const BookingMap = ({ open, closeModal }) => {
    return(
        <Fragment>
            <div className={`mapLayerModal ${open ? 'open' : ''}`}>
                <div className={`mapTransitionLayer ${open ? 'active' : ''}`}>
                    <AiFillCloseCircle className={'closeIcon'} onClick={closeModal}/>
                </div>
            </div>
        </Fragment>
    );
};

export default BookingMap;