import React from "react";
import '../styles/01_CategoryList.css'

const categorysData = [
    {id: 1, title: 'Profile Section'},
    {id: 2, title: 'Education Section'},
    {id: 3, title: 'Skills Sector'},
    {id: 4, title: 'Mini Project'},
    {id: 5, title: 'Social'},
];

const CategoryList = () => {
    return (
        <ul className="category-list">
            {categorysData.map((item, index) => (
                <CategoryItem key={index} item={item} />
            ))}
        </ul>
    );
};

const CategoryItem = ({ item }) => {
    const { id, title } = item;
    const words = title.split(' ');

    return (
        <li className="category-item">
            <span className="category-number">{id}</span>
            <span className="category-title">
                {words.map((word, index) => (
                    <div key={index} className="category-word">
                        {word}
                    </div>
                ))}
            </span>
        </li>
    );
};

export default CategoryList;