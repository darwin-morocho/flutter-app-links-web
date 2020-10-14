/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */

import React from "react";
import Router from "next/router";
import { Avatar, Spin, Button } from "antd";
import { observer } from "mobx-react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import UserController from "../../modules/user/controller";
import { NextPage } from "next";
import Template from "../../components/Template";

@observer
class UsersPage extends React.PureComponent<{ userId: number }> {
  controller = new UserController();

  componentDidMount() {
    console.log("this.props", this.props);
    this.controller.load(this.props.userId);
  }

  render() {
    const { user, fetching } = this.controller;
    return (
      <Template pageTitle={`AppLinks Web - user ${this.props.userId}`}>
        {fetching && <Spin size="large" />}

        {user && (
          <div style={{ textAlign: "center", padding: 20 }}>
            <Avatar size="large" src={user.avatar} />
            <div>{user.email}</div>
            <div>
              {user.first_name} {user.last_name}
            </div>
          </div>
        )}

        <br />
        <br />
        <Button
          shape="circle"
          icon={<ArrowLeftOutlined />}
          type="primary"
          onClick={() => {
            Router.back();
          }}
        />
      </Template>
    );
  }
}

const Page: NextPage<{ userId: number }> = ({ userId }) => {
  return <UsersPage userId={userId} />;
};

Page.getInitialProps = async ({ query }) => {
  return { userId: parseInt(query.id as string) };
};

export default Page;
