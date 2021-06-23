import { Router } from 'express';
import { updateFile } from '../controllers/update.controller.js';

export const router = Router();

router.put('/:fileName', updateFile);
