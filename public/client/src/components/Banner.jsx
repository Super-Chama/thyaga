import React from 'react';
import Modal from "./Modal";

const Banner = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    console.log('dd')
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="woocommerce-form-coupon-toggle">
      <div className="woocommerce-info">
        Have a Thyāga Voucher? <a onClick={openModal} href="#" className="showthyaga">Click here to redeem!</a>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onRequestClose={closeModal}
      >
      </Modal>
    </div>
  )
}

export default Banner
