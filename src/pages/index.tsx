/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import Router from "next/router";
import React from "react";
import { Button } from "antd";
import Template from "../components/Template";

export default class HomePage extends React.PureComponent {
  render() {
    console.log("👏🏻");

    return (
      <Template pageTitle="AppLinks Web">
        <br />
        <Button
          type="primary"
          onClick={() => {
            Router.push("/users");
          }}
        >
          GO TO USERS
        </Button>
      </Template>
    );
  }
}
