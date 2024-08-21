import CallList from "@/components/CallList";
import React from "react";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <h1 className="text-4xl font-extrabold lg:text-7xl">Recordings</h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;
