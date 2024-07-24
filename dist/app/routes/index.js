"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("../modules/users/user.routes");
const academicSemister_routes_1 = require("../modules/academicSemister/academicSemister.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/user',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/academic-semister',
        route: academicSemister_routes_1.AcademicRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
// router.use('/user', UserRoutes);
// router.use('/academic-semister', AcademicRouter);
exports.default = router;
