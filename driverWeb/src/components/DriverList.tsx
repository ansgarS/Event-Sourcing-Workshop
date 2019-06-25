import { Avatar, List, Skeleton } from 'antd';
import React from 'react';

const drivers = [
  {
    id: 'driver-1',
    firstName: 'Ansgar',
    lastName: 'Sachs',
    status: 'Offline',
    location: { x: 1.121, y: 2422 },
  },
  {
    id: 'driver-1',
    firstName: 'Ansgar',
    lastName: 'Sachs',
    status: 'Offline',
    location: { x: 1.121, y: 2422 },
  },
  {
    id: 'driver-1',
    firstName: 'Ansgar',
    lastName: 'Sachs',
    status: 'Offline',
    location: { x: 1.121, y: 2422 },
  },
];

export const DriverList = () => {

  return (
    <List
      className="driver-list"
      loading={false}
      itemLayout="horizontal"
      dataSource={drivers}
      renderItem={(driver: any) => (
        <List.Item
          actions={[
            <a key="set-driver-status">Set Status</a>,
            <a key="set-driver-locatrion">Set Location</a>,
          ]}
        >
          <Skeleton avatar={true} title={false} loading={false} active={true}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{driver.firstName} {driver.lastName}</a>}
              description={`Status: ${driver.status}, location: (${driver.location.x} / ${driver.location.y})`}
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
