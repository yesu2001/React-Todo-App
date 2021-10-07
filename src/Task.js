import React from 'react';
import {db} from './firebase.js';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Task.css';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    paper: {
        borderRadius: 20,
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3, 5, 3),
    },
}));

function Task({task}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [editInput, setEditInput] = React.useState('');

    const editTask = () => {
        db.collection('tasks').doc(task.id).set({
            task: editInput
        },{merge: true});
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div id="task" className="task">
            <Modal open={open} onClose={handleClose} >
                <div style={modalStyle} className={classes.paper}>
                    <input type="text" className="modal_input" value={editInput} onChange={(event)=>setEditInput(event.target.value)}/>
                    <button className="modal_btn" onClick={editTask}>Update</button>
                </div>
            </Modal>
            <div className="text">
                <p>{task.task}</p>
            </div>
            <div className="task_detail">
                <button onClick={handleOpen}>✏️</button>
                <button onClick={event => db.collection('tasks').doc(task.id).delete()}>🗑️</button>
            </div>
        </div>
    )
}

export default Task;