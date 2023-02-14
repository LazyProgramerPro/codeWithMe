import { Button, Modal } from 'antd';
import { useState } from 'react';

const ButtonComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Xem chi tiết
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ButtonComponent;