import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { LogInCommand } from "@Accounts";
import { Link } from "react-router-dom";
import { RegisterPath } from "@Accounts";

export const LogInPath = "LogIn";

export function LogInPage(): JSX.Element {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();

    if (email == "") {
      alert("You need to enter a email!");
      return;
    }

    if (password == "") {
      alert("You need to enter a password!");
      return;
    }

    const succeeded = await LogInCommand(email, password);

    if (succeeded) {
      // TODO: Create route consts.
      navigate("/");
    } else {
      // TODO: Provide access to error message.
      alert("Failed to log in 😱");
    }
  };

  return (
    <div>
      <Form>
        <h1>Hello again!</h1>
        <Form.Group>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            value={email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={password}
          />
        </Form.Group>
        <Button onClick={onSubmit} type="submit" variant="primary">
          Log In
        </Button>
      </Form>
      <Link to={`/${RegisterPath}`}>
        Don&apos;t have an account yet? Register here.
      </Link>
    </div>
  );
}
