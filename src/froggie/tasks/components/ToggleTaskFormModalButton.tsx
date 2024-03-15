import { Button, Modal } from "react-bootstrap";
import { TaskCreateForm } from "../forms/taskCreateForm";
import { useState } from "react";

export function ToggleTaskFormModalButton(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        + task
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <TaskCreateForm onSubmit={() => setShowModal(false)} />
      </Modal>
    </>
  );
}
