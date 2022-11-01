import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    //let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <a href="mailto:santiposse2000@gmail.com?subject = Contact&body = Message">
              <p className="lead">
                Send me an e-mail
              </p>
            </a>
            <a href="https://www.linkedin.com/in/santiago-jos%C3%A9-posse-ar%C3%A1oz/" target="_blank" rel="noopener noreferrer">
              <p className="lead">
                Add me on LinkedIn
              </p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
