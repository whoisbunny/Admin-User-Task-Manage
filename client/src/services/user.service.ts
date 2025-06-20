import API from "@/config/axios.config";
export const createUser = async (data) => {
  try {
    const res = await API.post(`user`, data);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const res = await API.get(`user`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (data) => {
  try {
    const res = await API.post(`user/login`, data);

    if (res.data) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
