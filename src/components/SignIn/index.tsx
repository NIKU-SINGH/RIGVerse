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
import {
  fetchuserAddr,
  insertUserData,
  userSignIn,
  userSignUp,
} from "@/lib/supabase";
import Loader from "@/components/Loader";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { ConnectWallet } from "@/lib/walletConnect";
import Studio from "@/pages/studio";

const formSchema = z.object({
  password: z.string().min(2).max(50),
  email: z.string().email(),
});
const userFormSchema = z.object({
  username: z.string().min(2).max(20),
  bio: z.string().min(2).max(100),
  studio: z.boolean(),
});

export function UserSignIn() {
  const { account } = useMoralis();
  const [selected, setSelected] = React.useState(false);
  const [id, setId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [isNewUser, setNewUser] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const userForm = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      username: "",
      bio: "",
      studio: false,
    },
  });

  React.useEffect(() => {
    const checkNewUser = async () => {
      interface MyObject {
        address: string;
      }
      function findAddress(arr: MyObject[], targetAddress: string): number {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].address === targetAddress) {
            return i; // Address found, return its index
          }
        }
        return -1; // Address not found
      }
      const myArray = (await fetchuserAddr()) || [];
      const targetAddress: string = `${account}`;
      const index = findAddress(myArray, targetAddress);

      if (index == -1) {
        setNewUser(true);
      }
    };
    checkNewUser();
  }, [account]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoader(true);
    setEmail(values.email);
    const id = await userSignIn(values);
    setId(id || "");
    if (!isNewUser) {
      router.push("/explore");
    } else {
      setSuccess(true);
    }
    setLoader(false);
  }
  async function userOnSubmit(values: z.infer<typeof userFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoader(true);
    if (account) {
      const userData = {
        id,
        name: values.username,
        email,
        bio: values.bio,
        address: account,
        studio: selected,
      };
      await insertUserData(userData);

      console.log(values);
    }
    if (selected) {
      router.push("/studio-register");
    } else {
      router.push("/explore");
    }
    setLoader(false);
  }

  const handleSignIn = () => {
    console.log("Submitted");
    router.push("/sign-in");
    setSuccess(false);
  };
  const handleSelect = () => {
    setSelected(!selected);
  };

  return success ? (
    <Card className="w-full max-w-lg mx-auto my-4 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
      <CardHeader className="text-gray-200">
        <CardTitle>User details</CardTitle>
        <CardDescription>add your profile details here</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...userForm}>
          <form
            onSubmit={userForm.handleSubmit(userOnSubmit)}
            className="space-y-4"
          >
            <FormField
              control={userForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>UserName</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-transparent border-gray-700 w-full"
                      placeholder="Enter your username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              //   control={userForm.control}
              name="wallet"
              render={() => (
                <FormItem>
                  <FormLabel>Wallet</FormLabel>
                  <ConnectWallet />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={userForm.control}
              name="bio"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-transparent border-gray-700 w-full"
                        placeholder="Enter your bio"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Label htmlFor="studio">Register as a Studio</Label>
                <Switch id="studio" onClick={handleSelect} />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={userForm.handleSubmit(userOnSubmit)}
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl"
        >
          SUBMIT
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <Card className="w-full max-w-lg mx-auto my-4 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
      {loader && <Loader />}
      <CardHeader className="text-gray-200">
        <CardTitle>Sign In</CardTitle>
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
                        placeholder="Enter your name"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
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
