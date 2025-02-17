import { Form } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/react/dist/routeModules'
import signInStylesHref from '../styles/signIn.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: signInStylesHref },
]

export default function SignIn() {
  return (
    <Form id='signIn' method='post'>
      <div className='info'>Sign in to your account</div>
      <div>
        <label>
          Email
          <div className='border-solid'>
            <input type='email' name='email' className='outline' />
          </div>
        </label>
      </div>

      <div>
        <label>
          Password
          <div>
            <input type='password' name='password' className='outline' />
          </div>
        </label>
      </div>

      <button type='submit'>Sign in</button>
    </Form>
  )
}
