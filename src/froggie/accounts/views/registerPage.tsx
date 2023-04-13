import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { RegisterCommand } from "../commands/registerCommand";
import { LogInPath } from "@Accounts";

export const RegisterPath = "Register";

export function RegisterPage(): JSX.Element {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();

    if (email == "") {
      alert("You need to enter a email!");
      return;
    }

    if (email == "") {
      alert("You need to enter a email!");
      return;
    }

    if (password == "") {
      alert("You need to enter a password!");
      return;
    }

    const succeeded = await RegisterCommand(email, name, password);

    if (succeeded) {
      // TODO: Create route consts.
      navigate("/");
    } else {
      // TODO: Provide access to error message.
      alert("Failed to register 😱");
    }
  };

  return (
    <div>
      <Form>
        <h1>Welcome to Froggie!</h1>
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
            onChange={(e) => setName(e.target.value)}
            placeholder="username"
            type="text"
            value={name}
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
          Register
        </Button>
      </Form>
      <Link to={`/${LogInPath}`}>Already a user? Log in here.</Link>
    </div>
  );
}
