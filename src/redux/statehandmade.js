import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'How are you?', likesCount: 11},
                {id: 4, message: 'Lets speak english pls', likesCount: 11}
            ],
            newPostText: 'way of react'
        },   
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Phil'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hey! Good job!'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Hey'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;