import { ToggleTaskFormModalButton } from "@/froggie/tasks/components/ToggleTaskFormModalButton";
import { Navbar } from "react-bootstrap";

export function Footer(): JSX.Element {
  return (
    <Navbar fixed="bottom">
      <ToggleTaskFormModalButton />
    </Navbar>
  );
}
