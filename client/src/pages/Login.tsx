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
import {  userLoginSchema } from "@/schema/userSchema";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {  userLogin } from "@/services/user.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
        },
  });
  const onSubmit = async (data) => {
    console.log(data);

    const res = await userLogin(data);

    if (res) {
      window.alert(res.message);

      form.reset();


      if (res?.user?.role === "admin") {
        navigate("/admin/user-list");
      } else {
        navigate("/user/home");
      }
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full  mb-3">
        <Card className="w-[25rem]">
          <CardTitle className="text-center">Login</CardTitle>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-col"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Add Email ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Add Password ..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="col-span-full flex justify-end">
                  <Button type="submit" variant={"outline"} className="">
                    Login
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

export default Login;
