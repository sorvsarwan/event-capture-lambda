import { v4 as uuidv4 } from "uuid";
import { getDbClient } from "../config/database";

interface TableInfo {
  TableName: any;
  Item: any;
}

/**
 * Create Event
 * @desc This function is used to push the new event into the DB.
 * @param {Object} EventDetails
 * @return ID of newely inserted record.
 * @author [Sourabh Sarwan]
 */

export const createEvent = async ({ uuid, eventType, eventSource }) => {
  
  const dbClient = getDbClient();
  const id = uuidv4();
  const eventInfo: TableInfo = {
    TableName: process.env.EVENT_TABLE,
    Item: { id, uuid, eventType, eventSource },
  };
  try {
    await dbClient.put(eventInfo).promise();
    return id;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
