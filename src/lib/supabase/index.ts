import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface Creds {
  email: string;
  password: string;
}

export const userSignUp = async (creds: Creds) => {
  let { data, error } = await supabase.auth.signUp(creds);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    return data.user?.id;
  }
};

export const userSignIn = async () => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: "shivamvermamotorola@gmail.com",
    password: "123456789",
  });
  console.log("data : ");
  console.log(data);
  console.log("error : " + error);
};

export async function uploadFile(file: File) {
  const { data, error } = await supabase.storage
    .from("avatar")
    .upload("public/avatar1.", file);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
  }
}

// id : 920739bc-30a7-4651-8ba4-1c0948799621
interface UserData {
  id: string;
  name: string;
  email: string;
  bio: string;
  studio: boolean;
  address: string;
}

const udata = {
  id: "bd29e902-48e4-43c2-b195-d705311d48f6",
  name: "hleo3",
  email: "hello@abc.sy4dc",
  bio: "birreo",
  address: "addresrthths",
  studio: true,
};
export const insertUserData = async (userData: UserData) => {
  // export const insertUserData = async () => {
  const { data, error } = await supabase.from("users").insert([udata]).select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    console.log(data);
  }
};

const udata1 = {
  to: "addr2",
  from: "addr1",
  message: "hello world!",
};
export const insertMessage = async () => {
  const { data, error } = await supabase
    .from("chats")
    .insert([udata1])
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    console.log(data);
  }
};
