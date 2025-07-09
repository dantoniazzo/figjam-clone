import { SignInButton as SignInClerkButton } from "@clerk/clerk-react";

export const SignInButton = () => {
  return (
    <SignInClerkButton>
      <button className="bg-blue-100 w-fit mx-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Sign In
      </button>
    </SignInClerkButton>
  );
};
