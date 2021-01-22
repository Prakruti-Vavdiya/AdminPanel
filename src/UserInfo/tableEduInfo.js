import './tableEduInfo.css';
import MyAux from '../MyAux/myAux';
import {NavLink} from 'react-router-dom';
const TableEduInfo=()=>{
    let localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
            let names=localUserInfo.map(
                (person=>(person.Reg1['firstname']+' '+person.Reg1['lastname']))
            )
    let info=localUserInfo.map(user =>
        (user.Reg2.map(education=>
            
                (
                    <MyAux>
                            <tr>
                            <td>{(user.Reg2.indexOf(education)===0)?names[localUserInfo.indexOf(user)]:''}</td>
                            <td>{education.Institute}</td>
                            <td>{education.course}</td>
                            <td>{education.percentage}</td>
                            <td>{education.startDate}</td>
                            <td>{education.endDate}</td>
                            </tr>

                    </MyAux>
                )
            
            )))
            
           
            return(
                <div>
                    <NavLink to='/EducationalDetails' className="switch-format">View card format</NavLink>
                    <table className='eduTable'>
                        <tr>
                        <th>Name</th><th>Institute</th><th>Course</th><th>Percentage</th><th>Start Date</th><th>End Date</th>
                        </tr>
                        {info}
                    </table>
                </div>
            );

}
export default TableEduInfo;