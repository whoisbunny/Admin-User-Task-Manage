import { formatDate } from "@/config/dayjs.config";
import { Card, CardContent } from "./ui/card";
import type { Task } from "@/types";

export const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col ">
        <div className="flex gap-2">
          <h6 className="font-bold">Task Description: </h6>
          <p className="font-semibold">{task?.description}</p>
        </div>
        <div className="flex gap-2">
          <h6 className="font-bold">Assigned Date:</h6>
          <p className="font-semibold">{formatDate(task?.date,"DD/MM/YYYY")}</p>
        </div>
        <div className="flex gap-2">
          <h6 className="font-bold">Time Slot:</h6>
          <p className="font-semibold">{task?.timeSlot}</p>
        </div>
        <div className="flex gap-2">
          <h6 className="font-bold">User:</h6>
          <p className="font-semibold">{task?.userId?.username}</p>
        </div>


      </CardContent>
    </Card>
  );
}