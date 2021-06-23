import { Router } from 'express';
import { deleteFile } from '../controllers/delete.controller.js';

export const router = Router();

router.delete('/:fileName', deleteFile);
