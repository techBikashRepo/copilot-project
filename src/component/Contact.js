import React from "react";
import { useAccess } from "../common/AccessContext";

function Contact() {
  const { hasAccess } = useAccess();
  return (
    <div className="box-container">
      <div className="box">
        <h2>Contact Access</h2>
        {hasAccess ? (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula, nulla nec ultricies mattis, odio sapien tincidunt purus,
            nec aliquet elit nunc ac nunc. Sed nec ultricies elit. Nullam
            vehicula, nulla nec ultricies mattis, odio sapien tincidunt purus,
            nec aliquet elit nunc ac nunc. Sed nec ultricies elit.
          </p>
        ) : (
          <p>You do not have access to this content.</p>
        )}
      </div>
      <div className="box">{/* <h2>No Access</h2> */}</div>
    </div>
  );
}

export default Contact;
