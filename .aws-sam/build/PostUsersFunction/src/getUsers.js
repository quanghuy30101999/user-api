const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Requested-With',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
};

exports.handler = async () => {
  const data = await docClient.scan({ TableName: TABLE_NAME }).promise();
  return {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify(data.Items),
  };
};
