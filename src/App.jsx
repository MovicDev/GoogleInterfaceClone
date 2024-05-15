import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import InputF from './components/InputF'
import NavBar from './components/NavBar'
const Google = () => {
  return (
    <>
      <div>
          <NavBar />
          <h1 className='text-center pt-16'>Google</h1>
            <InputF />
            <Button />
      </div>
      <Footer />
    </>
  )
}

export default Google