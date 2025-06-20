import dayjs from "dayjs";

export const formatDate = (date: string, format?: string) => {
  if (format !== "") {
    return dayjs(date).format(format);
  }
  return dayjs(date).format("YYYY-MM-DD");
};
