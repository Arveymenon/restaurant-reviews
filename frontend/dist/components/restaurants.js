var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";
var Restaurant = function (props) {
    var _a = useState(), restaurant = _a[0], setRestaurant = _a[1];
    var getRestaurant = function (id) {
        RestaurantDataService.get(id)
            .then(function (response) {
            setRestaurant(response.data);
            console.log(response.data);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    useEffect(function () {
        getRestaurant(props.match.params.id);
    }, [props.match.params.id]);
    var deleteReview = function (reviewId, index) {
        RestaurantDataService.deleteReview(reviewId, props.user.id)
            .then(function (response) {
            setRestaurant(function (prevState) {
                prevState.reviews.splice(index, 1);
                return (__assign({}, prevState));
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    return (_jsx("div", { children: restaurant ? (_jsxs("div", { children: [_jsx("h5", { children: restaurant.name }, void 0), _jsxs("p", { children: [_jsx("strong", { children: "Cuisine: " }, void 0), restaurant.cuisine, _jsx("br", {}, void 0)] }, void 0), _jsx(Link, __assign({ to: "/restaurants/" + props.match.params.id + "/review", className: "btn btn-primary" }, { children: "Add Review" }), void 0), _jsx("h4", { children: " Reviews " }, void 0), _jsx("div", __assign({ className: "row" }, { children: restaurant.reviews && restaurant.reviews.length > 0 ? (restaurant.reviews.map(function (review, index) {
                        return (_jsx("div", __assign({ className: "col-lg-4 pb-1" }, { children: _jsx("div", __assign({ className: "card" }, { children: _jsxs("div", __assign({ className: "card-body" }, { children: [_jsxs("p", __assign({ className: "card-text" }, { children: [review.text, _jsx("br", {}, void 0), _jsx("strong", { children: "User: " }, void 0), review.name, _jsx("br", {}, void 0), _jsx("strong", { children: "Date: " }, void 0), review.date] }), void 0), props.user && props.user.id === review.user_id &&
                                            _jsxs("div", __assign({ className: "row" }, { children: [_jsx("a", __assign({ onClick: function () { return deleteReview(review._id, index); }, className: "btn btn-primary col-lg-5 mx-1 mb-1" }, { children: "Delete" }), void 0), _jsx(Link, __assign({ to: {
                                                            pathname: "/restaurants/" + props.match.params.id + "/review",
                                                            state: {
                                                                currentReview: review
                                                            }
                                                        }, className: "btn btn-primary col-lg-5 mx-1 mb-1" }, { children: "Edit" }), void 0)] }), void 0)] }), void 0) }), void 0) }), index));
                    })) : (_jsx("div", __assign({ className: "col-sm-4" }, { children: _jsx("p", { children: "No reviews yet." }, void 0) }), void 0)) }), void 0)] }, void 0)) : (_jsxs("div", { children: [_jsx("br", {}, void 0), _jsx("p", { children: "No restaurant selected." }, void 0)] }, void 0)) }, void 0));
};
export default Restaurant;
