import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../Components/Education";
import Experience from '../Components/Experience'

export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/Picture/FB_IMG_1539888851938.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Babatunde Adeniran</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Full Stack Web Developer with an academic background in Mechanical
              Engineering and almost six months experience in building React
              front end applications. I am prepared to transition into any entry
              level position, on-site or remote.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>2, Bridge Close, New Ashongman Estate, Accra, Ghana.</p>
            <h5>Phone</h5>
            <p>(+234) 80 666 95472</p>
            <h5>Email</h5>
            <p>Babatundea15@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2010}
              endYear={2015}
              schoolName={"University of Ilorin"}
              schoolDescription={"Mechanical Engineering"}
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Lambda School"
              schoolDescription="Full Stack Web Development"
            />
            <hr style={{borderTop: "3px solid #e22947"}}/>

            <h2>Experience</h2>

            <Experience startYear={2017}
            endYear={2012}
            jobName="Access Bank Plc."
            jobDescription="Customer Relationship Officer"/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
