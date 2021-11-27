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
var RestaurantsList = function (props) {
    var _a = react_1.useState([]), restaurants = _a[0], setRestaurants = _a[1];
    var _b = react_1.useState(""), searchName = _b[0], setSearchName = _b[1];
    var _c = react_1.useState(""), searchZip = _c[0], setSearchZip = _c[1];
    var _d = react_1.useState(""), searchCuisine = _d[0], setSearchCuisine = _d[1];
    var _e = react_1.useState(["All Cuisines"]), cuisines = _e[0], setCuisines = _e[1];
    react_1.useEffect(function () {
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
        restaurant_1.default.getAll()
            .then(function (response) {
            console.log(response.data);
            setRestaurants(response.data.restaurants);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    var retrieveCuisines = function () {
        restaurant_1.default.getCuisines()
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
        restaurant_1.default.find(query, by)
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
    return (<div>
      <div className="row pb-1">
        <div className="input-group col-lg-4">
          <input type="text" className="form-control" placeholder="Search by name" value={searchName} onChange={onChangeSearchName}/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={findByName}>
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">
          <input type="text" className="form-control" placeholder="Search by zip" value={searchZip} onChange={onChangeSearchZip}/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={findByZip}>
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">

          <select onChange={onChangeSearchCuisine}>
             {cuisines.map(function (cuisine, index) {
            return (<option key={index} value={cuisine}> {cuisine.substr(0, 20)} </option>);
        })}
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={findByCuisine}>
              Search
            </button>
          </div>

        </div>
      </div>
      <div className="row">
        {restaurants.map(function (restaurant, index) {
            var address = restaurant.address.building + " " + restaurant.address.street + ", " + restaurant.address.zipcode;
            return (<div className="col-lg-4 pb-1" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">
                    <strong>Cuisine: </strong>{restaurant.cuisine}<br />
                    <strong>Address: </strong>{address}
                  </p>
                  <div className="row">
                  <react_router_dom_1.Link to={"/restaurants/" + restaurant._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    View Reviews
                  </react_router_dom_1.Link>
                  <a target="_blank" href={"https://www.google.com/maps/place/" + address} className="btn btn-primary col-lg-5 mx-1 mb-1">View Map</a>
                  </div>
                </div>
              </div>
            </div>);
        })}


      </div>
    </div>);
};
exports.default = RestaurantsList;
