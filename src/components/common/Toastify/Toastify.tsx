import React from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";

export const notify = (msg: string, type: TypeOptions = "success") => {
  return toast(msg, {
    type,
  });
};
const Toastify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toastify;
