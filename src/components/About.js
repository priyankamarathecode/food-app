import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("parent componenet did mount");
  }
  render() {
    // console.log("parent render");

    return (
      <div>
        <h1> about class </h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Priya marathe2 (class base)"}
          location={"Priya class location"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>hii about</h1>
//       <User name={"Priya marathe ( funtional )"} />
//       <UserClass
//         name={"Priya marathe (class base)"}
//         location={"Priya class location"}
//       />
//     </div>
//   );
// };

export default About;
