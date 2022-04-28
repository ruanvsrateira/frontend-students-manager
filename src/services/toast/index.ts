import { toast } from "react-toastify";

export const alertToast = (msg: string, type: string) => {
    if(type == "success") {
        toast.success(`${msg}`, { position: toast.POSITION.TOP_LEFT });
    }

    if(type == "error") {
        toast.error(`${msg}`, { position: toast.POSITION.TOP_LEFT });
    }
}