"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  // Hide pagination when there's only one page or no pages
  if (totalPages <= 1) {
    return null;
  }

  // Generate page links with preserved parameters
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-4 p-12 items-center">
      {prevDisabled ? (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="pointer-events-none opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            viewBox="0 -960 960 960"
            width="16px"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </Link>
      ) : (
        <Link href={createPageUrl(currentPage - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            viewBox="0 -960 960 960"
            width="16px"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </Link>
      )}

      <p>
        Page {currentPage} of {totalPages}
      </p>

      {nextDisabled ? (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="pointer-events-none opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            viewBox="0 -960 960 960"
            width="16px"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </Link>
      ) : (
        <Link href={createPageUrl(currentPage + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            viewBox="0 -960 960 960"
            width="16px"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </Link>
      )}
    </div>
  );
}
