import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child mount");
    const data = await fetch(
      "https://api.github.com/users/priyankamarathecode"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate call");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount call");
  }
  render() {
    const { name, location, avtar_url } = this.state.userInfo;

    // console.log(this.props.name + "child Render");

    return (
      <div className="user-card">
        <img src={avtar_url} />
        <h2>Name:{name}</h2>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}

export default UserClass;
