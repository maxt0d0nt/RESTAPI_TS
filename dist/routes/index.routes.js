"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_controllers_1 = require("../controllers/index.controllers");
router.route('/')
    .get(index_controllers_1.indexWelcome);
exports.default = router;
