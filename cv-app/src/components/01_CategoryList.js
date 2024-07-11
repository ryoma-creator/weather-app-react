import React from "react";
import '../styles/01_CategoryList.css'
import { categoriesData } from '../data/sectionData.js';



const CategoryList = () => {
    return (
        <ul className="category-list">
            {categoriesData.map((item, index) => (
                <CategoryItem key={index} item={item} />
            ))}
        </ul>
    );
};

const CategoryItem = ({ item }) => {
    const { id, title } = item;
    const words = title.split(' ');
    // words = ["Profile", "Section"] ⇦ example

    return (
        <li className="category-item">
            <span className="category-number">{id}</span>
            <span className="category-title">
                {words.map((word, index) => (
                    <div key={index} className="category-word">
                        {word}
                    </div>
                    
/* <span className="category-title">
        <div key={0} className="category-word">Profile</div>
        <div key={1} className="category-word">Section</div>
   </span> */

                ))}
            </span>
        </li>
    );
};


export default CategoryList;