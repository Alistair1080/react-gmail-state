import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  // console.log(initialEmails)
  const [emails, updateEmails] = useState(initialEmails)


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */
          emails.map((email, index) => {
            // console.log(email)
            // console.log(index)
            const [starred, setStarred] = useState(email.starred)
            const [viewed, setViewed] = useState(email.read)
            let emailClass = ""
            // console.log(viewed)
            if (viewed === true) {
              emailClass = "email read"
            }
            else {
              emailClass = "email unread"
            }
            return (
              <li className={emailClass} key={index}>
                <div className='select'>
                  <input
                    className='select-checkbox'
                    type="checkbox" />
                </div>
                <div className="star">
                  <input 
                    className="star-checkbox"
                    type="checkbox"
                    checked={starred}/>
                </div>
                <div className="sender">{email.sender}</div>
                <div className="title">{email.title}</div>
              </li>
            )
          })
        }
      </main>
    </div>
  )
}

export default App

