const AWS = require('aws-sdk')
const sesClient = new AWS.SES()
const sesConfirmedAddress = 'hello@callumhyland.com'

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2))

  var response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }
  }

  if (event.requestContext) {
    if (event.requestContext.http.method === 'OPTIONS') callback(null, response)
    if (event.requestContext.http.method === 'POST' && event.body) {
      const { name, email, message } = JSON.parse(event.body)

      var params = {
        Destination: {
          ToAddresses: [sesConfirmedAddress]
        },
        Message: {
          Body: {
            Text: {
              Data: `[${name}, ${email}] - ${message}`
            }
          },
          Subject: { Data: `Ever Optimal Lead` }
        },
        Source: sesConfirmedAddress,
        ReplyToAddresses: [email]
      }

      var sendEmailPromise = sesClient.sendEmail(params).promise()

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
  }
}
