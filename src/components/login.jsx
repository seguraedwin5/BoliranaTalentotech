import logo from '../assets/logo_bolirana.jpg'
import login_google from '../assets/login_google.jpg'


export const Login = () => (
    <main>
      <aside>
        <img src={logo} alt="" />
        <h1>Dont let being a team of one slow you down</h1>
        <p>
          Webflow empowers freelancers to quickly build and iterate on visually
          stunning, fully functional websites — so you can take on more clients
          (and keep them).
        </p>
        <button>Start building</button>
      </aside>
      <div>
        <h1>Sign in to Bolirana</h1>
        <button className="button1">
          <img src={login_google} alt="" />
          Sign in with Google
        </button>
        <p>or sign in with email</p>
        <label htmlFor="">
          Username or Email
          <input type="email" name="" id="" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" name="" id="" />
        </label>
        <a href="">Forgot?</a>
        <button type="submit" className="button2">
          Sign in
        </button>
        <p>
          Dont have an account? <a href="">Sign up</a>
        </p>
      </div>
    </main>
  )