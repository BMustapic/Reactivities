import React, {Fragment} from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Fragment>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            Reactivities
          </Menu.Item>
          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button positive content="Create Activity" />
          </Menu.Item>
        </Container>
      </Menu>
    </Fragment>
  );
};
