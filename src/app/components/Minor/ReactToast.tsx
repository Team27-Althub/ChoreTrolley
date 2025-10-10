// src/hooks/use-toast.ts
import { toast } from "react-toastify";

export const useToast = () => {
  return {
    toast: ({ title='', description='', type = "default" }) => {
      if (type === "success") toast.success(`${title}: ${description}`);
      else if (type === "error") toast.error(`${title}: ${description}`);
      else toast(`${title}: ${description}`);
    },
  };
};
