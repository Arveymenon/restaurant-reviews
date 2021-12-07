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
import { useState } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";
var AddReview = function (props) {
    var initialReviewState = "";
    var editing = false;
    if (props.location.state && props.location.state.currentReview) {
        editing = true;
        initialReviewState = props.location.state.currentReview.text;
    }
    var _a = useState(initialReviewState), review = _a[0], setReview = _a[1];
    var _b = useState(false), submitted = _b[0], setSubmitted = _b[1];
    var handleInputChange = function (event) {
        setReview(event.target.value);
    };
    var saveReview = function () {
        var data = {
            text: review,
            name: props.user.name,
            user_id: props.user.id,
            restaurant_id: props.match.params.id,
            review_id: 0
        };
        if (editing) {
            data.review_id = props.location.state.currentReview._id;
            RestaurantDataService.updateReview(data)
                .then(function (response) {
                setSubmitted(true);
                console.log(response.data);
            })
                .catch(function (e) {
                console.log(e);
            });
        }
        else {
            RestaurantDataService.createReview(data)
                .then(function (response) {
                setSubmitted(true);
                console.log(response.data);
            })
                .catch(function (e) {
                console.log(e);
            });
        }
    };
    return (_jsx("div", { children: props.user ? (_jsx("div", __assign({ className: "submit-form" }, { children: submitted ? (_jsxs("div", { children: [_jsx("h4", { children: "You submitted successfully!" }, void 0), _jsx(Link, __assign({ to: "/restaurants/" + props.match.params.id, className: "btn btn-success" }, { children: "Back to Restaurant" }), void 0)] }, void 0)) : (_jsxs("div", { children: [_jsxs("div", __assign({ className: "form-group" }, { children: [_jsxs("label", __assign({ htmlFor: "description" }, { children: [editing ? "Edit" : "Create", " Review"] }), void 0), _jsx("input", { type: "text", className: "form-control", id: "text", required: true, value: review, onChange: handleInputChange, name: "text" }, void 0)] }), void 0), _jsx("button", __assign({ onClick: saveReview, className: "btn btn-success" }, { children: "Submit" }), void 0)] }, void 0)) }), void 0)) : (_jsx("div", { children: "Please log in." }, void 0)) }, void 0));
};
export default AddReview;
