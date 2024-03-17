const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex justify-center items-ceter bg-[#6e2013] w-full h-full">
      {children}
    </div>
  );
};

export default AuthLayout;
