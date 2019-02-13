let result;

if (process.env.NODE_ENV === 'production') {
  result = require('./prod');
} else {
  result = require('./dev');
}

export default result.default;
