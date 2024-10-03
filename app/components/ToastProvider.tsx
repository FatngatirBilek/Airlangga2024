import { NextPage } from 'next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

const ToastProvider: NextPage<Props> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default ToastProvider;
