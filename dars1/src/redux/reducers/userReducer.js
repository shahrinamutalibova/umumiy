
const initialState = {
    users: [
        {
            id: 1,
            title: 'User title 1',
            body: 'User body 1'
        },
        {
            id: 2,
            title: 'User title 2',
            body: 'User body 2'
        },
    ],
    data: ""
}


function userReducer(state = initialState, action) {
    switch (action.type) {
        case "addPost" :
            let user = {
                id: state.users.length + 1,
                title: action.payload.title,
                body: action.payload.body
            }
            state.users.push(user)
            state = {...state, users: state.users}
            break
        case "deletePost" :
            state.users.map((item,index)=>{
                if (item.id === action.payload){
                    state.users.splice(index,1)
                }
            })
            state={...state,users: state.users}
            break
        case "editData" : state = {...state, data: action.payload}
            break
        case "editItem" :
            const updatePost = state.users.map((item)=>{
                const data = state.data
                if (item.id === data.id){
                    item = {
                        ...item,
                        title: action.payload.title,
                        body:action.payload.body
                    }
                }
                return item
            })
            state = {...state, users: updatePost }
            break
    }
    return state
}

export default userReducer