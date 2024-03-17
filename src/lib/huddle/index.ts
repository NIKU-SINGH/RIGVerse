import axios from "axios";

export const createRoom = async () => {
  try {
    const response = await axios.post(
      "https://api.huddle01.com/api/v1/create-room",
      {
        title: "Huddle01-Test",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
      }
    );
    console.log("roomID : " + response.data.data.roomId);
    return response.data.data.roomId;
    // setToken(await createToken(response.data.data.roomId));

    // socket.emit("setroomId", { roomId: roomId });
    // Handle the response as needed
  } catch (error) {
    console.log(error);
  }
};
