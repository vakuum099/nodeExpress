import { Router } from 'express';
import { Request, Response } from 'express';
import { router as CreateRoutes } from './create.routes.js';
import { router as UpdateRouter } from './update.routes.js';
import { router as ReadRoutes } from './read.routes.js';
import { router as DeleteRoutes } from './delete.routes.js';

export const router: Router = Router();

router.use('/create', CreateRoutes);
router.use('/read', ReadRoutes);
router.use('/update', UpdateRouter);
router.use('/delete', DeleteRoutes);

router.all('*', (req: Request, res: Response) => {
  res.status(400).send('Error 400. Bad request.');
});
