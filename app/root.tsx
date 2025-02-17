import {
  Links,
  Meta,
  Outlet,
  Link,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import appStylesHref from './app.css?url'
// import './tailwind.css'
import type { LinksFunction } from '@remix-run/react/dist/routeModules'
// import tailwindConfig from 'tailwind.config'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <div id='menu'>
          <div id='menu-logo'>
            <Link to='/'>Shopi</Link>
          </div>
          <div>
            {/* <Form id="search-form" role="search">
                <input
                  id="q"
                  aria-label="Search contacts"
                  placeholder="Search"
                  type="search"
                  name="q"
                />
                <div id="search-spinner" aria-hidden hidden={true} /> */}
            {/* </Form> */}
            {/* <Form method="post">
                <button type="submit">New</button>
              </Form> */}
          </div>
          <nav>
            <ul>
              <li>
                <Link to='page/1'>Page 1</Link>
              </li>
              <li>
                <Link to='page/2'>Page 2</Link>
              </li>
              <li>
                <Link to='page/3'>Page 3</Link>
              </li>
            </ul>
          </nav>
          <div id='menu-user'>
            <Link to='/SignIn'>Sign in</Link>
          </div>
        </div>
        <div id='view'>
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
