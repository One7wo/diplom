const { model, Schema, ObjectId } = require("mongoose");

const Ticket = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  key: { type: Number, default: 0 },
  user: { type: ObjectId, ref: "User" },
  path: { type: String, default: "" },
});

module.exports = model("Ticket", Ticket);
