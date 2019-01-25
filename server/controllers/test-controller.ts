import express from 'express';

import { HTTP_STATUS } from 'utils/server.config';
import pkg from '../../package.json';

const testController = (req: express.Request, res: express.Response) => {
  let responseStatus: number;
  switch (req.method) {
    case 'GET':
      responseStatus = HTTP_STATUS.OK;
      break;
    case 'POST':
      responseStatus = HTTP_STATUS.CREATED;
      break;
    default:
      responseStatus = HTTP_STATUS.NOT_IMPLEMENTED;
  }
  res.status(responseStatus).send({
    version: `${pkg.version}`,
    message: 'OK'
  });
};

export default testController;
