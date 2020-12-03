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
}


