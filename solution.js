/**
 * @param context {WebtaskContext}
 */

const axios = require('axios');

/**
 * @param context {WebtaskContext}
 */
module.exports = async function(context, cb) {
  const text = context.query.text;

  if (!text) {
    return cb(new Error('Required parameter text'));
  }

  const opts = {
    method: 'post',
    url: context.secrets.slackUrl,
    data: { text }
  };

  try {
    await axios(opts);
    cb(null);
  } catch (e) {
    cb(e);
  }
};
