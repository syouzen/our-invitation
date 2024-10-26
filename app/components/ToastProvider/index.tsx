'use client';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

const ToastProvider = () => {
  return (
    <ToastContainer
      hideProgressBar
      position="top-center"
      limit={1}
      closeButton={false}
      autoClose={2000}
    />
  );
};

export default ToastProvider;
