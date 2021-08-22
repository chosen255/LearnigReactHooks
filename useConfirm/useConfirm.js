export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onCancel || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
