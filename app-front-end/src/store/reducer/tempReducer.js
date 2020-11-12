const intstate = {
    num:['1','2','3','4'],
    sting: 'ddd'
  }

  export const tempReducer = (state = intstate , action) => {
    if(action.type === 'add'){
      return [...state , action.num]
    }
    return state
  }
