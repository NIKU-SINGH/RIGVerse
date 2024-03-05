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

export interface UserData {
  id: string;
  name: string;
  email: string;
  bio: string;
  studio: boolean;
  address: string;
  followers: number;
  following: number;
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

export interface Msg {
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
  let { data, error } = await supabase
    .from("chats")
    .select("*")
    .eq("to", address);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    return data;
  }
}

// *************Fetch from message*********************

export type Message = {
  id: number;
  created_at: string;
  to: string;
  from: string;
  message: string;
};

export type GroupedConversation = {
  addr: string;
  chat: Message[];
};

export function groupConversations(
  data: Message[],
  knownAddress: string
): GroupedConversation[] {
  if (!data || !knownAddress) {
    throw new Error("Missing required arguments: data and knownAddress");
  }

  data.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  const groupedByUser = data.reduce<Record<string, Message[]>>(
    (acc, message) => {
      const sortedPair = [message.to, message.from].sort();
      const user1 = sortedPair[0];
      const user2 = sortedPair[1];

      const uncommonUser = user1 !== knownAddress ? user1 : user2;

      acc[uncommonUser] = acc[uncommonUser] || [];
      acc[uncommonUser].push(message);
      return acc;
    },
    {}
  );

  const result: GroupedConversation[] = Object.entries(groupedByUser).map(
    ([user, messages]) => {
      return {
        addr: user,
        chat: messages,
      };
    }
  );

  return result;
}

export async function fetchfromMessage(address: string) {
  let { data, error } = await supabase
    .from("chats")
    .select("*")
    .eq("from", address);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // console.log(data);
    return data;
    // Handle success
  }
}

// *************Search Address*********************

export const searchAddress = async (addr: string) => {
  let { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("address", addr);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    console.log(data);
    return data;
    // Handle success
  }
};
// *************Insert Post*********************

export interface Post {
  title: string;
  content: string;
  address: string;
  images: string;
  visibility: boolean;
  tags: string[];
  nft_address: string;
  id?: number;
  reposts?: number;
  likes?: number;
}

export const insertPost = async (postData: Post) => {
  console.log(postData);
  const { data, error } = await supabase
    .from("posts")
    .insert([postData])
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    return data[0]?.id;
  }
};

// *************Update Post*********************

export const updatePost = async (id: number, repostCnt: number) => {
  const { data, error } = await supabase
    .from("posts")
    .update({ reposts: repostCnt + 1 })
    .eq("id", id)
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    return data[0]?.id;
  }
};

// *************Update Post Likes*********************

export const updatePostLike = async (id: number, likes: number) => {
  const { data, error } = await supabase
    .from("posts")
    .update({ likes: likes + 1 })
    .eq("id", id)
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    return data[0]?.id;
  }
};

// *************Insert RePost*********************

export const insertRePost = async (postData: Post) => {
  console.log(postData);
  const { data, error } = await supabase
    .from("posts")
    .insert([postData])
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    return data[0]?.id;
  }
};
// *************Fetch All Post*********************

export const fetchAllPost = async () => {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    // console.log(data);
    return data;
  }
};
// *************Fetch User Post*********************

export const fetchUserPost = async (address: string) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("address", address);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    // console.log(data);
    return data;
  }
};
// *************Fetch All User Data*********************

export const fetchUserData = async (address: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("address", address);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    // console.log(data);
    return data[0];
  }
};

// *************Insert advertise*********************

interface Ads {
  id: string;
  amount: number;
  time: number;
  score: number;
}

export const insertAds = async (adsData: Ads) => {
  console.log(adsData);
  const { data, error } = await supabase
    .from("adsense")
    .insert([adsData])
    .select();
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    console.log(data);
    return data;
  }
};

// *************User SignIn*********************
// *************User SignIn*********************
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
