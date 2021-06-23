import { Router } from 'express';
import { createFile } from '../controllers/create.controller.js';

export const router = Router();

router.post('/:fileName', createFile);
