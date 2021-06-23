//import express from 'express';
import { Request } from 'express-serve-static-core';
import * as fs from 'fs';
import {
  errorFile500,
  errorNotFound404,
  successFile200OK,
  successFileChange205,
} from '../constants.js';
import { FileOperationResult } from '../interfaces.js';

export const appendDataToFile = async (req: Request) => {
  const fileName: string = req.params.fileName;
  try {
    await fs.promises.appendFile(`./testData/${fileName}`, req.body.text);
    return successFileChange205;
  } catch (err) {
    return errorFile500;
  }
};

export const readDataFromFile = async (request: Request): Promise<FileOperationResult> => {
  const fileName: string = request.params.fileName;
  if (!fs.existsSync(`./testData/${fileName}`)) {
    return errorNotFound404;
  }
  try {
    const data = await fs.promises.readFile(`./testData/${fileName}`);
    const result = { ...successFile200OK };
    result.content = String(data);
    return result;
  } catch (err) {
    return errorFile500;
  }
};

export const changeDataInFile = async (req: Request) => {
  const fileName: string = req.params.fileName;
  if (!fs.existsSync(`./testData/${fileName}`)) {
    return errorNotFound404;
  }
  try {
    await fs.promises.writeFile(`./testData/${fileName}`, req.body.text);
    return successFileChange205;
  } catch (err) {
    return errorFile500;
  }
};

export const deleteWholeFile = async (req: Request) => {
  const fileName: string = req.params.fileName;
  if (!fs.existsSync(`./testData/${fileName}`)) {
    return errorNotFound404;
  }
  try {
    await fs.promises.rm(`./testData/${fileName}`);
    return successFile200OK;
  } catch (err) {
    return errorFile500;
  }
};
