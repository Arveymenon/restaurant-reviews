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
var RestaurantsList = function (props) {
    var _a = useState([]), restaurants = _a[0], setRestaurants = _a[1];
    var _b = useState(""), searchName = _b[0], setSearchName = _b[1];
    var _c = useState(""), searchZip = _c[0], setSearchZip = _c[1];
    var _d = useState(""), searchCuisine = _d[0], setSearchCuisine = _d[1];
    var _e = useState(["All Cuisines"]), cuisines = _e[0], setCuisines = _e[1];
    useEffect(function () {
        retrieveRestaurants();
        retrieveCuisines();
    }, []);
    var onChangeSearchName = function (e) {
        var searchName = e.target.value;
        setSearchName(searchName);
    };
    var onChangeSearchZip = function (e) {
        var searchZip = e.target.value;
        setSearchZip(searchZip);
    };
    var onChangeSearchCuisine = function (e) {
        var searchCuisine = e.target.value;
        setSearchCuisine(searchCuisine);
    };
    var retrieveRestaurants = function () {
        RestaurantDataService.getAll()
            .then(function (response) {
            console.log(response.data);
            setRestaurants(response.data.restaurants);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    var retrieveCuisines = function () {
        RestaurantDataService.getCuisines()
            .then(function (response) {
            console.log(response.data);
            setCuisines(["All Cuisines"].concat(response.data));
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    var refreshList = function () {
        retrieveRestaurants();
    };
    var find = function (query, by) {
        RestaurantDataService.find(query, by)
            .then(function (response) {
            console.log(response.data);
            setRestaurants(response.data.restaurants);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    var findByName = function () {
        find(searchName, "name");
    };
    var findByZip = function () {
        find(searchZip, "zipcode");
    };
    var findByCuisine = function () {
        if (searchCuisine == "All Cuisines") {
            refreshList();
        }
        else {
            find(searchCuisine, "cuisine");
        }
    };
    return (_jsxs("div", { children: [_jsxs("div", __assign({ className: "row pb-1" }, { children: [_jsxs("div", __assign({ className: "input-group col-lg-4" }, { children: [_jsx("input", { type: "text", className: "form-control", placeholder: "Search by name", value: searchName, onChange: onChangeSearchName }, void 0), _jsx("div", __assign({ className: "input-group-append" }, { children: _jsx("button", __assign({ className: "btn btn-outline-secondary", type: "button", onClick: findByName }, { children: "Search" }), void 0) }), void 0)] }), void 0), _jsxs("div", __assign({ className: "input-group col-lg-4" }, { children: [_jsx("input", { type: "text", className: "form-control", placeholder: "Search by zip", value: searchZip, onChange: onChangeSearchZip }, void 0), _jsx("div", __assign({ className: "input-group-append" }, { children: _jsx("button", __assign({ className: "btn btn-outline-secondary", type: "button", onClick: findByZip }, { children: "Search" }), void 0) }), void 0)] }), void 0), _jsxs("div", __assign({ className: "input-group col-lg-4" }, { children: [_jsx("select", __assign({ onChange: onChangeSearchCuisine }, { children: cuisines.map(function (cuisine, index) {
                                    return (_jsxs("option", __assign({ value: cuisine }, { children: [" ", cuisine.substr(0, 20), " "] }), index));
                                }) }), void 0), _jsx("div", __assign({ className: "input-group-append" }, { children: _jsx("button", __assign({ className: "btn btn-outline-secondary", type: "button", onClick: findByCuisine }, { children: "Search" }), void 0) }), void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "row" }, { children: restaurants.map(function (restaurant, index) {
                    var address = restaurant.address.building + " " + restaurant.address.street + ", " + restaurant.address.zipcode;
                    return (_jsx("div", __assign({ className: "col-lg-4 pb-1" }, { children: _jsx("div", __assign({ className: "card" }, { children: _jsxs("div", __assign({ className: "card-body" }, { children: [_jsx("h5", __assign({ className: "card-title" }, { children: restaurant.name }), void 0), _jsxs("p", __assign({ className: "card-text" }, { children: [_jsx("strong", { children: "Cuisine: " }, void 0), restaurant.cuisine, _jsx("br", {}, void 0), _jsx("strong", { children: "Address: " }, void 0), address] }), void 0), _jsxs("div", __assign({ className: "row" }, { children: [_jsx(Link, __assign({ to: "/restaurants/" + restaurant._id, className: "btn btn-primary col-lg-5 mx-1 mb-1" }, { children: "View Reviews" }), void 0), _jsx("a", __assign({ target: "_blank", href: "https://www.google.com/maps/place/" + address, className: "btn btn-primary col-lg-5 mx-1 mb-1" }, { children: "View Map" }), void 0)] }), void 0)] }), void 0) }), void 0) }), index));
                }) }), void 0)] }, void 0));
};
export default RestaurantsList;
