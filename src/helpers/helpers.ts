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

// eslint-disable-next-line no-extend-native

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
