"use strict";

import { RequestVariables } from "./types";
import { createEvent } from "../../services/analytics";

/**
 * Analytics Event
 * @desc This lambda handler is used to capture new event.
 * @param {Object} event
 * @return {Object} Response {id, status}
 * @author [Sourabh Sarwan]
 */

export const analyticsEvent = async (event) => {
  const { uuid, eventType, eventSource }: RequestVariables = event?.body;
  const id = await createEvent({ uuid, eventType, eventSource });
  return {
    id,
    status: Boolean(id),
  };
};
