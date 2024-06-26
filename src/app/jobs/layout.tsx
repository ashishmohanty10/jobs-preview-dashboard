//

import Smallnavbar from "@/components/Smallnavbar";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Smallnavbar />
      <main className=" ">{children}</main>
    </div>
  );
}
