import { TaskCard } from "@/components/TaskCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTaskByUserId } from "@/services/task.service";
import { getUserFromLocalStorage } from "@/services/user.service";
import type { Task } from "@/types";
import { useEffect, useState } from "react";

const UserHome = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      const user = getUserFromLocalStorage();
      if (!user) {
        return;
      }
      const res = await getTaskByUserId(user._id);

      if (res) {
        setTasks(res?.tasks);
      }
    };

    fetchAllTasks();
  }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold text-2xl"> Assignments </CardTitle>
        </CardHeader>

        <CardContent className="w-full grid  grid-cols-3 gap-4 ">
          {tasks?.length === 0 && <p className="text-center col-span-full ">No data available </p>}
          {tasks?.length > 0 &&
            tasks?.map((task, i) => {
              return <TaskCard task={task} key={i} />;
            })}
          
        </CardContent>
      </Card>
    </>
  );
};

export default UserHome;

