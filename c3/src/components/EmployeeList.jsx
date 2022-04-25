import { useEffect, useState } from "react";

export const EmployeeList = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getData();
    })
 const getData=()=>{
     fatch(`http://localhost:8080/employee`).then((res)=>(res.json())).then((data)=>{
         setData(data[0]);
     })    

    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        <div className="employee_card">
          <img className="employee_image" src={data.image} />
          <span className="employee_name">Employe_Name:{data.employee_name}</span>
          <span className="employee_title">Employe_title:{data.employee_title}</span>
        </div>
      </div>
    );
  };
}