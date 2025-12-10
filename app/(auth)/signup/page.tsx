import { SignUpForm } from "@/components/signup-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUp() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4 ">
      <SignUpForm />
    </main>
  );
}
