"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./dist/app/app"));
const index_1 = __importDefault(require("./dist/app/config/index"));
const logger_1 = require("./dist/shared/logger");
let server;
function DbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(index_1.default.database_url);
            logger_1.logger.info(`Database connected...`);
            server = app_1.default.listen(index_1.default.port, () => {
                logger_1.logger.info(`Application listening on port ${index_1.default.port}`);
            });
        }
        catch (error) {
            logger_1.errorlogger.error(`Database connection error: ${error}`);
        }
        process.on('unhandledRejection', error => {
            console.log('Unhandled Rejection detected , we are closing our server...');
            logger_1.errorlogger.error(error);
            if (server) {
                server.close(() => {
                    logger_1.errorlogger.error(error);
                });
            }
            process.exit(1);
        });
    });
}
DbConnect();
process.on('uncaughtException', err => {
    console.log('uncaughtException Exception is detected ');
    logger_1.errorlogger.error(err);
    process.exit(1);
});
process.on('SIGTERM', () => {
    logger_1.errorlogger.info('SIGTERM is received');
    if (server) {
        server.close();
    }
});
