import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "./actions/getUsersAction";
import UserCard from "./components/UserCard/UserCard";
import "./App.css";
import Loader from "./components/loader/Loader";

class App extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers(1);
  }

  showNextUser = () => {
    const {
      getUsers,
      all_users: { page },
    } = this.props;
    getUsers(page + 1);
  };

  // render

  render() {
    const {
      all_users: { all_users, page, total, loading },
    } = this.props;

    if (all_users.length === 0) {
      return <Loader />;
    }
    return (
      <ul className="card-list">
        {all_users.map((user, index) => {
          return <UserCard key={index} user={user} />;
        })}
        {all_users.length < total ? (
          <div className="button raised green" onClick={this.showNextUser}>
            <div className="center">еще</div>
          </div>
        ) : null}
      </ul>
    );
  }
}

const mapStateToProps = ({ all_users }) => {
  return { all_users };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsers: getUsers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
