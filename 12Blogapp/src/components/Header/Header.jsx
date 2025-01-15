
import LogOutBtn from "./LogOutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import Container from "../container/Container";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "HOME",
      slug: "/",
      active: true,
    },
    {
      name: "LOGIN",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SIGNUP",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="p-4 bg-gray-50">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            {/* <Link to="/">
              <Logo />
            </Link> */}
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.slug} className="mr-4">
                  <Button onClick={() => navigate(item.slug)} className='rounded-full bg-gray-900'>
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
