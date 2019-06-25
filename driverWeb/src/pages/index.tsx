import React, { Fragment } from 'react';
import Head from 'next/head';
import { Row, Col, Card } from 'antd';
import { DriverList } from '../components/DriverList';

export default () => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    </Head>
    <Row style={{ background: '#ECECEC', padding: '30px', height: '100vh' }}>
      <Col xs={10} xl={10}>
        <Card title="Driver List" bordered={false}>
          <DriverList />
        </Card>
      </Col>
      <Col offset={2} xs={10} xl={10}>
        <Card title="Create Driver" bordered={false}>
          Create a driver
        </Card>
        <br />
        <Card title="Create Driver" bordered={false}>
          Create a driver
        </Card>
      </Col>
    </Row>
  </Fragment>
);
