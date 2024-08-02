import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  }
 
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
// router.use('/user', UserRoutes);
// router.use('/academic-semister', AcademicRouter);

export default router;
