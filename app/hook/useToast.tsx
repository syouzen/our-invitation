import {ReactNode} from 'react';
import {toast} from 'react-toastify';

const useToast = () => {
  const toastId = 'our-wedding-toast-id';

  const showToast = (msg: string | ReactNode) => {
    if (toast.isActive(toastId)) {
      toast.update(toastId, {
        render: msg,
      });
    } else {
      toast(msg, {
        toastId,
      });
    }
  };

  return {showToast};
};

export default useToast;
