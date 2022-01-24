import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
export default function Tabs(props) {
  const [tab, setTab] = useState(0);
  const [swit, setSwit] = useState(false);
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setSwit(false);
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
              setSwit(false);
              setTab(1);
            }}
          >
            배송
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={swit} classNames="wow" timeout={500}>
        <TabContent tab={tab} setSwit={setSwit} />
      </CSSTransition>
    </div>
  );
}

const TabContent = (props) => {
  useEffect(() => {
    props.setSwit(true); //함수가 달라도 같은 파일이면 useState에 영향받는듯
  });

  if (props.tab === 0) {
    return <div>0</div>;
  } else if (props.tab === 1) {
    return <div>1</div>;
  }
};
