const returnQuery = (err, result, res) => {
  if (err) {
    res.status(400).json({ success: false, msg: 'Something wrong', debug: err });
  } else {
    res.json({ success: true, msg: result });
  }
};
export default returnQuery;
