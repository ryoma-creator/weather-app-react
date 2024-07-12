import React from "react";
import '../styles/01_ProfileForm.css';
// import { sectionData } from '../data/sectionData.js';
import { InputField } from '../components/InputFields.js';


function ProfileForm({ sectionDataKey }) {
        // sectionDataKey が存在しない場合のエラーハンドリング
        if (!sectionDataKey) {
            return <div>No data available for this section.</div>;
        }
    return (
        <>
            <form className="form">
                <div className="Profile">
                    {/* <p>{sectionData.profile.title}</p> */}
                    <p>{sectionDataKey.title}</p> 
                </div>
                
                <InputField keyFields={sectionDataKey.fields}/>
                
                {/* <div className="label-container">
                    <label htmlFor="profile-image" className="label-text">Profile Image</label>
                    <input id="profile-image" type="file"　className="profile-input"/>
                </div> */}
               
                
            </form>
        </>
    );
}

export default ProfileForm;