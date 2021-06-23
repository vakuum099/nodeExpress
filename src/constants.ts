import { FileOperationResult } from './interfaces.js';

export const errorNotFound404: FileOperationResult = {
  code: 404,
  content: 'Error 404. Not found.',
};

export const errorFile500: FileOperationResult = {
  code: 400,
  content: 'Error 500.',
};

export const successFile200OK: FileOperationResult = {
  code: 200,
  content: 'OK',
};

export const successFileChange205: FileOperationResult = {
  code: 205,
  content: 'Reset Content',
};
