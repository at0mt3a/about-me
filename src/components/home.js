import React, { Component } from "react";
import "./home.css";
import Nav from "./navSite";

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          About Adam
          <Nav />
        </header>
        <main>
          main div yo
          <div className="sectionOne">
            Section One - 3 sentences about moi. <br /> <br />I like weird
            movies. I love dried mangoes. I'm in love with Amy Winehouse.
          </div>
          <div className="sectionTwo">
            Section Two - 3 reasons for attending helio training <br /> <br />
            To learn how to build effective robot assistants. To teach my robots
            how to love. When the robots take over, I'll be a valuable slave.
          </div>
          <div className="sectionThree">
            Section Three - 3 personal interests of mine <br /> <br />I play
            guitar. I'm suuuper into my wife. Space is cool.
          </div>
        </main>
        <footer>its a snaaaaaake</footer>
      </div>
    );
  }
}

export default Home;
