import React, { Component } from 'react';
import Input from '../Input/input';
import './Reg.css';
class NewReg2 extends Component {

    state = {
        RegForm: {
            Institute: {
                label: 'Institute',
                elementType: 'Input',
                elementConfig: {
                    type: 'Text',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },

            course: {
                label: 'Course',
                elementType: 'Input',
                elementConfig: {
                    type: 'text',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            percentage: {
                label: 'Percentage/CGPA',
                elementType: 'Input',
                elementConfig: {
                    type: 'Text',
                },
                value: '',
                validation: {
                    required: true,
                    regex: /^([0-9]){1,2}(\.[0-9]{1,2})?$/
                },
                valid: false,
                touched: false
            },
            startDate: {
                label: 'Start Date',
                elementType: 'Input',
                elementConfig: {
                    type: 'Date',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            endDate: {
                label: 'End Date',
                elementType: 'Input',
                elementConfig: {
                    type: 'Date',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
        },

        Reg2Data: [],
        RegList:[],
        isFormValid: false
    }
    createForm(){
        
        return (this.state.RegList.map((el,i)=>
            <div key={i}>
                <input type="text" value={el||''} onChange={(event) => this.inputChangeHandler(event,i)}></input>
                <button onClick={this.removeHandler(i)}>Remove</button>
            </div>
        ));
    }
    inputChangeHandler=(event,i)=>{
        let values=[...this.state.RegList];
        values[i]=event.target.value;
        this.setState({values});
    }
    addHandler=()=>{
        this.setState(prevState=>({RegList:[...prevState.RegList,'']}))
    }
    render(){
        return(
            <div className='Reg'>
                <form id='Reg2'>
                    <h1>Educational Information</h1>
                    <button onClick={()=>{this.props.history.push('/Register')}}>Previous</button>
                    <button disabled={!this.state.isFormValid} onClick={this.addHandler}>Add More</button>
                    <button disabled={!this.state.isFormValid} onClick={this.registerUser}>Register</button>
                </form>
            </div>
        );
    }
}

export default NewReg2;