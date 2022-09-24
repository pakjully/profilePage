import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Components/Intro';
import Contacts from'./Components/Contacts';
import Main from './Components/Main';
import Footer from './Components/Footer';


function App () {
  return (
      <section>
        <div className='container'>
          <Intro />
          <Contacts />
          <Main />
          <Footer />
        </div>
      </section>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
)



