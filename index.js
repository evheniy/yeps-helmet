const debug = require('debug')('yeps:helmet');
const wrapper = require('yeps-express-wrapper');
const helmet = require('helmet');

module.exports = (options = {}) => async (context) => {
  debug('Options: %O', options);

  return wrapper(helmet(options))(context);
};
