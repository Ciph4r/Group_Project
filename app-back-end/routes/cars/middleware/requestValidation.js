module.exports = {
    /////check if all fiend are filled
    validateCreate: (req,res,next) => {
        const {make,model,year,vehicleClass,door,color,price,description} = req.body
        if(!make||!model||!year||!vehicleClass||!door||!color||!price){
            return res.status(400).json({errors : 'All field must be filled'});
        };
        next() ;
    }
}