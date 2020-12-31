import React, { Component } from "react";
import RouteContext from "./RouteContext";
import Route from "./Route";
import PropTypes from "prop-types";

export class RoutesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProps: {
        dc_area: "All",
        difficulty: "All",
        route_type: "All",
        distance: "All",
      },
    };
  }

  static defaultProps = {
    match: {
      params: {},
    },
  };

  static propTypes = {
    route: PropTypes.shape({
      id: PropTypes.number.isRequired,
      route_name: PropTypes.string.isRequired,
      dc_area: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
      difficulty: PropTypes.string.isRequired,
      route_type: PropTypes.string.isRequired,
      route_description: PropTypes.string,
    }),
  };

  static contextType = RouteContext;

  render() {
    //create arrays to use for filtering DISTANCE

    const oneThroughFive = Array.from(new Array(5), (x, i) => i + 1);
    const sixThroughTen = Array.from(new Array(5), (x, i) => i + 6);
    const elevenThroughFifteen = Array.from(new Array(5), (x, i) => i + 11);
    const sixteenThroughTwenty = Array.from(new Array(5), (x, i) => i + 16);
    const twentyOnePlus = Array.from(new Array(500), (x, i) => i + 21);

    //functions to update filters onChange

    const updateDcArea = (area) => {
      this.setState({
        filteredProps: {
          dc_area: area,
          distance: this.state.filteredProps.distance,
          difficulty: this.state.filteredProps.difficulty,
          route_type: this.state.filteredProps.route_type,
        },
      });
    };

    const updateDifficulty = (difficulty) => {
      this.setState({
        filteredProps: {
          dc_area: this.state.filteredProps.dc_area,
          difficulty: difficulty,
          distance: this.state.filteredProps.distance,
          route_type: this.state.filteredProps.route_type,
        },
      });
    };

    const updateDistance = (distance) => {
      const arrayDistance = distance.split(",");
      const numberArrayDistance = arrayDistance.map((x) => +x);

      this.setState({
        filteredProps: {
          dc_area: this.state.filteredProps.dc_area,
          distance: numberArrayDistance,
          difficulty: this.state.filteredProps.difficulty,
          route_type: this.state.filteredProps.route_type,
        },
      });
    };

    const updateRouteType = (type) => {
      this.setState({
        filteredProps: {
          dc_area: this.state.filteredProps.dc_area,
          difficulty: this.state.filteredProps.difficulty,
          distance: this.state.filteredProps.distance,
          route_type: type,
        },
      });
    };

    const handleResetFilter = () => {
      this.setState({
        useFilter: false,
        filteredProps: {
          dc_area: "All",
          difficulty: "All",
          route_type: "All",
          distance: "All",
        },
      });
    };

    //first sort the routes alphabetically
    //routes taken from context to begin

    const sortedRoutes = this.context.routes.sort((a, b) => {
      if (a.route_name < b.route_name) {
        return -1;
      }
      if (a.route_name > b.route_name) {
        return 1;
      }
      return 0;
    });

    //then filter the sorted routes (defaulted to ALL, or no filter)

    const filteredRoutes = sortedRoutes.filter(
      (route) =>
        (route.dc_area === this.state.filteredProps.dc_area ||
          this.state.filteredProps.dc_area === "All") &&
        (route.route_type === this.state.filteredProps.route_type ||
          this.state.filteredProps.route_type === "All") &&
        (route.difficulty === this.state.filteredProps.difficulty ||
          this.state.filteredProps.difficulty === "All") &&
        (this.state.filteredProps.distance.includes(route.distance) ||
          this.state.filteredProps.distance === "All")
    );

    return (
      <div style={{ textDecoration: "none" }}>
        <h1>_routes</h1>
        <div>
          <form>
            <select
              name="dc_area"
              id="dc_area"
              onChange={(event) => updateDcArea(event.target.value)}
            >
              <option value="All">DC Area</option>
              <option value="All">All</option>
              <option value="Northeast">Northeast</option>
              <option value="Southeast">Southeast</option>
              <option value="Northwest">Northwest</option>
              <option value="Southwest">Southwest</option>
            </select>
            <select
              name="difficulty"
              id="difficulty"
              onChange={(event) => updateDifficulty(event.target.value)}
            >
              <option value="All">Difficulty</option>
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select
              name="distance"
              id="distance"
              onChange={(event) => updateDistance(event.target.value)}
            >
              <option value="All">Distance</option>
              <option value="All">All</option>
              <option value={oneThroughFive}>1-5 miles</option>
              <option value={sixThroughTen}>6-10 miles</option>
              <option value={elevenThroughFifteen}>11-15 miles</option>
              <option value={sixteenThroughTwenty}>16-20 miles</option>
              <option value={twentyOnePlus}>21+ miles</option>
            </select>
            <select
              name="type"
              id="type"
              onChange={(event) => updateRouteType(event.target.value)}
            >
              <option value="All">Route Type</option>
              <option value="All">All</option>
              <option value="City Streets">City Streets</option>
              <option value="Residential">Residential</option>
              <option value="Trail/Path">Trail/Path</option>
            </select>
            <button className="buttons" onClick={handleResetFilter}>
              Reset Filter
            </button>
          </form>

          <ul
            style={{
              listStyleType: "none",
              textDecoration: "none",
              color: "inherit",
              paddingLeft: "0",
            }}
          >
            {filteredRoutes.map((route) => (
              <li key={route.id} style={{ textDecoration: "none" }}>
                <Route
                  id={route.id}
                  name={route.route_name}
                  area={route.dc_area}
                  distance={route.distance}
                  difficulty={route.difficulty}
                  type={route.route_type}
                />
                <hr
                  style={{
                    width: "75%",
                    border: " 1px solid #011328",
                    backgroundColor: "#011328",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default RoutesList;
