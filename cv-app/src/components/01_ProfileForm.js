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
     <input key={item.id} placeholder={item.placeholder}/>
    ));
}
function ProfileForm() {
    return (
        <>
            <form>
                <div className="Profile">
                    <h2>Profile Information</h2>
                    <p>Please Add your Profile details</p>
                </div>
                {inputPlaceholders(ProfileList)}
                
                
                Profile Image
                <input type="file" />
               
                
            </form>
        </>
    );
}

export default ProfileForm;