import { TaskCard } from "@/components/TaskCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserCard from "@/components/user/UserCard";
import { getTasks } from "@/services/task.service";
import type { Task } from "@/types";

import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      const res = await getTasks();

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
          <CardTitle className="text-center font-bold text-2xl"> Task List </CardTitle>
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

export default TaskList;


