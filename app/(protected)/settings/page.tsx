import { auth, signOut } from "@/auth";

type Props = {};

const Setting = async (props: Props) => {
  const sessino = await auth();
/* clident side မှာ  server side  ကိုသုံးခြင်လို့ use server ကို သုံးခြင်တဲ့နေရာမှာ ကြေငြာပေးထားတယ် */
  return (
    <div>
      {JSON.stringify(sessino)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default Setting;
