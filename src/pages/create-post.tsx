import MatchCard from "@/components/Cards/MatchCard";
import UserSidebar from "@/components/Sidebar/UserSidebar";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayCard from "@/components/Cards/PlayCard";
import { SideNavbar } from "@/components/Sidebar/SideNavbar";
import { Button } from "@/components/ui/button";
import { Slider, SliderValue } from "@nextui-org/slider";

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
import { number, object, z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { ConnectWallet } from "@/lib/walletConnect";
import { Post, insertAds, insertPost } from "@/lib/supabase";
import { useMoralis } from "react-moralis";
import { uploadFile } from "@/lib/pinata";
import Loader from "@/components/Loader";
import Link from "next/link";
import { time } from "console";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { mintPostFn } from "@/lib/contractFuncationCall";

const formSchema = z.object({
  title: z.string().min(2).max(200),
  content: z.string().max(500),
});

const adSchema = z.object({
  amount: z.string(),
});

function Index() {
  const { account } = useMoralis();
  const router = useRouter();
  const [loader, setLoader] = React.useState(false);
  const [id, setId] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [time, setTime] = useState<SliderValue>(9);
  const [advertise, setAdvertise] = React.useState(false);
  const [file, setFile] = useState<File | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const adForm = useForm<z.infer<typeof adSchema>>({
    resolver: zodResolver(adSchema),
    defaultValues: {
      amount: "0",
    },
  });

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files && event.target.files[0];
    if (files) {
      setFile(files);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  async function onSubmitAd(values: z.infer<typeof adSchema>) {
    setLoader(true);

    const adData = {
      id,
      amount: Number(values.amount),
      time: Number(time.toString()),
      score: Number(values.amount) / Number(time.toString()),
    };
    await insertAds(adData);
    router.push("/explore");
    setLoader(false);
  }

  const handleMintPost = async (data: Post) => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum,
      "any"
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    await mintPostFn(signer, data);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoader(true);

    if (account && file) {
      const cid = await uploadFile(file);
      const data = {
        title: values.title,
        content: values.content,
        address: account || "",
        images:
          cid ||
          "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
        visibility: true,
        tags: ["1", "2"] || [],
        nft_address: "ss",
        likes: 0,
        reposts: 0,
      };
      const id = await insertPost(data);

      await handleMintPost(data);
      setId(id || "");
      // console.log(values);
    }
    setLoader(false);
    setSuccess(true);
  }
  return (
    <div>
      {loader && <Loader />}
      {success ? (
        <div className="flex">
          <div className="fixed">
            <SideNavbar />
          </div>
          <div className="flex w-full ml-32 md:ml-64 flex-col px-4 mt-4">
            <div className=" bg-purple-500 p-4 rounded-2xl">
              <h1 className="text-2xl text-gray-200 font-semibold">
                Advertise Post
              </h1>
            </div>
            <div className="text-white py-4 text-xl">
              Want to advertise this post?
            </div>
            <div className="my-10 text-white">
              <Form {...adForm}>
                <form
                  onSubmit={adForm.handleSubmit(onSubmitAd)}
                  className="space-y-4"
                >
                  <FormField
                    control={adForm.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter Amount</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="number"
                            className="bg-transparent border-gray-700 w-32"
                            placeholder="Enter your title"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="slider"
                    render={() => (
                      <FormItem>
                        <FormLabel>Enter Duration (in days)</FormLabel>
                        {/* <div>{time}</div> */}
                        <Slider
                          label="Time"
                          step={3}
                          showOutline={true}
                          color="secondary"
                          maxValue={30}
                          minValue={0}
                          getValue={(donuts) => {
                            setTime(donuts);
                            return `${donuts}`;
                          }}
                          defaultValue={9}
                          className="max-w-md"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
              <Button
                onClick={adForm.handleSubmit(onSubmitAd)}
                type="submit"
                className=" mt-10  hover:bg-blue-800 text-white "
              >
                Submit
              </Button>
              <Link href={"/explore"}>
                <Button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className=" mt-10 ml-3  bg-gray-100 hover:bg-gray-500 text-black font-bold py-2 px-4"
                >
                  Go home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Index;
