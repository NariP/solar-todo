import { Modal } from 'antd';
import React from 'react';

const showModal = (text: string) =>
  Modal.info({
    title: '더 보기',
    content: <p>{text}</p>,
    onOk() {},
  });
export default showModal;
