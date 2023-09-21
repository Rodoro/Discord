const { Schema, model } = require('mongoose');
const moderatorsSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    discordName: { type: String, required: true },
    rang: [{ type: String }],
    why: { type: String },
    pred: [{
      userId: { type: String },
      userName: { type: String },
      description: { type: String },
      timestamp: { type: Date, default: Date.now }
    }],
    warn: [{
      userId: { type: String },
      userName: { type: String },
      rule: { type: String },
      description: { type: String },
      timestamp: { type: Date, default: Date.now }
    }]
  });
module.exports = model("Moderators", moderatorsSchemas, "Moderators");