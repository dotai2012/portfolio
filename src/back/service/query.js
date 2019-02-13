const returnQuery = (err, result, res) => {
  if (err) {
    res.json({ success: false, msg: 'Something wrong', debug: err });
  } else {
    res.json({ success: true, msg: result });
  }
};
export default returnQuery;
