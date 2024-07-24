import React from "react";
import { Input } from "@/components/ui/input"
import Navitems from "./Navitems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-50 shadow-md'>
        <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
            <div className="flex items-center gap-2">
                <img src={'/logo.png'} alt="logo" width={35} height={35} />
                <Input type="text" placeholder="Search" className="md:block hidden w-80 rounded-full bg-slate-200" />
            </div>
            <div className="flex items-center gap-5">
                <div className="md:block hidden"> 
                    <Navitems />
                </div>
                <div>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <Button className="rounded-full" variant={"secondary"}>
                            <SignInButton/>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar