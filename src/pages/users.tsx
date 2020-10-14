/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import React from "react";
import { Avatar, Spin, Row, Col, Card } from "antd";
import { observer } from "mobx-react";
import UsersController from "../modules/users/controller";
import Template from "../components/Template";

@observer
export default class usersPage extends React.PureComponent {
  controller = new UsersController();

  render() {
    const { users, fetching } = this.controller;
    return (
      <Template pageTitle="AppLinks Web - Users">
        {fetching ? (
          <Spin size="large" />
        ) : (
          <Row gutter={10}>
            {users.map((item) => (
              <Col key={`${item.id}`} md={8}>
                <Link href={`/user/${item.id}`}>
                  <a>
                    <Card>
                      <Avatar src={item.avatar} />
                      <br />
                      {item.first_name} {item.last_name}
                    </Card>
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Template>
    );
  }
}
