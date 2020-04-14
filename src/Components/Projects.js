import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";
import decksify from "../Components/Image/Decksify.png";

export class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: `url(${decksify})`,
              }}
            >
              Decksify
            </CardTitle>
            <CardText>
              A flashcard application to make everybody’s study-session more
              effective, while saving them time and money.
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ textDecoration: "none" }}
                href="https://github.com/Labs-EU4/flashcards-client"
                target="_blank"
              >
                Github
              </Button>
              <Button
                colored
                style={{ textDecoration: "none", marginLeft: '85px'}}
                href="https://app.decksify.com/"
                target="_blank"
              >
                Decksify
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Decksify</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>Vue</Tab> */}
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
