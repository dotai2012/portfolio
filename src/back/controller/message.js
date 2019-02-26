import returnQuery from '../service/query';
import Message from '../model/message';

const listMessage = (req, res) => {
  const query = Message.find({});
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const addMessage = (req, res) => {
  const {
    title, author, email, content,
  } = req.body;

  const newMessage = new Message({
    title,
    author,
    email,
    content,
  });

  newMessage.save((err, result) => {
    returnQuery(err, result, res);
  });
};

const viewMessage = (req, res) => {
  const {
    slug,
  } = req.params;
  const query = Message.findOne({ slug });
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

const deleteMessage = (req, res) => {
  const {
    slug,
  } = req.params;
  const query = Message.findOneAndDelete({ slug });
  query.exec((err, result) => {
    returnQuery(err, result, res);
  });
};

export {
  listMessage,
  addMessage,
  viewMessage,
  deleteMessage,
};
