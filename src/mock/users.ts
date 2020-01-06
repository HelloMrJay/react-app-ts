import express from 'express';
import errorCode from '../config/errorCode';

export const login = (request: express.Request, response: express.Response) => {
  let { body } = request;
  if (body.username !== 'loupengju') {
    response.send({ status: 201, message: errorCode[201] });
  }

  response.send({ status: 200 });
};
