import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ZOOM CLONE",
  description: "ZOOM clone With the getStream",
  icons: {
    icon: "/icons/logo.svg",
  },
};


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
