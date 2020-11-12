const intstate = {
    num:['1','2','3','4'],
  }

  export const tempReducer = (state = intstate , action) => {
    if(action.type === 'add'){
      return [...state , action.num]
    }
    return state
  }
