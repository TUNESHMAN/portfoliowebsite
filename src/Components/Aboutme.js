import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export class Resume extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
          <h1>About</h1>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            A creative, innovative, approachable, realistic and result-driven
            graduate offering broad knowledge and experiences gathered in over
            three different fields as an intern, manager, writer, media
            practitioner and teacher.
          </p>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            At present, I am a full stack web development student at LAMBDA
            school. In fact, I am one of the 53 Africans selected for the
            school’s Africa Pilot program. I received several awards for
            outstanding performances and professionalism during NYSC. I also
            received awards for outstanding service as a departmental public
            relations officer.
          </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
