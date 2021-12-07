import http from "./../http-common";
var RestaurantDataService = /** @class */ (function () {
    function RestaurantDataService() {
    }
    RestaurantDataService.prototype.getAll = function (page) {
        if (page === void 0) { page = 0; }
        return http.get("?page=" + page);
    };
    RestaurantDataService.prototype.get = function (id) {
        return http.get("?id=" + id);
    };
    RestaurantDataService.prototype.find = function (query, by, page) {
        if (by === void 0) { by = "name"; }
        if (page === void 0) { page = 0; }
        return http.get("?" + by + "=" + query + "&page=" + page);
    };
    RestaurantDataService.prototype.createReview = function (data) {
        return http.post("/review-new", data);
    };
    RestaurantDataService.prototype.updateReview = function (data) {
        return http.put("/review-edit", data);
    };
    RestaurantDataService.prototype.deleteReview = function (id, userId) {
        return http.delete("/review-delete?id=" + id, { data: { user_id: userId } });
    };
    RestaurantDataService.prototype.getCuisines = function (id) {
        if (id === void 0) { id = 0; }
        return http.get("/cuisines");
    };
    return RestaurantDataService;
}());
export default new RestaurantDataService();
