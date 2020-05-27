import React, {Component} from 'react';
import axios from 'axios';
import EmployeeList from "../../components/EmployeeList";
import TextBox from "../../components/textBox";

class Employee extends Component {
    state = {
        employees: [],
        original: [],
        search: ""

    }
    async componentDidMount() {
        try {
            axios.get('https://randomuser.me/api/?results=50')
                .then(res => {
                    console.log(res.data);
                    this.setState({employees: res.data.results, original: res.data.results})
                })
        } catch(e) {
            console.log(e); 
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
        let newEmployee = this.state.original.filter(employee => {
            return employee.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1;
        })
        console.log(value)
        this.setState({
            employees : newEmployee
        })
    }
    handleClick = (field) => {
        let newEmployee = this.state.employees.sort((a,b) => {
            return a.name[field].localeCompare(b.name[field])
        })
        this.setState({employees: newEmployee});
    }
    render() {
        return (
            <div>
                <TextBox handleInputChange={this.handleInputChange} search={this.state.search}/>
                {console.log(this.state.employees, "employee")}
                <EmployeeList items={this.state.employees} handleClick={this.handleClick}/>
            </div>
        )
    }
}
export default Employee;