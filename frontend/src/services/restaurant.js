"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_common_1 = __importDefault(require("./../http-common"));
var RestaurantDataService = /** @class */ (function () {
    function RestaurantDataService() {
    }
    RestaurantDataService.prototype.getAll = function (page) {
        if (page === void 0) { page = 0; }
        return http_common_1.default.get("?page=" + page);
    };
    RestaurantDataService.prototype.get = function (id) {
        return http_common_1.default.get("?id=" + id);
    };
    RestaurantDataService.prototype.find = function (query, by, page) {
        if (by === void 0) { by = "name"; }
        if (page === void 0) { page = 0; }
        return http_common_1.default.get("?" + by + "=" + query + "&page=" + page);
    };
    RestaurantDataService.prototype.createReview = function (data) {
        return http_common_1.default.post("/review-new", data);
    };
    RestaurantDataService.prototype.updateReview = function (data) {
        return http_common_1.default.put("/review-edit", data);
    };
    RestaurantDataService.prototype.deleteReview = function (id, userId) {
        return http_common_1.default.delete("/review-delete?id=" + id, { data: { user_id: userId } });
    };
    RestaurantDataService.prototype.getCuisines = function (id) {
        if (id === void 0) { id = 0; }
        return http_common_1.default.get("/cuisines");
    };
    return RestaurantDataService;
}());
exports.default = new RestaurantDataService();
