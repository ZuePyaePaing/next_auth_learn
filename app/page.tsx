import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <main className=" h-full flex-col flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 to-red-800">
      <div className=" space-y-6 text-center">
        <h1
          className={cn(
            " text-6xl font-semibold drop-shadow-md text-white",
            font.className
          )}
        >
          Auth
        </h1>
        <p className=" text-white">A simple authentication service</p>
      </div>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Click Me
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
