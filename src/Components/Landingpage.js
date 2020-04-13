import React, { Component } from "react";
import { Grid,Cell } from "react-mdl";

export class Resume extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
              <Cell col={12}>
                  <img src="/Picture/FB_IMG_1547488634104.jpg"
                  alt="avatar"
                  className="avatar-img"/>
                  <div className="banner-text">
                      <h1>Full Stack Web Developer</h1>
                      <hr/>
                      <p>HTML | CSS | React | REDUX | Bootstrap | JavaScript | Node | Express | SQLite</p>
                      {/* LINKS TO MY SOCIAL PROFILE */}
                  </div>
                  <div className="social-links">
                      {/* LINKEDIN */}
                      <a href="https://www.linkedin.com/in/babatunde-adeniran-0a2652b8/" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                      {/* GITHUB */}

                      <a href="https://github.com/TUNESHMAN" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    {/* TWITTER */}
                      <a href="https://twitter.com/Tuneshman" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-twitter-square" aria-hidden="true" />
                      </a>


                  </div>
              </Cell>
          </Grid>
        
      </div>
    );
  }
}

export default Resume;
