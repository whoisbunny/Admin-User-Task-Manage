import { formatDate } from "@/config/dayjs.config";
import { Card, CardContent } from "../ui/card";
import type { User } from "@/types";




const UserCard = ({user}:{user: User}) => {
  return (
    <>
      <Card className="w-full">
        <CardContent className="flex flex-col ">
          <div className="flex gap-2">
            <h6 className="font-bold">Employee Code : </h6>
            <p className="font-semibold">{user?.employeeCode}</p>
          </div>
          <div className="flex gap-2">
            <h6 className="font-bold">User Name :</h6>
            <p className="font-semibold">{user?.username}</p>
          </div>
          <div className="flex gap-2">
            <h6 className="font-bold">User Email:</h6>
            <p className="font-semibold">{user?.email}</p>
          </div>
          <div className="flex gap-2">
            <h6 className="font-bold">User Phone Number :</h6>
            <p className="font-semibold">{user?.phoneNumber}</p>
          </div>
          <div className="flex gap-2">
            <h6 className="font-bold">User Birth Date:</h6>
            <p className="font-semibold">
              {formatDate(user?.birthDate, "DD-MM-YYYY")}
            </p>
          </div>
          <div className="flex gap-2">
            <h6 className="font-bold">User Role:</h6>
            <p className="font-semibold">{user?.role}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
