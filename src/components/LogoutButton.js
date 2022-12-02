import React from "react";

// // // Initialize Userfront Core JS
// // Userfront.init("demo1234");

// // // Define the logout button component
// // class LogoutButton extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       disabled: !Userfront.tokens.accessToken,
// //     };

// //     this.handleClick = this.handleClick.bind(this);
// //   }

// //   handleClick(event) {
// //     event.preventDefault();
// //     Userfront.logout();
// //   }

// function LogoutButton() {
//   return (
//     <button
//       id="logout-button"
//       onClick={this.handleClick}
//       disabled={this.state.disabled}
//     >
//       Log out
//     </button>
//   );
// }

// export default LogoutButton;

export const LogoutButton = () => {
  return (
    <button className="button1" type="submit">
      {" "}
      Logout
    </button>
  );
};

export default LogoutButton;
