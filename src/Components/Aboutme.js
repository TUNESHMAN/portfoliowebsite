import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class Resume extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h1>About</h1>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am intrigued by how the internet works and how humans interact
              with computing devices to provide solutions to everyday problems.
              I am particularly interested in how these problems are broken down
              into smaller bits and creative resolutions are birthed. My goal is
              to be a creator of intuitive, interesting and impactful technology
              solutions working with and learning from a team of like minds.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
