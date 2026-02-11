import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div
      className={`relative w-full h-full inline-block z-0 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 
      bg-light page-surface dark:bg-dark dark:page-surface-dark ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout
