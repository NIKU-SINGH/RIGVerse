import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

export const ConnectWallet = () => {
  const {
    enableWeb3,
    isWeb3Enabled,
    account,
    deactivateWeb3,
    Moralis,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;

    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem("connected")
    ) {
      enableWeb3();
    }
  }, []);

  useEffect(() => {
    // Moralis
    Moralis.onAccountChanged((account: string | null) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null account found");
      }
    });
  }, []);

  return (
    <div>
      {account ? (
        <div className="cursor-pointer flex justify-center items-center gap-2 bg-white p-[6px] rounded-[15px] rounded-bl-[15px]">
          <p className="text-black">
            {account.slice(0, 7)}...
            {account.slice(account.length - 4)}
          </p>
          {/* <button
            className="Connect  mx-2"
            onClick={() => deactivateWeb3()}
          ></button> */}
        </div>
      ) : (
        <button
          className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl"
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected");
            }
          }}
          disabled={isWeb3EnableLoading}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
