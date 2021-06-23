import { Request, Response } from 'express';
import { FileOperationResult } from '../interfaces.js';
import { changeDataInFile } from '../utils/utils.js';

export const updateFile = async (req: Request, res: Response) => {
  const resultOfFileChange: FileOperationResult = await changeDataInFile(req);
  res.status(resultOfFileChange.code).send(resultOfFileChange.content);
};
