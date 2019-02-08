import express from 'express';

import { HTTP_STATUS } from 'utils/server.config';
import pkg from '../../package.json';

interface ResponseData {
  firstName?: string;
  lastName?: string;
  roleId?: number;
  ot?: string;
}

const authController = (req: express.Request, res: express.Response) => {
  const responseBody = {
    version: `${pkg.version}`
  };
  let responseStatus: number;
  let responseStatusMessage: string;
  const responseData: ResponseData = {};

  switch (req.method) {
    case 'GET':
      responseStatus = HTTP_STATUS.NOT_IMPLEMENTED;
      responseStatusMessage = 'This method is not implemented';
      break;
    case 'POST':
      responseStatus = HTTP_STATUS.CREATED;
      responseStatusMessage = 'Login successful';
      responseData.firstName = 'AUTHENTICATED_FIRST_NAME';
      responseData.lastName = 'AUTHENTICATED_LAST_NAME';
      responseData.roleId = 1;
      responseData.ot = 'AUTHENTICATED_TOKEN';
      break;
    default:
      responseStatus = HTTP_STATUS.NOT_IMPLEMENTED;
      responseStatusMessage = 'This method is not implemented';
  }
  Object.assign(responseBody, responseData);
  res.status(responseStatus).send(responseBody);
};

export default authController;
