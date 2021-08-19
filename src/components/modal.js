import { Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalElement = ({ isOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </div>
        <ModalBody>
          <p>You have registered succssesfully!</p>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
};

export default ModalElement;
