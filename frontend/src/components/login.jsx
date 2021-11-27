"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Login = function (props) {
    var initialUserState = {
        name: "",
        id: "",
    };
    var _a = react_1.useState(initialUserState), user = _a[0], setUser = _a[1];
    var handleInputChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        setUser(__assign(__assign({}, user), (_a = {}, _a[name] = value, _a)));
    };
    var login = function () {
        props.login(user);
        props.history.push('/');
    };
    return (<div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input type="text" className="form-control" id="name" required value={user.name} onChange={handleInputChange} name="name"/>
        </div>

        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input type="text" className="form-control" id="id" required value={user.id} onChange={handleInputChange} name="id"/>
        </div>

        <button onClick={login} className="btn btn-success">
          Login
        </button>
      </div>
    </div>);
};
exports.default = Login;
