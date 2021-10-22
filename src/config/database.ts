import AWS = require("aws-sdk");

/**
 * DB Client
 * @desc Used to get DB client
 * @return {Object} DB client
 * @author [Sourabh Sarwan]
 */
export const getDbClient = () => {
    return new AWS.DynamoDB.DocumentClient();
}