import React from "react";
import '../styles/01_ProfileForm.css';

const ProfileList = [{
    id: 0,
    placeholder: 'First Name'
},{
    id: 1,
    placeholder: 'Last Name'
},{
    id: 2,
    placeholder: 'Phone Number'
},{
    id: 3,
    placeholder: 'Address'}
]

function inputPlaceholders(ProfileList) {
    return ProfileList.map((item,index) => (
     <input className='input' key={item.id} placeholder={item.placeholder}/>
    ));
}
function ProfileForm() {
    return (
        <>
            <form className="form">
                <div className="Profile">
                    <p>Please Add your Profile details</p>
                </div>
                {inputPlaceholders(ProfileList)}
                
                <label htmlFor="profileImage">Profile Image
                    <input id="profileImage" type="file"/>
                </label>
               
                
            </form>
        </>
    );
}

export default ProfileForm;