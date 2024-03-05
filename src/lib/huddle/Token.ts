import { AccessToken, Role } from "@huddle01/server-sdk/auth";

export const dynamic: string = "force-dynamic";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

// Assuming `roomId` is a string. Adjust the type if necessary.
export async function createToken(roomId: string): Promise<string> {
  const accessToken = new AccessToken({
    apiKey: apiKey,
    roomId: roomId,
    role: Role.HOST,
    permissions: {
      admin: true,
      canConsume: true,
      canProduce: true,
      canProduceSources: {
        cam: true,
        mic: true,
        screen: true,
      },
      canRecvData: true,
      canSendData: true,
      canUpdateMetadata: true,
    },
    options: {
      metadata: {
        // You can add any custom attributes here which you want to associate with the user
        walletAddress: "axit.eth",
      },
    },
  });

  const token: string = await accessToken.toJwt();
  console.log("accessToken", token);
  return token;
}
