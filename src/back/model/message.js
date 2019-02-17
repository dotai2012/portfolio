import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const messageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
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
});

const message = mongoose.model('Message', messageSchema);
export default message;
