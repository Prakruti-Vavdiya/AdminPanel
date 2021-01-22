import './eduInfo.css';
import MyAux from '../MyAux/myAux';
import {NavLink} from 'react-router-dom';
const EduInfo=()=>{
    let localUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    //table binds each education info separately
    let table=localUserInfo.map(user =>
        (user.Reg2.map(education=>
            (
                <MyAux>
                    <tr><td colSpan='2'><hr/></td></tr>
                    <tr>
                        <th>Institute:</th>
                        <td>{education.Institute}</td>
                    </tr>
                    <tr>
                        <th>Course:</th>
                        <td>{education.course}</td>
                    </tr>
                    <tr>
                        <th>Percentage:</th>
                        <td>{education.percentage}</td>
                    </tr>
                    <tr>
                        <th>Start Date:</th>
                        <td>{education.startDate}</td>
                    </tr>
                    <tr>
                        <th>End Date:</th>
                        <td>{education.endDate}</td>
                    </tr>
                    </MyAux>
            ))))
            //Info brings info of same person together in one table
            let personalInfo=JSON.parse(localStorage.getItem('userInfo'));
           let Info=table.map(
               //bring name from same index as person from Reg1
                person=>(
                    <table>
                    <tr>
                        <th>Name:</th>
                        <td>{personalInfo[table.indexOf(person)].Reg1['firstname']+' '+personalInfo[table.indexOf(person)].Reg1['lastname']}</td>
                    </tr>
                        {person}
                    </table>
                )
            )
            return(
                <div>
                    <NavLink to='/EducationalDetails2' className="switch-format">View table format</NavLink>
                    {Info}
                </div>
            );

}
export default EduInfo;