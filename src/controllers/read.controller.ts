import { Request, Response } from 'express';
import { FileOperationResult } from '../interfaces.js';
import { readDataFromFile } from '../utils/utils.js';

export const readFile = async (req: Request, res: Response) => {
  const resultOfFileRead: FileOperationResult = await readDataFromFile(req);
  res.status(resultOfFileRead.code).send(resultOfFileRead.content);
};
