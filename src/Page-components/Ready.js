import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Props from '../Sub-components/Props';

import Footersecound from '../Footersecound';

function Ready(props) {
  return (
    <>
      <Container fluid>
        <div className="text-center text-3xl py-2">
          <span>Ready To Wear</span>
        </div>
        <hr />

        {/* Product Count */}
        <div className="text-center text-xl py-2">
          <span>35 Products</span>
        </div>
        <hr className="w-full" />
        <Container>
        <Row>
          {/* Accordion section */}

        <Col sm={3}>
            <div className='hidden md:block sticky top-40' style={{width: '250px', height: '900px' }}>
                <Accordion defaultActiveKey="0" style={{ height: '100%', overflowY: 'auto',top:'0' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Accordion Item #5</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Accordion Item #6</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Col>



          {/* Product images section */}
          <Col sm={9}  className="text-clip mt-2">
            <Row>
              
                <Props imgUral="https://baroque.pk/cdn/shop/files/52_c346764a-d4ce-47b1-b39f-913bd6f79dc4.jpg?v=1726904703&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/55_10736858-aa30-4f70-b1e1-c499b9379b08.jpg?v=1726904703&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/110_0b489d7d-86ce-49ad-a5ed-6f52bc831de6.jpg?v=1726303714&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/114_8bbd45dd-d481-4ce3-bdb9-56863e8891ab.jpg?v=1726303714&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/63_a3f2157f-b32a-4702-8f1a-158ff0b1321e.jpg?v=1726904748&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/64_26758a98-d266-4122-8692-c230135ba238.jpg?v=1726904748&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/35_df6095a7-5fa7-4f53-81d3-eceffa6a7ddc.jpg?v=1726904816&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/42_92097e6a-6907-49ca-b04d-743405794d8d.jpg?v=1726904816&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/126_6bb4933d-efea-4e66-9f6e-6d0eba0f1813.jpg?v=1726303745&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/128_5336652c-a161-4a02-90df-8243649cec40.jpg?v=1726303745&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/12_7c21f7f3-c15d-493f-8438-8ab43ebda07e.jpg?v=1699872768&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/15_7c9908b4-7a0d-4688-9792-e0240cae875b.jpg?v=1699873684&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/52_c346764a-d4ce-47b1-b39f-913bd6f79dc4.jpg?v=1726904703&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/55_10736858-aa30-4f70-b1e1-c499b9379b08.jpg?v=1726904703&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/110_0b489d7d-86ce-49ad-a5ed-6f52bc831de6.jpg?v=1726303714&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/114_8bbd45dd-d481-4ce3-bdb9-56863e8891ab.jpg?v=1726303714&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/63_a3f2157f-b32a-4702-8f1a-158ff0b1321e.jpg?v=1726904748&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/64_26758a98-d266-4122-8692-c230135ba238.jpg?v=1726904748&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/35_df6095a7-5fa7-4f53-81d3-eceffa6a7ddc.jpg?v=1726904816&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/42_92097e6a-6907-49ca-b04d-743405794d8d.jpg?v=1726904816&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/126_6bb4933d-efea-4e66-9f6e-6d0eba0f1813.jpg?v=1726303745&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/128_5336652c-a161-4a02-90df-8243649cec40.jpg?v=1726303745&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                <Props imgUral="https://baroque.pk/cdn/shop/files/12_7c21f7f3-c15d-493f-8438-8ab43ebda07e.jpg?v=1699872768&width=1000"  hoverImg="https://baroque.pk/cdn/shop/files/15_7c9908b4-7a0d-4688-9792-e0240cae875b.jpg?v=1699873684&width=1000"  title="EMBROIDERED PRINTED LAWN" price="PKR 8,990.00" subtitle="UF-711" />
                
            </Row>
          </Col>
        </Row>
        </Container>
      </Container>
      <Footersecound className="mt-10" />
    </>
  );
}

export default Ready;
