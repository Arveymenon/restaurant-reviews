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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var restaurant_1 = __importDefault(require("../services/restaurant"));
var react_router_dom_1 = require("react-router-dom");
var Restaurant = function (props) {
    var initialRestaurantState = {
        id: null,
        name: "",
        address: {
            building: "",
            street: "",
            zipcode: ""
        },
        cuisine: "",
        reviews: [
            {
                _id: 0,
                user_id: 0,
                text: "",
                name: "",
                date: ""
            }
        ]
    };
    var _a = react_1.useState(initialRestaurantState), restaurant = _a[0], setRestaurant = _a[1];
    var getRestaurant = function (id) {
        restaurant_1.default.get(id)
            .then(function (response) {
            setRestaurant(response.data);
            console.log(response.data);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    react_1.useEffect(function () {
        getRestaurant(props.match.params.id);
    }, [props.match.params.id]);
    var deleteReview = function (reviewId, index) {
        restaurant_1.default.deleteReview(reviewId, props.user.id)
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
    return (<div>
      {restaurant ? (<div>
          <h5>{restaurant.name}</h5>
          <p>
            <strong>Cuisine: </strong>{restaurant.cuisine}<br />
            <strong>Address: </strong>{restaurant.address.building} {restaurant.address.street}, {restaurant.address.zipcode}
          </p>
          <react_router_dom_1.Link to={"/restaurants/" + props.match.params.id + "/review"} className="btn btn-primary">
            Add Review
          </react_router_dom_1.Link>
          <h4> Reviews </h4>
          <div className="row">
            {restaurant.reviews.length > 0 ? (restaurant.reviews.map(function (review, index) {
                return (<div className="col-lg-4 pb-1" key={index}>
                   <div className="card">
                     <div className="card-body">
                       <p className="card-text">
                         {review.text}<br />
                         <strong>User: </strong>{review.name}<br />
                         <strong>Date: </strong>{review.date}
                       </p>
                       {props.user && props.user.id === review.user_id &&
                        <div className="row">
                            <a onClick={function () { return deleteReview(review._id, index); }} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>
                            <react_router_dom_1.Link to={{
                                pathname: "/restaurants/" + props.match.params.id + "/review",
                                state: {
                                    currentReview: review
                                }
                            }} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</react_router_dom_1.Link>
                          </div>}
                     </div>
                   </div>
                 </div>);
            })) : (<div className="col-sm-4">
              <p>No reviews yet.</p>
            </div>)}

          </div>

        </div>) : (<div>
          <br />
          <p>No restaurant selected.</p>
        </div>)}
    </div>);
};
exports.default = Restaurant;
