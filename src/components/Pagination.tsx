"use client";
import { ITEMS_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrev = ITEMS_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEMS_PER_PAGE * (page - 1) + ITEMS_PER_PAGE < count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      {/* PREV BUTTON */}
      <button
        disabled={!hasPrev}
        onClick={() => changePage(page - 1)}
        className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs cursor-pointer hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      {/* PAGINATION BUTTONS */}
      <div className="flex items-center gap-2 text-sm">
        {Array.from(
          { length: Math.ceil(count / ITEMS_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <button
                key={pageIndex}
                onClick={() => changePage(pageIndex)}
                className={`px-2 cursor-pointer rounded-sm ${
                  page === pageIndex ? "bg-alisky" : ""
                }`}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>
      {/* NEXT BUTTON */}
      <button
        disabled={!hasNext}
        className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs cursor-pointer hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
