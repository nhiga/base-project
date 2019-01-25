import express from 'express';

import { HTTP_STATUS } from 'utils/server.config';
import testController from '../controllers/test-controller';
import pkg from '../../package.json';

const restRouter = express.Router();
restRouter
  .route('/test')
  .get(testController)
  .post(testController);
restRouter.all('*', (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).send({
    version: `${pkg.version}`,
    message: 'NOT FOUND'
  });
});

export default restRouter;
