import Swal from "sweetalert2";

export const ModalConfirm = async (): Promise<boolean> => {
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Quieres vender este producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, ¡venderlo!",
    cancelButtonText: "Cancelar",
  });

  return result.isConfirmed ?? false;

};
