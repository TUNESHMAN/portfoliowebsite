import React, { Component } from "react";
import { Grid,Cell } from "react-mdl";

export class Resume extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
              <Cell col={12}>
                  <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
                  alt="avatar"
                  className="avatar-img"/>
                  <div className="banner-text">
                      <h1>Full Stack Web Developer</h1>
                  </div>
              </Cell>
          </Grid>
        
      </div>
    );
  }
}

export default Resume;
