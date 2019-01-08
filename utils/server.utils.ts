import compression from 'compression';
import express from 'express';

/* eslint-disable import/prefer-default-export */
export const shouldCompress = (req: express.Request, res: express.Response) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
};
