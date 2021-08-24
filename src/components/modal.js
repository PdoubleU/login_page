import { Modal, ModalBody } from 'reactstrap';

const ModalElement = ({ isOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalBody>
          <p>Buddy have registered succssesfully!</p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalElement;
