import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex justify-center items-center my-28">
      <SignIn />
    </div>
  );
};

export default page;
