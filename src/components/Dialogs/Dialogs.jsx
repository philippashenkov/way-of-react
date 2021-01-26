import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Phil'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Taras'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hey! Nice link!'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Whats up!'},
        {id: 5, message: 'Hi'},
        {id: 6, message: '...typing'}
    ]

    let dialogsElements =  dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = messages.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;