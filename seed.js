const mongoose = require('mongoose');
const Cars = require('./app-back-end/routes/cars/models/Car')

mongoose
.connect(process.env.MONGODB_URI , {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => {console.log('mongodb connected')})
.catch(()=> {console.log('server err')});






const cars = [
    {   
        owner: 'no id yet'
        image: [
            'https://bringatrailer.com/wp-content/uploads/2018/11/2005_honda_s2000_15426078148495d565ef63-e1545065186809.jpg?fit=940%2C706',
            'https://thenewswheel.com/wp-content/themes/patterns/timthumb.php?src=https://thenewswheel.com/wp-content/uploads/2020/02/Red-Honda-S2000.jpg&q=90&w=660&zc=1',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03ebfaf0-bee4-4cbd-a056-0a88d213411d/d1w3l6v-feb35c21-2812-4015-adf0-6054afff2a8e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDNlYmZhZjAtYmVlNC00Y2JkLWEwNTYtMGE4OGQyMTM0MTFkXC9kMXczbDZ2LWZlYjM1YzIxLTI4MTItNDAxNS1hZGYwLTYwNTRhZmZmMmE4ZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.m8S9zoEQv-OFNhAm6H6JokfwPOAU-MJ2XZrc1pSo9NY',
            'https://www.autotribute.com/wp-content/uploads/2017/11/Red-Honda-S2000-Sports-Car.jpg',
        ]
        make: 'Honda',
        model: 'S2000',
        year: 2005,
        color: 'red',
        vehicleClass: 'Sport',
        door: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 200,
        active: true,
    }
]



const seed = (data) => {
    data.map((data) => {
        const {make,model,year,vehicleClass,door,color,price,description} = data
        const car = new Cars({
            owner:'no owner yet',
            make,
            model,
            year,
            vehicleClass,
            door,
            color,
            price,
            description
        })

        stock.save()
    })
}
seed(cars)