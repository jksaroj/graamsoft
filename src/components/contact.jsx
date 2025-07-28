import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import emailConfig from "../config/config";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSending, setIsSending] = useState(false);
  const [emailResponseMessage, setEmailResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setEmailResponseMessage("");

    emailjs
      .sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        e.target,
        emailConfig.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailResponseMessage("Message Sent Successfully");
          clearState();
        },
        (error) => {
          console.log(error.text);
          setEmailResponseMessage("Error Sending Message. Try Again Later.");
        }
      )
      .finally(() => setIsSending(false));
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Ready To Transform?</h2>
                <p>
                  Smart software, social impact—both begin with one
                  conversation.
                </p>
              </div>
              <div className="row">
                <p>{props.data ? props.data.para_1 : "Loading..."}</p>
                <p>{props.data ? props.data.para_2 : "Loading..."}</p>
                <p>{props.data ? props.data.para_3 : "Loading..."}</p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success">
                  {emailResponseMessage && (
                    <p
                      style={{
                        marginTop: "10px",
                        color: emailResponseMessage.includes("Success")
                          ? "green"
                          : "red",
                      }}
                    >
                      {emailResponseMessage}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={isSending}
                >
                  {isSending ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025, GraamSoft Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
};
