import { Navigate } from "react-router";
import useUser from "../api/hooks/useUser";

interface Props {
  children: JSX.Element;
  /**
   * wantedRoute is the route we _want_ to visit. If given, this will be passed as a query parameter to the login page.
   */
  wantedRoute?: string;
  redirectTo: string;
}

const RequireAuth = ({ children, wantedRoute, redirectTo }: Props) => {
  const { loggedOut } = useUser();
  return loggedOut ? (
    <Navigate to={`/login?goTo=${encodeURIComponent(wantedRoute ?? "")}`} />
  ) : (
    children
  );
};

export default RequireAuth;
