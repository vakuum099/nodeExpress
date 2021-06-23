import { Request, Response } from 'express';
import { FileOperationResult } from '../interfaces.js';
import { deleteWholeFile } from '../utils/utils.js';

export const deleteFile = async (req: Request, res: Response) => {
  const resultOfFileDelete: FileOperationResult = await deleteWholeFile(req);
  res.status(resultOfFileDelete.code).send(resultOfFileDelete.content);
};
