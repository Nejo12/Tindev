import React from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu secondary pointing>
      <Menu.Item style={{ fontSize: 24 }}>
        <Icon name="cogs" color="red"></Icon> TinDev
      </Menu.Item>

      <Menu.Item position="right">
        <Button inverted color="green">
          <Icon name="sign-in"></Icon>
          Login
        </Button>
      </Menu.Item>

      <Menu.Item>
        <Button inverted color="violet">
          <Icon name="add"></Icon>
          Profile
        </Button>
      </Menu.Item>
    </Menu>
  )
}

export default Header
