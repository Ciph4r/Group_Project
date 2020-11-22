const intstate = [
    {   id: 123456789,
        sender:'john',
        receiver:'dave',
        read:false,
        date:'11:45 PM',
        img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg',
        messages:[
            {
            name: 'john',
            message: 'Hi'
            },
            {
            name: 'dave',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ]

    },
    {   id: 987654321,
        sender:'john',
        receiver:'andy',
        read:true,
        date:'11:45 PM',
        img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg',
        messages:[
            {
            name: 'john',
            message: 'Hi'
            },
            {
            name: 'andy',
            message: 'Hi Back'
            }
        ]

    }
  ]
  
    export const inboxReducer = (state = intstate , action) => {
        if(action.type === 'changetoRead'){
            return state.map(item => {
                if (item.id === action.payload){
                    item.read = true
                }
                return item;
            })
          }
      return state
    }


    
  