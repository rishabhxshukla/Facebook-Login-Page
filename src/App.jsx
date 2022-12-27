import './App.css'

function App()
{
  return (
    <>
    <div className="container">
        <div className="info">
            <h1>facebook</h1>
            <p>Facebook helps you connect and share <br/> with the people in your life.</p>
        </div>


        <div className="form">
            <input type="text" placeholder="Email address or phone number" />
            <input type="password" placeholder="Password" />
            <button id='login'>Log In</button>
            <a href="#">Forgotten password?</a>
            <p id='line'/>
            <button id="createNew">Create New Account</button>
        </div>
    </div>
    </>
  )
}

export default App