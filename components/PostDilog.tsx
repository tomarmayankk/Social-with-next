import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Profilephoto from "./shared/Profilephoto";
import { Ghost, Images } from "lucide-react";
import { useRef, useState } from "react";
import { readFileAsDataUrl } from "@/lib/utils";
import next from "next";
import Image from "next/image";

const PostDilog = ({
  setOpen,
  open,
  src,
}: {
  open: any;
  setOpen: any;
  src: string;
}) => {
  const inputref = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const fileImageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedFile(dataUrl);
    }
  };
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <Profilephoto src={src} />
            <div>
              <h1>username</h1>
              <p className="text-xs">Post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action="">
          <div className="flex flex-col">
            <Textarea
              id="name"
              name="Input text"
              placeholder="type your message here"
              className="border border-none text-lg focus-visible:ring-0"
            />
            <div className="my-4">
              {selectedFile && (
                <Image 
                src={selectedFile}
                  alt="preview-image"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
          <DialogFooter>
            <div className="flex items-center gap-4">
              <input
              onChange={fileImageHandler}
                ref={inputref}
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
              />
              <Button type="submit">Post</Button>
            </div>
          </DialogFooter>
        </form>
        <Button
          onClick={() => inputref?.current?.click()}
          variant={"ghost"}
          className="hover:bg-gray-200 gap-2"
        >
          <Images className="text-blue-500" />
          <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default PostDilog;
