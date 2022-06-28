import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomeComponent from './client/components/Home';
import FaqComponent from './client/components/FaqComponent';
import ContactComponent from './client/components/Contact';

import './client/styles/common.scss';


function App() {
  return (
    <div className="wrapperContainer">
        <Router>
            <Routes>
                <Route path="/faq" element={<FaqComponent/>} ></Route>
                <Route path="/contact" element={<ContactComponent/>} ></Route>
                <Route path="/*" element={<HomeComponent/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
