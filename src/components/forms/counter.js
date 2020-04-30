import React,{useState} from 'react';

import {Button,Row,Col} from 'react-bootstrap';


export default function Counter(){
    const [count, setCount] = useState(1);
    
    return(
        <div>
        <Row>
        <Col>
        <p style={{fontSize:'16px'}}>Adult</p>
        </Col>
        <Col>
        <Button onClick={()=>setCount(count-1)} variant='outline-primary'>
        <img 
        src={require('../../Images/minus-icon.webp')}
        alt='minus' width="12px"height="12px"
        />
        </Button>
        </Col>
        <Col style={{alignSelf:'center',fontSize:'18px'}}>
        {count}
        </Col>
        <Col>
        <Button  onClick={()=>setCount(count+1)} variant='outline-primary'>
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