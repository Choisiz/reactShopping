import React, { useState } from "react";
import { Nav } from "react-bootstrap";
export default function Tabs(props) {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTab(0);
            }}
          >
            상품
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTab(1);
            }}
          >
            배송
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

const TabContent = (props) => {
  console.log(props);
  if (props.tab === 0) {
    return <div>0</div>;
  } else if (props.tab === 1) {
    return <div>1</div>;
  }
};
