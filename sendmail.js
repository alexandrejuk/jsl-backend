var API_KEY = '8304c909b7e0bac67dd1c01999bcc05b-52cbfb43-2cc19598';
var DOMAIN = 'sandbox7c0bd9162871424ab5ababe059cc7836.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

const data = {
  from: 'JSL <suporte@sandbox7c0bd9162871424ab5ababe059cc7836.mailgun.org>',
  to: 'ale_santos.soares@hotmail.com, suporte@multsystem.me',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});