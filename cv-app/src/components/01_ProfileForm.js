import React from "react";
import '../styles/01_ProfileForm.css';
import { sectionData } from '../data/sectionData.js';
import { InputField } from '../components/InputFields.js';

// const ProfileList = [{
//     id: 0,
//     placeholder: 'First Name'
// },{
//     id: 1,
//     placeholder: 'Last Name'
// },{
//     id: 2,
//     placeholder: 'Phone Number'
// },{
//     id: 3,
//     placeholder: 'Address'}
// ]

// function inputPlaceholders(sectionData) {
//     return sectionData.profile.map((item,index) => (
//      <input 
//         className='input' 
//         key={item.id} 
//         placeholder={item.placeholder}/>
//     ));
// }

function ProfileForm() {
    return (
        <>
            <form className="form">
                <div className="Profile">
                    <p>Please Add your Profile details</p>
                </div>
                
                {InputField(sectionData)}
                
                <div className="label-container">
                    <label htmlFor="profile-image" className="label-text">Profile Image</label>
                    <input id="profile-image" type="file"　className="profile-input"/>
                </div>
               
                
            </form>
        </>
    );
}

export default ProfileForm;