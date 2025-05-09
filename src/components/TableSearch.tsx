"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TableSearch = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;
    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-auto flex text-xs md:flex items-center gap-2 rounded-full ring-[1.5px] ring-gray-400 px-2"
    >
      <Image src="/search.png" alt="search-icon" height={14} width={14} />
      <input
        className="focus:outline-none w-[200px] p-2 bg-transparent"
        type="text"
        placeholder="Search..."
      />
    </form>
  );
};

export default TableSearch;
