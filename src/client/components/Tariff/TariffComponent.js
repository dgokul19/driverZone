import { Fragment, useState } from 'react';
import { IoCarSportSharp } from 'react-icons/io5';
import { FaShuttleVan } from 'react-icons/fa';
import { BsCurrencyEuro } from 'react-icons/bs';

import '../../styles/tariffStyle.scss';

const TariffComponent = () => {
    const [tariffSec, setTariffSection] = useState('berline');

    const changeTariffSection = (tariffPlan) => {
        if (tariffSec === tariffPlan) return;
        setTariffSection(tariffPlan);
    };

    return (
        <Fragment>
            <div className='tariffContainer'>
                <div className='tariffInner container'>
                    <label className='subTitle'>Let's go with us</label>
                    <h2 className='mainTitle'>Our City Tariffs</h2>

                    <div className='toggleContainer'>
                        <ul>
                            <li className={(tariffSec === 'berline') ? 'active' : ''} onClick={() => changeTariffSection('berline')}>
                                <IoCarSportSharp />
                                <span>Berline</span>
                            </li>

                            <li className={(tariffSec === 'van') ? 'active' : ''} onClick={() => changeTariffSection('van')}>
                                <FaShuttleVan />
                                <span>Van</span>
                            </li>
                        </ul>

                        <div className={`tariffSection ${(tariffSec !== 'berline') ? 'hide' : 'active'}`}>
                            <div className='rowTariff'>
                                <div className='tariffBox'>
                                    <ol>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Charles de Gaulle – Disneyland </h3>
                                            <label>60 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Charles de Gaulle – Paris </h3>
                                            <label>65 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>

                                            <h3>Charles de Gaulle – Orly </h3>
                                            <label>85 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>

                                            <h3>Charles de Gaulle – Beauvais </h3>
                                            <label>100 <BsCurrencyEuro /></label>
                                        </li>
                                    </ol>
                                </div>
                                <div className='tariffBox'>
                                    <ol>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Orly  – Disneyland </h3>
                                            <label>60 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Orly  – Paris </h3>
                                            <label>60 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>

                                            <h3>Orly  – Beauvais </h3>
                                            <label>135 <BsCurrencyEuro /></label>
                                        </li>
                                    </ol>
                                </div>
                                <div className='tariffBox'>
                                    <ol>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Beauvais  – Disneyland </h3>
                                            <label>130 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Beauvais  – Paris </h3>
                                            <label>130 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>

                                            <h3>Beauvais  – Charles de Gaulle </h3>
                                            <label>120 <BsCurrencyEuro /></label>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className={`tariffSection ${(tariffSec !== 'van') ? 'hide' : 'active'}`}>
                            <div className='rowTariff single'>
                                <div className='tariffBox'>
                                    <ol>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Charles de Gaulle – Paris </h3>
                                            <label>95 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>
                                            <h3>Orly – Paris </h3>
                                            <label>85 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>

                                            <h3>Beauvais – Orly </h3>
                                            <label>250 <BsCurrencyEuro /></label>
                                        </li>
                                        <li>
                                            <span>Source - Destination...</span>

                                            <h3>Orly - Charles de Gaulle </h3>
                                            <label>135 <BsCurrencyEuro /></label>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dispositn">
                        <h3> MISE A DISPOSITION </h3>
                        <br></br>

                        <p>
                            The provision service allows you to benefit from a car with private driver for several hours or half a day. It is an ideal solution that allows you to make all your journeys in a very comfortable and, above all, stress-free way. You are indeed guaranteed to be able to call on your private driver whenever you wish, throughout your reservation.
                        </p>
                        <p>Our driver will be your servant for half a day or for the whole day.</p>
                        <br></br>
                        <p>* A long-distance trip? Event ? a specific need? An 8/9 seater Van? Contact us for a personalized quote</p>

                        <table>
                            <thead>
                                <tr>
                                    <th>Price</th>
                                    <th>Berline</th>
                                    <th>Van</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={3}> 24/7 Service</td>
                                </tr>

                                <tr>
                                    <td> 1 Hour</td>
                                    <td><span>69 <BsCurrencyEuro /></span></td>
                                    <td> <span>89 <BsCurrencyEuro /> </span></td>
                                </tr>

                                <tr>
                                    <td> 4 Hour ( Half Day)</td>
                                    <td><span>250 <BsCurrencyEuro /></span></td>
                                    <td> <span>320 <BsCurrencyEuro /> </span></td>
                                </tr>
                                <tr>
                                    <td> 8 Hour ( Full Day)</td>
                                    <td><span>380 <BsCurrencyEuro /></span></td>
                                    <td> <span>550 <BsCurrencyEuro /> </span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TariffComponent;
