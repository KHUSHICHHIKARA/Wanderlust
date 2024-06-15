const mongoose=require("mongoose");
const initdata=require("../init/data.js");
const listing=require("../models/listing.js");

const mongo_url='mongodb://127.0.0.1:27017/WANDERLUST';
main()
.then(()=>{
    console.log("connected to db");
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongo_url);}

const initDB = async () =>{
    await listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"6659d1b8def8bc0e3c5bd780"}));
    await listing.insertMany(initdata.data);
    console.log("data was initialised");
};

initDB();