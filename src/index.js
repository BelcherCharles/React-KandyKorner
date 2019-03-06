import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import KandyKorner from './components/kandykorner'
// import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
    <Router>
        <KandyKorner />
    </Router>
    , document.getElementById('root'))




// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import StoreLocations from './components/StoreList/storeLocations'
// import EmployeeList from './components/EmployeeList/employeeList'
// import CandyList from "./components/CandyList/candyList"
// // import App from './App';

// import * as serviceWorker from './serviceWorker';
// class KandyKorner extends Component {
//     StoreLocations = [
//         { id: 1, name: "Store 1", address: "123 Somewhere St" },
//         { id: 2, name: "Store 2", address: "45 St. Elsewhere Rd." },
//         { id: 3, name: "Store 3", address: "21 Jump Street" }
//     ]
//     Employees = [
//         { id: 1, name: "Freddy K." },
//         { id: 2, name: "Jason V." },
//         { id: 3, name: "PennyWise" },
//         { id: 4, name: "Predator" }
//     ]
//     CandyTypes = [
//         { id: 1, name: "Gummy shits" },
//         { id: 2, name: "Suckers for suckers" },
//         { id: 3, name: "Sugar-Free Trash" },
//         { id: 4, name: "Choco Overload" }
//     ]
//     Candies = [
//         { id: 1, typeId: 1, name: "Gummy Worms"},
//         { id: 2, typeId: 1, name: "Gummy Bears"},
//         { id: 3, typeId: 1, name: "Sour Patch Kids"},
//         { id: 4, typeId: 2, name: "Dum-Dums"},
//         { id: 5, typeId: 2, name: "Blow-Pops"},
//         { id: 6, typeId: 2, name: "Tootsie-Pops"},
//         { id: 7, typeId: 3, name: "Salt-Water Taffy"},
//         { id: 8, typeId: 4, name: "Reese's Pieces"},
//         { id: 9, typeId: 4, name: "M&Ms"},
//         { id:10, typeId: 4, name: "Hershey Kisses"}
//     ]

//     // CandiesAsType = [
//     //     { id: 1, CandyTypeId : 1},
//     //     { id: 2, CandyTypeId : 1},
//     //     { id: 3, CandyTypeId : 1},
//     //     { id: 4, CandyTypeId : 2},
//     //     { id: 5, CandyTypeId : 2},
//     //     { id: 6, CandyTypeId : 2},
//     //     { id: 7, CandyTypeId : 3},
//     //     { id: 8, CandyTypeId : 4},
//     //     { id: 9, CandyTypeId : 4},
//     //     { id:10, CandyTypeId : 4}
//     // ]


//     state = {
//         stores: this.StoreLocations,
//         employees: this.Employees,
//         candyTypes: this.CandyTypes,
//         candies: this.Candies,
//         // candiesAsType: this.CandiesAsType
//     }

//     render() {
//         return (
//             <div>
//                 <StoreLocations stores={this.state.stores} />
//                 <EmployeeList employees={this.state.employees} />
//                 <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
//             </div>
//         );
//     }
// }

// // export default KandyKorner;


// ReactDOM.render(<KandyKorner />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// export default KandyKorner;