import mongoose from 'mongoose'
const videoschema = new mongoose.Schema({
    videofile: {
        type: String,
        required: true,

    },
    thumbnail: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    during: {
        type: Number,
        required: true,
    },
    view: {
        type: Number,

    },
    ispublish: {
        type: Number
    }
},
{
    timeseries:true
})
export const video= mongoose.model("video",videoschema);