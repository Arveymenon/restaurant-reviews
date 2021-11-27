"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var restaurant_1 = __importDefault(require("../services/restaurant"));
var react_router_dom_1 = require("react-router-dom");
var AddReview = function (props) {
    var initialReviewState = "";
    var editing = false;
    if (props.location.state && props.location.state.currentReview) {
        editing = true;
        initialReviewState = props.location.state.currentReview.text;
    }
    var _a = react_1.useState(initialReviewState), review = _a[0], setReview = _a[1];
    var _b = react_1.useState(false), submitted = _b[0], setSubmitted = _b[1];
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
            restaurant_1.default.updateReview(data)
                .then(function (response) {
                setSubmitted(true);
                console.log(response.data);
            })
                .catch(function (e) {
                console.log(e);
            });
        }
        else {
            restaurant_1.default.createReview(data)
                .then(function (response) {
                setSubmitted(true);
                console.log(response.data);
            })
                .catch(function (e) {
                console.log(e);
            });
        }
    };
    return (<div>
      {props.user ? (<div className="submit-form">
        {submitted ? (<div>
            <h4>You submitted successfully!</h4>
            <react_router_dom_1.Link to={"/restaurants/" + props.match.params.id} className="btn btn-success">
              Back to Restaurant
            </react_router_dom_1.Link>
          </div>) : (<div>
            <div className="form-group">
              <label htmlFor="description">{editing ? "Edit" : "Create"} Review</label>
              <input type="text" className="form-control" id="text" required value={review} onChange={handleInputChange} name="text"/>
            </div>
            <button onClick={saveReview} className="btn btn-success">
              Submit
            </button>
          </div>)}
      </div>) : (<div>
        Please log in.
      </div>)}

    </div>);
};
exports.default = AddReview;
