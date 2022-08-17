import React from 'react'
import { Link } from 'gatsby'

const isActive = className => ({ isCurrent, location }) => {
  const activeClassName = { className: `${className} active` }
  if (isCurrent || location.pathname.startsWith('/projects/')) {
    return activeClassName
  }
  return { className }
}

const ProjectLinkComponent = ({ className, children, ...props }) => (
  <Link getProps={isActive(className)} {...props}>
    {children}
  </Link>
)

export default ProjectLinkComponent