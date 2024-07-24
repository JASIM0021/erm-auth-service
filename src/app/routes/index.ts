import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.routes';
import { AcademicRouter } from '../modules/academicSemister/academicSemister.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/academic-semister',
    route: AcademicRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
// router.use('/user', UserRoutes);
// router.use('/academic-semister', AcademicRouter);

export default router;
