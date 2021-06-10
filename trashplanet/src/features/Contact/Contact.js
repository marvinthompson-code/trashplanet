import '../../css/Contact.css'
import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  // subject
  const [subject, setSubject] = useState("");
  // message
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to email js
  };
  return (
    <div className="cartParent container contactParent">
      <div className="jumbotron cartJumbo text-center">
        <h1 className="display-4 nameProduct">Contact</h1>
        <p className="lead cartDescription">
          Send us a message and we'll be right with you!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1" className="cartDescription">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1" className="cartDescription">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1" className="cartDescription">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <br></br>

          <button type="submit" className="btn btn-primary btn-lg bannerButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
