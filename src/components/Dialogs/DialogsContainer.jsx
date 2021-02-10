// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
// import s from './Dialogs.module.css';
import React, { StrictMode } from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {   
    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body)); 
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange} 
                    sendMessage={onSendMessageClick}
                    dialogsPage={StrictMode.getState().dialogsPage} />
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;