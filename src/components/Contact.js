import React, { useState } from "react";
import axios from "axios";
import { Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoaded(true);
    let post = { name: name, email: email, phone: phone, message: message };
    let regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    try {
      if (name == "" || email == "" || message == "" || phone == "") {
        setLoaded(false);
        toast.error("Please fill out all fields");
      } else if (!regEx.test(email)) {
        setLoaded(false);
        toast.error("Please enter a valid email address");
      } else {
        await axios.post("/api/contact", post);
        setLoaded(true);
        toast.success("Message Sent!");
        setLoaded(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-section-container" id="contact">
      <div className="contact-us">Contact Us</div>
      <div className="call-txt">Call now to make an appointment</div>
      <div className="phone-number">
        <a href="tel:760-325-4247">
          {" "}
          <FontAwesomeIcon className="phone-icon" icon={faPhone} /> (760)
          325-4247
        </a>
      </div>
      <div className="send-message-txt">Or send us a message &#8595;</div>
      <div className="form-container">
        <Stack spacing={1}>
          <TextField
            label="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText={!name ? "Required" : ""}
          ></TextField>
          <TextField
            label="Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={!email ? "Required" : ""}
          ></TextField>
          <TextField
            label="Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            helperText={!phone ? "Required" : ""}
          ></TextField>

          <Box sx={{ width: 500, maxWidth: "100%" }}>
            <TextField
              label="Message"
              required
              multiline
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              helperText={!message ? "Required" : ""}
            ></TextField>
          </Box>
        </Stack>
      </div>
      {loaded ? (
        <span class="loader"></span>
      ) : (
        <button className="btn-link" onClick={onSubmit}>
          Send
        </button>
      )}

      <Toaster />
    </div>
  );
};

export default Contact;
