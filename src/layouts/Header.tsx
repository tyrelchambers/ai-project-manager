import { Button, buttonVariants } from "@/components/ui/button";
import { useUser } from "@/hooks/queries/useUser";
import { Link } from "@tanstack/react-router";
import { useCookies } from "react-cookie";
const Header = () => {
  const { currentUser } = useUser();
  const [, , removeCookie] = useCookies(["jwt"]);
  const signoutHandler = () => {
    removeCookie("jwt");
    window.location.reload();
  };
  return (
    <header>
      {currentUser.data ? (
        <div>
          <Link to="/new" className={buttonVariants({ variant: "secondary" })}>
            New Project
          </Link>
          <Button onClick={signoutHandler}>Sign out</Button>
        </div>
      ) : (
        <Link to="/signin" className={buttonVariants({ variant: "default" })}>
          Sign in
        </Link>
      )}
    </header>
  );
};
export default Header;
