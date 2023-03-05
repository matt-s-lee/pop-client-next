import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { SnackbarComponent } from "../components/Snackbar";

export default function Feedback() {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [feedbackSnackbarOpen, setFeedbackSnackbarOpen] = useState();

  const handleInputChange = (ev, setter) => {
    setter(ev.target.value);
  };

  const sendEmail = (ev) => {
    ev.preventDefault();

    emailjs
      .sendForm(
        "service_517bv4x",
        "template_w4a9ung",
        form.current,
        "XHYAs1hCbfTWVC5FZ"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          setName("");
          setEmail("");
          setMessage("");
          setFeedbackSnackbarOpen(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Container>
      <SnackbarComponent
        message="Thank you for your feedback!"
        snackbarOpen={feedbackSnackbarOpen}
        setSnackbarOpen={setFeedbackSnackbarOpen}
      />
      <div>Please fill out the form below to send any feedback.</div>
      <Form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(ev) => handleInputChange(ev, setName)}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(ev) => handleInputChange(ev, setEmail)}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(ev) => handleInputChange(ev, setMessage)}
        />
        <input type="submit" value="Send" />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
