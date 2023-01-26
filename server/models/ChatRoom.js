const mongoose = require("mongoose");

const callDetailSchema = new mongoose.Schema({
  callType: String,
  callDuration: String,
  callPicked: Boolean,
});

const MessageSchema = new mongoose.Schema({
  messageType: {
    type: String,
    required: true,
  },
  sender: mongoose.Schema.Types.ObjectId,
  chatRoom: mongoose.Schema.Types.ObjectId,
  readStatus: false,
  received: false,
  timeSent: {
    type: Date,
    default: Date.now(),
  },
  // If text message was sent
  message: String,
  // If image was sent
  imageUrl: String,
  // If call was made
  callDetails: callDetailSchema,
  // If voice note was sent
  voiceNoteURL: String,
});

const Schema = new mongoose.Schema({
  roomType: {
    type: String,
    enum: ["Private", "Group"],
  },
  members: [mongoose.Schema.Types.ObjectId],
  messageHistory: [MessageSchema],
});

module.exports = mongoose.model("ChatRoom", Schema);