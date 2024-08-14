"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const Call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    Call?.state.createdBy &&
    localParticipant.userId === Call.state.createdBy.id;

  if (!isMeetingOwner) return null;
  return (
    <Button
      onClick={async () => {
        await Call.endCall();
        router.push("/");
      }}
      className="bg-red-500"
    >
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
