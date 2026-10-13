import React from "react";
import { useState } from "react";
import "./Admission.css"
import mec from './assest/mecimage.png'


function Admission() {
    const [value, setValue] = useState({
        Name: "",
        DOB: "",
        Gender: "",
        Email: "",
        ParentNumber: "",
        FirstGraduate: "",
        Address: "",
        District: "",
        State: "",
        Course: ""
    });

    const [error, setError] = useState({
        NameError: "",
        DOBError: "",
        GenderError: "",
        EmailError: "",
        ParentNumberError: "",
        FirstGraduateError: "",
        AddressError: "",
        DistrictError: "",
        StateError: "",
        CourseError: ""
    });

    function handle(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        }
        );
    }

    function submit(e) {
        e.preventDefault();
        console.log("field is not")
        if (value.Name == "") {
            setError({
                ...error,
                NameError: "Field is Required"
            });
        }

        else if (value.DOB == "") {
            setError({
                ...error,
                DOBError: "Field is Required"
            });
        }

        else if (value.Email == "") {
            setError({
                ...error,
                EmailError: "Field is Required"
            });
        }

        else if (value.ParentNumber == "") {
            setError({
                ...error,
                ParentNumberError: "Field is Required"
            });
        }

        else if (value.Gender == "") {
            setError({
                ...error,
                GenderError: "Field is Required"
            });
        }

        else if (value.District == "") {
            setError({
                ...error,
                DistrictError: "Field is Required"
            });
        }

        else if (value.State == "") {
            setError({
                ...error,
                StateError: "Field is Required"
            });
        }

        else if (value.Course == "") {
            setError({
                ...error,
                CourseError: "Field is Required"
            });
        }

        else if (value.Address == "") {
            setError({
                ...error,
                AddressError: "Field is Required"
            });
        }

        else {
            setError({
                ...error,
                FirstGraduateError: "Field is Required"
            });
        }






    }

    return (
        <>  <div style={{backgroundImage:`url(${mec})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh'}}>
            <div className="anaconda">
                <h1>Admission form</h1>
                <form onSubmit={submit}>
                    <label>Name</label>
                    <input type="Name" placeholder="Name" name="Name" Name="Name" onChange={handle}></input> <br /><br />
                    {error.NameError}
                    <label>Date of Birth</label>
                    <input  type="date" id="dob" name="dob"></input> <br/> <br/>
                    {error.DOBError}
                    <label>Gender</label>
                    <input type="Gender" placeholder="Gender" name="Gender" Name="Gender" onChange={handle}></input>   <br /> <br />
                    {error.GenderError}
                    <label>Email</label>
                    <input type="Email" placeholder="Email" name="Email" Name="Email" onChange={handle}></input>  <br /> <br />
                    {error.EmailError}
                    <label>ParentNumber</label>
                    <input type="ParentNumber" placeholder="ParentNumber" name="ParentNumber" Name="ParentNumber" onChange={handle}></input>
                      <br /> <br />
                      {error.ParentNumberError}
                    <label>FirstGraduate</label>
                    <select name="grad" two Name="FirstGraduation" onChange={handle}>
                        <option value="y">Yes</option>
                        <option value="x">No</option>
                    </select> <br/> <br/>
                    {error.FirstGraduateError}
                    <label>Address</label>
                    <input type="Address" placeholder="Address" name="Address" Name="Address" onChange={handle}></input>  <br /> <br />
                    {error.AddressError}
                    <label>District</label>
                    <select name="District" Name="District" six onChange={handle}>
                        <option value="nkl">Namakkal</option>
                        <option value="sl">Salem</option>
                        <option value="tn">Madurai</option>
                        <option value="tn">Ooty</option>
                        <option value="tn">Coimbatore</option>
                        <option value="tn">Chennai</option>
                    </select> <br/> <br/>
                    {error.DistrictError}
                    <label>State</label>
                    <select name="states" six Name="State" onChange={handle}>
                        <option value="tn">Tamil Nadu</option>
                        <option value="ker">Kerala</option>
                        <option value="AP">Andhara Pradesh</option>
                        <option value="kt">Karnataka</option>
                        <option value="bob">Mumbai</option>
                    
                </select> <br/> <br/>
                <button style={{backgroundColor : "lightgreen"}}type="submit">Submit</button>
 </form>
             </div>
             </div>
          
        </>
    );
}
export default Admission