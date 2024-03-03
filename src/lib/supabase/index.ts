import { createClient } from "@supabase/supabase-js";
import { string } from "zod";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

interface Creds {
  email: string;
  password: string;
}

// *************User SignUp*********************

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

// *************User SignIn*********************

export const userSignIn = async (creds: Creds) => {
  let { data, error } = await supabase.auth.signInWithPassword(creds);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    // console.log(data);
    return data.user?.id;
  }
};

// *************Fetch all user address*********************

export const fetchuserAddr = async () => {
  let { data: users, error } = await supabase.from("users").select("address");
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    return users;
  }
};

// *************Insert User Data*********************

interface UserData {
  id: string;
  name: string;
  email: string;
  bio: string;
  studio: boolean;
  address: string;
}
// const udata = {
//   id: "bd29e902-48e4-43c2-b195-d705311d48f6",
//   name: "hleo3",
//   email: "hello@abc.sy4dc",
//   bio: "birreo",
//   address: "addresrthths",
//   studio: true,
// };
export const insertUserData = async (userData: UserData) => {
  console.log(userData);
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    console.log(data);
  }
};

// *************Insert Message*********************

interface Msg {
  to: string;
  from: string;
  message: string;
}

const udata1 = {
  to: "addr2",
  from: "addr1",
  message: "hello world!",
};
export const insertMessage = async (msgData: Msg) => {
  console.log(msgData);
  const { data, error } = await supabase
    .from("chats")
    .insert([msgData])
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    console.log(data);
  }
};

// *************Fetch to message*********************

export async function fetchtoMessage(address: string) {
  let { data: chats, error } = await supabase
    .from("chats")
    .select("*")
    .eq("to", address);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    console.log(chats);
  }
}

// *************Fetch to message*********************

export async function fetchfromMessage(address: string) {
  let { data: chats, error } = await supabase
    .from("chats")
    .select("*")
    .eq("from", address);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    console.log(chats);
    // Handle success
  }
}
// *************User SignIn*********************
// *************User SignIn*********************
// *************User SignIn*********************

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
