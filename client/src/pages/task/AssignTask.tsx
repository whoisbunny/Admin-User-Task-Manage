import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addTaskSchema } from "@/schema/userSchema";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import type { User } from "@/types";
import { getUsers } from "@/services/user.service";
import { createTask } from "@/services/task.service";

const AssignTask = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      description: "",
      timeSlot: "",
      date: dayjs().format("YYYY-MM-DD"),
    },
  });

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await getUsers();

      if (res) {
        setUsers(res?.users);
      }
    };

    fetchAllUsers();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    const res = await createTask(data);

    if (res) {
      window.alert(res.message);

      form.reset();
      navigate("/admin/user-list");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full  mb-3">
        <Card className="w-[25rem]">
          <CardTitle className="text-center">Assign task User</CardTitle>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-col"
              >
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Date</FormLabel>
                      <FormControl>
                        <Input placeholder="Date ..." {...field} type="date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeSlot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Slots</FormLabel>
                      <FormControl>
                        <select {...field} className="border  rounded p-2">
                          <option value="12PM-02PM">12:00 PM - 02:00 PM</option>
                          <option value="02PM-04PM">02:00 PM - 04:00 PM</option>
                          <option value="04PM-06PM">04:00 PM - 06:00 PM</option>
                          <option value="06PM-08PM">06:00 PM - 08:00 PM</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Users</FormLabel>
                      <FormControl>
                        <select {...field} className="border  rounded p-2">
                          {users.map((user) => (
                            <option key={user?._id} value={user._id}>
                              {user.username}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Task Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Task Description ..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="col-span-full flex justify-end">
                  <Button type="submit" variant={"outline"} className="">
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AssignTask;
