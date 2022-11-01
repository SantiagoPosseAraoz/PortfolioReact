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
                Contact me
              </p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
