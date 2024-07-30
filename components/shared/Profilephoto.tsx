import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Profilephoto = ({ src }: { src: string }) => {
  return (
    <div>
      <Avatar>
        <AvatarImage src={src} alt="profile" />
      </Avatar>
    </div>
  );
};

export default Profilephoto;
