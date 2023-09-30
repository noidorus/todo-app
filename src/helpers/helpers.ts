export const throttle = (callBack: () => void, timeout: number) => {
  let timer: null | NodeJS.Timeout = null;

  return function perform() {
    if (timer) return;
    timer = setTimeout(() => {
      callBack();
      clearTimeout(timer!);
      timer = null;
    }, timeout);
  };
};
