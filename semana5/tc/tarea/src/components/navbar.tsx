// src/components/navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';

const Navbar: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/components">Components</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ padding: '10px', background: '#001529', color: '#fff' }}>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>Menu</Button>
      </Dropdown>
    </div>
  );
};

export default Navbar;
