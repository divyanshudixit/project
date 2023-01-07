// // const mongoose=require('mongoose');
// // const Schema=mongoose.Schema;



// // const userSchema=new Schema({
// //     phone:{type:String,required:true},
// //     activated:{type:Boolean,required:false,default:false}
// // },
// // {
// //     timestamps:true
// // });

// // module.exports=mongoose.model('User',userSchema,'users');


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const refreshSchema = new Schema(
//     {
//         token: { type: String, required: true },
//         userId:{type:Schema.Types.ObjectId,ref:'User'},
       
//     },
//     {
//         timestamps: true,
//     }
// );

// module.exports = mongoose.model('Refresh', refreshSchema, 'tokens');



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refreshSchema = new Schema(
    {
        token: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Refresh', refreshSchema, 'tokens');