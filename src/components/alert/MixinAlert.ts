import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MixinAlert = (type: string, pesan: string) => {
  const MySwal = withReactContent(Swal);
  const Toast = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: type as "success" | "error" | "warning",
    title: pesan,
  });
};

export default MixinAlert;
