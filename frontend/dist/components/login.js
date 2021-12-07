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
var Login = function (props) {
    var initialUserState = {
        name: "",
        id: "",
    };
    var _a = useState(initialUserState), user = _a[0], setUser = _a[1];
    var handleInputChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        setUser(__assign(__assign({}, user), (_a = {}, _a[name] = value, _a)));
    };
    var login = function () {
        props.login(user);
        props.history.push('/');
    };
    return (_jsx("div", __assign({ className: "submit-form" }, { children: _jsxs("div", { children: [_jsxs("div", __assign({ className: "form-group" }, { children: [_jsx("label", __assign({ htmlFor: "user" }, { children: "Username" }), void 0), _jsx("input", { type: "text", className: "form-control", id: "name", required: true, value: user.name, onChange: handleInputChange, name: "name" }, void 0)] }), void 0), _jsxs("div", __assign({ className: "form-group" }, { children: [_jsx("label", __assign({ htmlFor: "id" }, { children: "ID" }), void 0), _jsx("input", { type: "text", className: "form-control", id: "id", required: true, value: user.id, onChange: handleInputChange, name: "id" }, void 0)] }), void 0), _jsx("button", __assign({ onClick: login, className: "btn btn-success" }, { children: "Login" }), void 0)] }, void 0) }), void 0));
};
export default Login;
