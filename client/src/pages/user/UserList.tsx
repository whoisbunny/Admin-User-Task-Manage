import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserCard from "@/components/user/UserCard";
import { getUsers } from "@/services/user.service";
import type { User } from "@/types";
import { useEffect, useState } from "react";

const UserList = () => {
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

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold text-2xl"> User List</CardTitle>
        </CardHeader>

        <CardContent className="w-full grid  grid-cols-3 gap-4 ">
          {users?.length === 0 && <p className="text-center col-span-full ">No data available </p>}
          {users?.length > 0 &&
            users?.map((user, i) => {
              return <UserCard user={user} key={i} />;
            })}
          
        </CardContent>
      </Card>
    </>
  );
};

export default UserList;
