import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  live: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  usedTool: {
    type: String,
    required: true,
  },
  usedSkill: {
    type: String,
    required: true,
  },
  wireframe: {
    type: Array,
    required: true,
  },
  sitemap: {
    type: Array,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    slug: 'title',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

projectSchema.post('save', (doc) => {
  const User = mongoose.model('User');
  User.findByIdAndUpdate(doc.user, { $push: { project: doc._id } }).exec();
});

projectSchema.post('remove', (doc) => {
  const User = mongoose.model('User');
  User.findByIdAndUpdate(doc.user, { $pull: { project: doc._id } }).exec();
});

const project = mongoose.model('Project', projectSchema);
export default project;
