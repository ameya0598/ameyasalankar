import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import * as emailjs from "emailjs-com";

let success = true;

function Greet(props) {
  const shouldShow = props.show;
  const success = props.success;
  if (shouldShow) {
    if (success) {
      return (
        <Alert variant="success">
          <Alert.Heading>Message sent successfully!</Alert.Heading>
          <p>Thanks for contacting me!</p>
        </Alert>
      );
    } else {
      return (
        <Alert variant="danger">
          <Alert.Heading>Aw Snap! You got an error</Alert.Heading>
          <p>That's all I know!</p>
        </Alert>
      );
    }
  } else {
    return (
      <Button
        variant="outline-primary"
        size="lg"
        type="submit"
        style={{ marginTop: "8px", width: "175px" }}
      >
        <i className="far fa-paper-plane" /> Send
      </Button>
    );
  }
}

class ContactMe extends React.Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.email = React.createRef();
    this.message = React.createRef();

    this.state = {
      template_params: {
        from_name: "",
        from_email: "",
        message_html: ""
      },
      show: false,
      success: false
    };
  }

  sendForm = event => {
    event.preventDefault();
    let statusCopy = Object.assign({}, this.state);
    statusCopy.template_params["from_name"] = this.name.current.value;
    statusCopy.template_params["from_email"] = this.email.current.value;
    statusCopy.template_params["message_html"] = this.message.current.value;
    this.setState({ template_params: statusCopy });

    emailjs
      .send(
        "ameya_salankar",
        "template_JyJbebGc",
        this.state.template_params,
        "user_Nzv5WfGX93Z0f4OLZIloB"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
          success = true;
        },
        function(error) {
          console.log("FAILED...", error);
          success = false;
        }
      );

    if (success) {
      this.name.current.value = " ";
      this.email.current.value = " ";
      this.message.current.value = "Message sent!";
      this.setState({ show: true, success: true });
    } else {
      this.name.current.value = " ";
      this.email.current.value = " ";
      this.message.current.value = "Message Not sent!";
      this.setState({ show: true, success: false });
    }
  };

  render() {
    return (
      <Container>
        <header>
          <h2>Contact Me</h2>
        </header>
        <Form id="form" onSubmit={this.sendForm}>
          <Row>
            <Col md={6} sm={12}>
              <FormControl
                ref={this.name}
                placeholder="Name"
                className="form-unit"
                required
              />
            </Col>
            <Col md={6} sm={12}>
              <FormControl
                ref={this.email}
                placeholder="Email"
                className="form-unit"
                required
              />
            </Col>
            <Col md={12}>
              <FormControl
                as="textarea"
                placeholder="Your Message"
                rows="8"
                className="form-unit"
                ref={this.message}
              />
            </Col>
          </Row>
          <Greet show={this.state.show} success={this.state.success} />
        </Form>
      </Container>
    );
  }
}

export default ContactMe;
