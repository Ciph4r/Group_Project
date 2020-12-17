module.exports = {
    createListingValidation : (listing,date,date2) => {
        let validation = ''
        let today = new Date()
        if(listing.model.length < 1) validation = validation.concat('Fill Out Model \n')
        if(listing.make.length < 1) validation = validation.concat('Fill Out Make \n')
        if(listing.year ==="----") validation = validation.concat('Fill Out Year \n')
        if(listing.door ==="----") validation = validation.concat('Fill Out Door \n')
        if(listing.vehicleClass ==="----") validation = validation.concat('Fill Out Vehicle Class \n')
        if(listing.color.length < 1) validation = validation.concat('Fill Out Color \n')
        if(listing.price <1) validation = validation.concat('Fill Out Price \n')
        if(date < today) validation = validation.concat('Start Date Must Be After Today \n')
        if(date2 < today) validation = validation.concat('End Date Must Be after Today \n')
        if(date2 <= date) validation = validation.concat('End Date Must Be After Start Date  \n')
        return validation
    },
    userVailidation:(user)=> {
        let validation = ''
        console.log(user)
        if(user.firstName.length < 1) validation = validation.concat('Fill First Name \n')
        if(user.lastName.length < 1) validation = validation.concat('Fill Last Name \n')
        if( !user.password||user.password.length < 6) validation = validation.concat('Input Your Current Password \n')
        if( user.retypeNewPassword ||  user.newPassword) {
            if(!user.newPassword) validation = validation.concat(`Input Your New Password \n`)
            if(!user.retypeNewPassword) validation = validation.concat(`Input Your Retype New Password \n`)
            if(user.retypeNewPassword !== user.newPassword) validation = validation.concat(`Input Your New Password Don't Match \n`)
        }
        if( user.retypeNewPassword &&  user.newPassword) {
            if(user.newPassword.length < 6 || user.retypeNewPassword.length < 6) validation = validation.concat(`Your New Password Length Must be 6 or Greater \n`)
        }
        // if(user.phone){
        //     let phoneNumber = user.phone.indexOf(' ')
        //     // for (let i = 0; i< user.phone.length ; i++){
        //     //     console.log(user.phone[i])
        //     //     if (user.phone[i] === ' '){
        //     //         phoneNumber += 1
        //     //     }
        //     // }
        //     console.log(phoneNumber)
        //     // if(phoneNumber.length < 14) validation = validation.concat(`Input a Correct Phone Number \n`)
        // }
        
        return validation
    }
}


