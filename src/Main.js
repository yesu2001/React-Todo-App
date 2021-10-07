import React, {useState,useEffect} from 'react';
import {db} from './firebase';
import Task from './Task';
import firebase from 'firebase';
import './Main.css';

function Main(){
    const [tasks,setTasks] = useState([]);
    const [input,setInput] = useState('');

    useEffect(() => {
        db.collection('tasks').orderBy('time','desc').onSnapshot(snapshot => {
            setTasks(snapshot.docs.map(doc => ({id:doc.id, task: doc.data().task})))
        })
    },[])
    // function for adding the task
    const addTask = () => {
        db.collection('tasks').add({
            task: input,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        var bgColors=["#F05454",'#892CDC','#03C4A1','#E2703A'];
        document.getElementById('task').style.backgroundColor = bgColors[0];
        setInput('');

    }

    return (
        <div className="main">
            <div className="main_header">
                <h2>Tasks</h2>
                <div className="form">
                    <input className="form_input" type="type" value={input} onChange={(event)=>setInput(event.target.value)}/>
                    <button onClick={addTask}>Add</button>
                </div>
            </div> 
            <div className="tasks">
                {
                    tasks.map((task) => <Task task={task}/>)
                }
            </div>
        </div>
    );
} 

export default Main;