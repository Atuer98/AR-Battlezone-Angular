const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    nickname: {
        type: String,
        trim: true,
    },
    socketID: {
        type: String,
    },
    points: {
        type: Number,
        default: 0,
    },
    playerType: {
        required: true,
        type: String,   
    },
    code1: {
        type: String,
    },
    code2: {
        type: String,
    }
});

const roomSchema = new mongoose.Schema( {
    occupancy : {
        type: Number,
        default:2,
    },
    maxRound: {
        type:Number,
        default:10,
    },
    currenRound: {
        required: true,
        type: Number,
        default: 1,
    },
    players:[playerSchema],
    isJoin: {//to know who joined and limited to 2
        type: Boolean,
        default: true,
    },
    turn: playerSchema,
    turnIndex: { // to switch the turn between the players if it was a game was built on turns.
        type: Number,
        default: 0 
    }
});

const roomModel= mongoose.model('Room', roomSchema);
module.exports= roomModel;

module.exports =playerSchema;