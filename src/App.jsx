import './App.css'
import Navbar from './components/navbar/Navbar'
import Allrouts from './components/Route/Allrouts'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />

        <main className="app_main">
          <Allrouts />
        </main>
      </div>
    </>
  )
}

export default App
