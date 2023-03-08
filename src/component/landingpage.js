import React from "react";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
const LandingPage = () => {
  return (
    <div className="header_img">
      <div className="header_info">
        <h1>Welcome to Kuriousk</h1>
        <p>This is the landing page of Kuriousk</p>

        <DropdownButton
          className="button"
          as={ButtonGroup}
          title="Dropdown"
          id="bg-nested-dropdown"
          bg="light"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
export default LandingPage;
