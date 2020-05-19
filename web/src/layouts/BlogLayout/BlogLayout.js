import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <a href="#" className="brand-logo center">
            <Link to={routes.home()}>
              Weather app
            </Link>
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.weather()}>Weather</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  )
}

export default BlogLayout
