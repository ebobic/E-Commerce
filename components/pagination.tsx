import Link from "next/link"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({currentPage, totalPages}: PaginationProps) {
    const prevDisabled = currentPage <= 1;
    const nextDisabled = currentPage >= totalPages;

    return (
        <div className="flex justify-center gap-4 p-12 items-center">


            {prevDisabled ? (
                <Link href={`?page=${currentPage - 1}`} className="pointer-events-none opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-5 h-5">
                            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
                    </svg>
                </Link>
            ) : (
                <Link href={`?page=${currentPage - 1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-5 h-5">
                            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
                    </svg>
                </Link>
            )}

            <p>Page {currentPage} of {totalPages}</p>


            {nextDisabled ? (
                <Link href={`?page=${currentPage + 1}`} className="pointer-events-none opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-5 h-5">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                    </svg>
                </Link>
            ) : (
                <Link href={`?page=${currentPage + 1}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-5 h-5">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                    </svg>
                </Link>
            )}
        </div>
    )
}