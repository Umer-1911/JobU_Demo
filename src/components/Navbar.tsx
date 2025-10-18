import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
const Navbar = () => {
  return <div className="flex justify-end items-center p-4 gap-2">
      <Link to="/pricing">
        <Button variant="outline" size="sm">
          Try Pro
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="gradient" size="sm">
          Log in
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="solid" size="sm">
          Sign up
        </Button>
      </Link>
    </div>;
};
export default Navbar;