var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
  name: String,
  thumb: String,
  photos: [{type: mongoose.Schema.Types.ObjectId, ref:'Photo'}],
  upvotes: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
});

AlbumSchema.methods.upvote = function(cb){
  this.upvotes++;
  this.save(cb);
};

mongoose.model('Album', AlbumSchema);
