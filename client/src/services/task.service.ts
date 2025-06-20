import API from "@/config/axios.config";

export const createTask = async (data) => {
  try {
    const res = await API.post(`task`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const getTasks = async () => {
  try {
    const res = await API.get(`task`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const getTaskByUserId = async (id:string) => {
  try {
    const res = await API.get(`task/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}