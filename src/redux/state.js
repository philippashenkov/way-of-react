let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
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
        ]
    },

    sidebar: {}
}

export let addPost = (postMesage)

export default state;