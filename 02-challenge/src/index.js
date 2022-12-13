import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const root =document.getElementById('root');

const header = (
  <>
    <div className="heading">
        <h1>SUBSCRIBE</h1>
        <p>Sign Up with your email address to receive news and updates</p>

        <form>
          <label>
            <input type="text" placeholder="First name" name="First Name" />
          </label>

          <label>
            <input type="text" placeholder="Last name" name="Last Name" />
          </label>

          <label>
            <input type="email" placeholder="Email-Id" name="email" />
          </label>
        </form>
        <div className="vertical-center">
        <button>Subscribe</button>
        </div>
           
        
    </div>
  </>
)

ReactDOM.render(header,root);


