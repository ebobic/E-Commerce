'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const NextBreadcrumb = ({homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks}: TBreadCrumbProps) => {

const paths = usePathname()
const pathNames = paths.split('/').filter( path => path )

    return (
        <nav className='px-4 w-1/10'>
            <ul className={containerClasses}>
                <li className={`${listClasses} flex`}>
                    <Link
                        href={'/'}
                        className='flex items-center ms-1 text-sm font-medium text-gray-400 hover:text-blue-900 md:ms-2'
                    >
                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        {homeElement}
                    </Link>
                </li>
                {pathNames.length > 0}
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link

                    return (
                        <React.Fragment key={index}>
                            <li className={`${itemClasses} flex text-gray-400`} >
                                <Link
                                    href={href}
                                    className='flex items-center ms-1 text-sm font-medium hover:text-blue-900 md:ms-2'
                                >
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    {itemLink}
                                </Link>
                            </li>
                            {pathNames.length !== index + 1}
                        </React.Fragment>
                    )
                })
            }
            </ul>
        </nav>
    )
}

export default NextBreadcrumb
