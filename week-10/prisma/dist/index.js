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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });
        console.log(response);
    });
}
;
;
function updateUser(username, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.update({
            where: { username },
            data: {
                firstName: params.firstname,
                lastName: params.lastname,
            }
        });
        console.log(response);
    });
}
// insertUser("vhbarve", "mypassword2", "Ved", "Barve");
// insertUser("nasa", "assume", "Nats", "Sawant");
updateUser("nasa", { firstname: "Nathan", lastname: "Sawant" });
