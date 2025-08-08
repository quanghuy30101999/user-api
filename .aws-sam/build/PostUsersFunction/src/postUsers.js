const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const docClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const { name } = JSON.parse(event.body);
  const id = uuidv4();

  const newUser = { id, name };
  await docClient.put({ TableName: TABLE_NAME, Item: newUser }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(newUser),
  };
};
