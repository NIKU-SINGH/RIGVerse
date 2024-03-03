import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { ConnectWallet } from "@/lib/walletConnect";
import { insertPost } from "@/lib/supabase";
import { useMoralis } from "react-moralis";
import { uploadFile } from "@/lib/lighthouse";

const formSchema = z.object({
  title: z.string().min(2).max(200),
  content: z.string().max(500),
});

function Index() {
  const { account } = useMoralis();
  const [file, setFile] = useState<File | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files && event.target.files[0];
    if (files) {
      setFile(files);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    if (account && file) {
      console.log(file);
      await uploadFile(file);
      const data = {
        title: values.title,
        content: values.content,
        address: account || "",
        image:
          "" ||
          "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
        visibility: true,
        tags: ["1", "2"] || [],
        nft_address: "ss",
      };
      //       insertPost(data);
      console.log(values);
    }
  }
  return (
    <div>
      <div className="flex">
        <div className="fixed">
          <SideNavbar />
        </div>
        <div className="flex w-full ml-32 md:ml-64 flex-col px-4 mt-4">
          <div className=" bg-purple-500 p-4 rounded-2xl">
            <h1 className="text-2xl text-gray-200 font-semibold">
              Create a post
            </h1>
          </div>
          <div className="my-10 text-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-transparent border-gray-700 w-full"
                          placeholder="Enter your title"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-transparent border-gray-700 w-full"
                            placeholder="Enter your content"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>Image</FormLabel>
                        <Input
                          type="file"
                          onChange={handleUpload}
                          className="w-52 bg-transparent text-white  file:me-4
                                                                                file:rounded-lg file:border-0
                                                                                file:text-sm file:font-semibold  file:bg-blue-600 file:text-white
                                                                                hover:file:bg-blue-700"
                        />
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <FormField
                  //   control={userForm.control}
                  name="wallet"
                  render={() => (
                    <FormItem>
                      <FormLabel>Wallet Address</FormLabel>
                      <ConnectWallet />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <Button
              onClick={form.handleSubmit(onSubmit)}
              type="submit"
              className="w-36 mt-10  bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
      {/* <Card className="w-full max-w-lg mx-auto my-4 rounded-2xl bg-transparent border-2 text-gray-200 border-gray-700 bg-gray-800">
        <CardHeader className="text-gray-200">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Get a chance to play amazing games.</CardDescription>
        </CardHeader>
        <CardContent> */}
      {/* <Form {...form}>
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
      </Form> */}
      {/* </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={form.handleSubmit(onSubmit)}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl"
          >
            SUBMIT
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
}

export default Index;
