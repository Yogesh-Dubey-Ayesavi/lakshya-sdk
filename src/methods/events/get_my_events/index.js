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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_model_1 = require("../../../models/event_model");
var event_users_table_1 = require("../../../tables/event_users_table");
var error_handler_1 = require("../../../error_handler/error_handler");
/**
 * Get events associated with a specific user.
 *
 * @param userId - The user's ID for whom you want to retrieve events.
 * @returns A Promise that resolves to an array of LakshyaEvent objects.
 * @throws Error if there is an issue with the database query.
 */
function getMyEvents(userId, supabase) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, data, error, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, supabase
                            .from(event_users_table_1.default.tableName)
                            .select("*,event:event_id(*,coordinator:coordinator_id(*),co_coordinator:co_coordinator_id(*),rsvp_handler:rsvp_handler_id(*))")
                            .eq(event_users_table_1.default.userId, userId)];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        console.log(error);
                        throw new Error("Supabase query error: ".concat(error.message));
                    }
                    if (!data) {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/, data.map(function (element) {
                            return event_model_1.default.fromJSON(element.event);
                        })];
                case 2:
                    error_1 = _b.sent();
                    throw (0, error_handler_1.errorHandler)(error_1);
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = getMyEvents;
