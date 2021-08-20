import { Modal, ModalBody } from 'reactstrap';

const ModalElement = ({ isOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalBody>
          <p>You have registered succssesfully!</p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalElement;
