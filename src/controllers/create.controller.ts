import { Request, Response } from 'express';
import { FileOperationResult } from '../interfaces.js';
import { appendDataToFile } from '../utils/utils.js';

export const createFile = async (req: Request, res: Response) => {
  const resultOfFileAppend: FileOperationResult = await appendDataToFile(req);
  res.status(resultOfFileAppend.code).send(resultOfFileAppend.content);
};
