import React from "react";
import { Container } from "../container/Container";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import LogOutBtn from "./LogOutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

const Header = () => {

  const authStatus = 
  useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-posts",
      active: authStatus,
    },
  ];

  return (
    <header>
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.slug} className="mr-4">
                  <Button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </Button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
