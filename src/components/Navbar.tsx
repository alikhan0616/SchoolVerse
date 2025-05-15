import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const Navbar = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string;
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex text-xs items-center gap-2 rounded-full ring-[1.5px] ring-gray-400 px-2">
        <Image src="/search.png" alt="search-icon" height={14} width={14} />
        <input
          className="focus:outline-none w-[200px] p-2 bg-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>
      {/* Icons & User */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="flex items-center rounded-full w-7 h-7 justify-center cursor-pointer">
          <Image src="/message.png" alt="message-icon" height={20} width={20} />
        </div>
        <div className="flex items-center rounded-full w-7 h-7 justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="message-icon"
            height={20}
            width={20}
          />
          <div className="absolute -top-3 -right-3 flex items-center justify-center text-white text-sm bg-purple-600 rounded-full w-5 h-5 p-1">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Ali Khan</span>
          <span className="text-[10px] text-right text-gray-500">{role}</span>
        </div>
        {/* <Image src='/avatar.png' alt="profile-icon" height={36} width={36} className="rounded-full" /> */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
