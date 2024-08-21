import CallList from "@/components/CallList";
import React from "react";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <h1 className="text-4xl font-extrabold lg:text-7xl">Previous</h1>
      <CallList type="ended" />
    </section>
  );
};

export default Previous;
