import express from "express";

export const getUser = (request: express.Request, response: express.Response) => {
  response.send({ name: 'loupengju', agr: 500 })
}
