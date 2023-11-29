import useAuthStore from "@/store/useAuthStore";
import { Container } from "react-bootstrap";

interface LoginProps { }

export const Login: React.FC<LoginProps> = ({ }) => {
  const { setIsAuthenticated, setUser } = useAuthStore((state) => state);
  return (
    <Container style={{ height: "100vh" }}>
      <form
        className=""
      >
      </form>
    </Container>
  );
};

export default Login;
