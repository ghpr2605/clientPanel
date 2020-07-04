import React from "react";

const About = () => {
  return (
    <div>
      <h1>This is simple SPA developed using ReactJs</h1>
      <br></br>
      <h4>About Application</h4>
      <li>
        This is a simple contact managemnt application where user has provision
        to Add/Edit/Delete contact
      </li>
      <li>
        It is developed using React, Bootstrap and font awesome form icons
      </li>
      <br></br>
      <h4>About Developer</h4>
      <li>Myself Pranay Ghiya.</li>
      <li>
        I am a paasionate UI developer with skillset as JavaScript, Angular,
        React, Html & CSS
      </li>
      <li>
        You can find my work at ==>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ghpr2605"
        >
          <i class="fa fa-github"></i> GitHub
        </a>
      </li>
      <li>
        You can find me on ==>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/pranay-ghiya-83b657146/"
        >
          <i class="fa fa-linkedin"></i> LinkedIn{" "}
        </a>
      </li>
    </div>
  );
};

export default About;