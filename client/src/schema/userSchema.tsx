import * as z from "zod";
export const addUserSchema = z.object({
  username: z.string().min(1, { message: "username is required" }),

  email: z
    .string()
    .email("Invalid Email")
    .min(1, { message: "Password is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone Number is required" })
    .max(10, { message: "Max would be 10 degit" }),
  employeeCode: z.string().min(1, { message: "Employee Code is required" }),
  birthDate: z.string().min(1, { message: "Date is required" }),
});

export const addTaskSchema = z.object({
  description: z.string().min(1, { message: "Task Description is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  timeSlot: z.string().min(1, { message: "Please select time slots" }),
  userId: z.string().min(1, { message: "Please select user" }),
});
export const userLoginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(1, { message: "Password is required" }),
});
