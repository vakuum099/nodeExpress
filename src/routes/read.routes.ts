import { Router } from 'express';
import { readFile } from '../controllers/read.controller.js';

export const router = Router();

router.get('/:fileName', readFile);
