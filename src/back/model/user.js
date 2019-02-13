import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  project: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  }],
});

userSchema.virtual('projectCount').get(function () {
  return this.project.length;
});

userSchema.post('remove', (doc) => {
  const Project = mongoose.model('Project');
  Project.deleteMany({ _id: { $in: doc.project } }).exec();
});

const user = mongoose.model('User', userSchema);
export default user;
