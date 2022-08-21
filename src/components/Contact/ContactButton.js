import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

export default function ContactButton(props) {
  return (
    <Button className="ContactButton" variant="warning" onClick={props.onClick}>
      <div className="ContactText">
        <FontAwesomeIcon className="MailIcon" icon={faEnvelope} size="lg" />
        Contact Us
      </div>
    </Button>
  );
}
