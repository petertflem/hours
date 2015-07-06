var Schema = require('mongoose').Schema;

var activitySchema = new Schema({
  title: String,
  description: String,
  start: Date,
  end: Date
});

activitySchema.methods.duration = function () {
  return this.end - this.start;
};

module.exports = mongoose.model('Activity', activitySchema);
