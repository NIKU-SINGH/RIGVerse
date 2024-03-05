import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/router";
import { Switch } from "@/components/ui/switch";

// Form Validation
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userSignUp } from "@/lib/supabase";
import Loader from "@/components/Loader";
import Link from "next/link";

const formSchema = z.object({
  password: z.string().min(2).max(50),
  email: z.string().email(),
});

export function UserSignUp() {
  const [loader, setLoader] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoader(true);
    const id = await userSignUp(values);
    console.log(id);
    console.log(values);
    setSuccess(true);
    setLoader(false);
  }

  const handleSignIn = () => {
    console.log("Submitted");
    router.push("/sign-in");
    setSuccess(false);
  };
  // const handleSelect = () => {
  //   setSelected(!selected);
  // };

  return success ? (
    <Card className="w-full max-w-lg mx-auto my-4 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
      <CardHeader className="text-gray-200 text-center">
        <CardTitle>Thank for SignUp</CardTitle>
        <CardDescription className="text-md">
          Please verify email and sign in again
        </CardDescription>
        <Link
          href={"https://mail.google.com/mail/u/0/?tab=om#inbox"}
          className="text-blue-800 underline"
        >
          Open email
        </Link>
        <CardContent className="flex flex-col justify-center items-center pt-5">
          Already Verified!
          <Button type="button" onClick={handleSignIn} className="w-32 mx-auto">
            Sign-in
          </Button>
        </CardContent>
      </CardHeader>
    </Card>
  ) : (
    <Card className="w-full max-w-lg mx-auto my-4 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
      {loader && <Loader />}
      <CardHeader className="text-gray-200">
        <CardTitle>Register</CardTitle>
        <CardDescription>Get a chance to play amazing games.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="bg-transparent border-gray-700 w-full"
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-transparent border-gray-700 w-full"
                        id="name"
                        placeholder="Enter your password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <p>
              Already Signed Up click here to{" "}
              <Link href={"/sign-in"} className="text-blue-800 underline">
                sign in
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={form.handleSubmit(onSubmit)}
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl"
        >
          SUBMIT
        </Button>
      </CardFooter>
    </Card>
  );
}
