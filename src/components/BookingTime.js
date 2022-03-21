import React, { useState, useRef } from "react";

import { Button, Overlay, Popover} from "react-bootstrap";

function Example() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <div ref={ref}>
        <Button className="btn-md" variant="primary" onClick={handleClick}>Icon</Button>
  
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}>
          <Popover id="popover-contained">
            <Popover.Header as="h3">Morning</Popover.Header>
            <Popover.Body>
              {/* <strong>Morning</strong> Check this info. */}
              9:00   10:00   11:00
            </Popover.Body>
            <Popover.Header as="h3">Afternoon</Popover.Header>
            <Popover.Body>
              1:00   2:00   3:00 
            </Popover.Body>
            <Popover.Header as="h3">Evening</Popover.Header>
            <Popover.Body>
              5:00
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    );
  }
  
//   render(<Example />);
  export default Example;