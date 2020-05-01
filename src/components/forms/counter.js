import React, { useState } from 'react';

import { Button, Row, Col } from 'react-bootstrap';


export default function Counter(props) {
    
    const [count, setCount] = useState(props.value);
   

    return (
        <div>
            <Row>
                <Col>
                    <p style={{ fontSize: '16px' }}>Adult</p>
                </Col>
                <Col>
                    <Button onClick={() => setCount(count - 1)} variant='outline-primary' size="sm"
                        style={{ borderRadius: "7px" }}
                    >
                        <img
                            src={require('../../Images/minus-icon.webp')}
                            alt='minus' width="12px" height="12px"
                        />
                    </Button>
                </Col>
                <Col style={{ alignSelf: 'center', fontSize: '18px' }}>
                    <p>{count}</p>
                </Col>
                <Col>
                    <Button onClick={() => setCount(count + 1)} variant='outline-primary' size="sm"
                        style={{ borderRadius: "7px" }}
                    >
                        <img
                            src={require('../../Images/plus-icon.webp')}
                            alt='plus' width='12px' height='12px'
                        />
                    </Button>
                </Col>
            </Row>
        </div>
    )
}