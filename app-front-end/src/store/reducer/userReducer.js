const initialstate = {
    firstName: 'Dave',
    lastName: 'doe',
    email:'davedoe@gmail.com',
    password:123456
  }

  export const userReducer = (state = initialstate , action) => {
    if(action.type === 'add'){
      return [...state , action.num]
    }
    return state
  }
