import * as React from "react"
import Footer from "./footer"
import Header from "./header"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Layout = ({ children }) => {
  const siteMetaData = useSiteMetadata()
  return (
    <div className='bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-400'>
      <Header siteMetaData={ siteMetaData } />
      <main>
        {children}
      </main>
      <Footer siteMetaData={ siteMetaData } />
    </div>
  )
}

export default Layout;