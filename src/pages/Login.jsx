import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    // Simulate login logic
    console.log(data);
    navigate('/'); // Redirect to home page after login
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username">Username</label>
              <Input id="username" {...register("username", { required: true })} />
              {errors.username && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input id="password" type="password" {...register("password", { required: true })} />
              {errors.password && <span>This field is required</span>}
            </div>
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;