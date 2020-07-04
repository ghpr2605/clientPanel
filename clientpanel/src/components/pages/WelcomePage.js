import React from "react";

const WelcomePage = () => {
  return (
    <div className="container">
      <h3>Implementation Details</h3>
      <ul>
        <li>
          Implemented functionality to create a Contact Management Application
          using ReactJs.
        </li>
        <li>Visually appealing and user friendly display</li>
        <li>Have used free Json Holder Api to fetch dummy data set</li>
        <li>
          On initial loading of application default contact details are
          displayed.
        </li>
        <li>Implemented a feature to Add new user's with contact details.</li>
        <li>Implemented a feature to Edit existing user's contact details.</li>
        <li>Implemented a feature to Delete user's contact details.</li>
        <li>Implemented slider button to make user's staus Active/Inactive</li>
        <li>Implemented basic form validation on each field.</li>
        <li>
          Implemented logic to check for duplicate entries based on phone number
        </li>
      </ul>
      <br></br>
      <p>Now as you know the details, feel free to use the application.</p>
      <p>Just switch the tabs in navigation bar.!!</p>
    </div>
  );
};

export default WelcomePage;