import React from 'react';
import './Sidebar.css';

function Sidebar(){
    return (
        <div className="sidebar">
            <h1>TREX</h1>
            <span>Complete your Task</span>
            <div className="theme">
                <div className="light"></div>
                <div className="light"></div>
            </div>
            <div className="list">
                <div className="list_tasks tasksTodo">
                    <img src="https://img.icons8.com/dusk/64/000000/task-completed.png" alt=""/>
                    <h3>Tasks To Do</h3>
                </div>
                <div className="list_tasks expense">
                    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-expense-taxes-flatart-icons-flat-flatarticons.png"/>
                    <h3>Track Expense</h3>
                </div>
                <div className="list_tasks bucketList">
                    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-check-list-marketing-seo-flatart-icons-flat-flatarticons.png"/>
                    <h3>Bucket List</h3>
                </div>
            </div>
        </div>
    );
} 

export default Sidebar;