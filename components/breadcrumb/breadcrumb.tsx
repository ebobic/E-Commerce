"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { handleBreadcrumbSegments } from "./handle-breadcrumb-pathname";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  // Build raw segments for hrefs and alignment
    const pathNames = paths
        .split("/")
        .filter((p) => p)
        .filter((seg) => seg !== "pages" && seg !== "admin");

  // Resolve display labels (IDs -> product titles)
  const displaySegments = handleBreadcrumbSegments(paths);

  return (
    <nav className="px-4">
      <ul className={containerClasses}>
        <li className={`${listClasses} flex`}>
          <Link
            href={"/"}
            className="flex items-center ms-1 text-sm font-medium text-gray-400 hover:text-blue-900 md:ms-2"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            {homeElement}
          </Link>
        </li>
        {displaySegments.map((link, index) => {
          let href = `/pages/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          // Use displaySegments for label, fallback to original link
            let label = displaySegments[index] ?? link;
            console.log("label: ", label);
          let itemLink = capitalizeLinks
            ? label[0].toUpperCase() + label.slice(1, label.length)
            : label;

          return (
            <React.Fragment key={index}>
              <li className={`${itemClasses} flex text-gray-400`}>
                <Link
                  href={href}
                  className="flex items-center ms-1 text-sm font-medium hover:text-blue-900 md:ms-2"
                >
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  {itemLink}
                </Link>
              </li>
              {/* separator spacer is handled by the chevron icon above */}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default NextBreadcrumb;
