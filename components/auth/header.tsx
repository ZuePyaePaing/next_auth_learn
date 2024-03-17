import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className=" w-full flex items-center justify-center flex-col ">
      <h1 className={cn("text-xl font-semibold", font.className)}>Auth</h1>
      <p className=" text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
