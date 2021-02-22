const AWS = require('aws-sdk')
const sesClient = new AWS.SES()
const sesConfirmedAddress = 'hello@callumhyland.com'

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2))
  var params = getEmailMessage(event)
  var sendEmailPromise = sesClient.sendEmail(params).promise()

  var response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  sendEmailPromise
    .then(function (result) {
      console.log(result)
      callback(null, response)
    })
    .catch(function (err) {
      console.log(err)
      response.statusCode = 500
      callback(null, response)
    })
}

function getEmailMessage(event) {
  const { name, email, message } = event
  var emailRequestParams = {
    Destination: {
      ToAddresses: [sesConfirmedAddress]
    },
    Message: {
      Body: {
        Text: {
          Data: message
        }
      },
      Subject: {
        Data: name
      }
    },
    Source: sesConfirmedAddress,
    ReplyToAddresses: [email]
  }

  return emailRequestParams
}

// Load the AWS SDK for Node.js
// var aws = require('aws-sdk');
// var ses = new aws.SES({region: 'eu-west-2'});

// exports.handler = (event, context, callback) => {

//     var {name, email, message} = event

//      var params = {
//         Destination: {
//             ToAddresses: ["hello@callumhyland.com"]
//         },
//         Message: {
//             Body: {
//                 Text: { Data: `${name} - ${email}
//                 Message: ${message}`
//                 }
//             },

//             Subject: { Data: `Ever Optimal Lead`}
//         },
//         Source: "hello@callumhyland.com"
//     };

//      ses.sendEmail(params, function (err, data) {
//         callback(null, {err: err, data: data});
//         if (err) {
//             console.log(err);
//             context.fail(err);
//         } else {
//             console.log(data);
//             context.succeed(event);
//         }
//     });
// };
