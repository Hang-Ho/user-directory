import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeList from "../../containers/EmployeeList";

const App = props => {

    return <EmployeeList/>
    // <Router>
    //     <div className='container'>
    //         <Route exact path='/' component={EmployeeList}/>
    //     </div>
    // </Router>
}
;

export default App;