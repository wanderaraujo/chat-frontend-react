import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure()

const Toastr = ({ messageToastr, status, setToastr }) => {

    if(status === 'SUCESSO'){

        toast.success(messageToastr, { });
    }else if (status === 'INFO'){

        toast.info(messageToastr, { });
    }else if (status === 'ERROR'){
        toast.error(messageToastr, { });
    }else if (status === 'LOGIN_USU'){
        toast(messageToastr);
    }else{
      
    }

    return status ? ( 
        <ToastContainer />
    ) : null 
} 
 
export default Toastr