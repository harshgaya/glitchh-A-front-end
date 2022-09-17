import button from "./../../assets/images/EditButton.png"
import React from 'react';
import Modal from 'react-modal';
import cover1 from "./../../assets/images/cover1.png"
import cover2 from "./../../assets/images/cover2.png"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "rgb(21,15,15,0.99) ",
    borderRadius: "20px",
    border: "1px solid rgb(255,255,255,0.1)",
    width: "70%"

  },
  overlay: {
    backgroundColor: 'rgb(41, 40,40,0.8)'
  },
};
Modal.setAppElement('#root');

function EditButtonimage() {
  let subtitle;
  let rowStyle;
  let cancelButton;
  let lineStyle;
  let imgStyle;
  let insideRowStyle;
  let submitButton;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);

  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#fff';
    subtitle.style.fontSize = '30px';
    rowStyle.style.overflow = "hidden";
    rowStyle.style.fontFamily = 'Poppins';
    cancelButton.style.color = "white";
    cancelButton.style.marginLeft = "130px";
    cancelButton.style.cursor = "pointer";
    lineStyle.style.color = "#8E8B8B";
    imgStyle.style.textAlign = "center";
    insideRowStyle.style.paddingTop = "45px";
    submitButton.style.color = "white";
    submitButton.style.textAlign = "center";
    submitButton.style.background = "#E82352";
    submitButton.style.borderRadius = "10px";
    submitButton.style.padding = "9px 18px";
    submitButton.style.marginTop = "35px ";
    submitButton.style.maxWidth = "320px";
    submitButton.style.marginLeft = "auto";
    submitButton.style.marginRight = "auto";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="editButtonImage">
      <button onClick={openModal} className="logoButton"><img src={button} alt="editButton" /></button>
      <Modal

        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Model for Cover Image"


      >
        <div >
          <div className="row" ref={(_rowStyle) => (rowStyle = _rowStyle)}>
            <div className="col-10">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select your cover image</h2>
            </div>
            <div className="col-2">
              <a ref={(_cancelButton) => (cancelButton = _cancelButton)} onClick={closeModal}>Cancel</a>

            </div>

          </div>
          <hr ref={(_lineStyle) => (lineStyle = _lineStyle)} />
          <div className="row">
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover1} alt="" image={cover1} /></a>
            </div>
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover2} alt="" /></a>

            </div>
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover1} alt="" /></a>

            </div>
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover2} alt="" /></a>
            </div>

          </div>
          <div className="row" ref={(_insideRowStyle) => (insideRowStyle = _insideRowStyle)}>
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover1} alt="" /></a>
            </div>
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover2} alt="" /></a>

            </div>
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover1} alt="" /></a>

            </div>
            <div className="col-3" ref={(_imgStyle) => (imgStyle = _imgStyle)}>
              <a href=""><img src={cover2} alt="" /></a>
            </div>

          </div>
          <div ref={(_submitButton) => (submitButton = _submitButton)}>
            <a >Submit</a>

          </div>
        </div>


      </Modal>

    </div>


  );
}

export default EditButtonimage;