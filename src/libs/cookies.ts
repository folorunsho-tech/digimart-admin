import Cookies from "js-cookie";

const getCookie = (name: string) => {
  if (Cookies.get(name) === undefined) {
    return null;
  } else {
    return JSON.parse(Cookies.get(name));
  }
};

const setCookie = (name: string, value: string, expires: number) => {
  return Cookies.set(name, value, { expires });
};

const removeCookie = (name: string) => {
  return Cookies.remove(name);
};

export { getCookie, setCookie, removeCookie };
