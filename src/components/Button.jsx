
import Language from './Language'

const Button = () => {
  return (
    <div>
         <p className='flex mx-auto md:w-[20%]'>
            <button>Google Search</button>
            <button>i'm Feeling Lucky</button>
          </p>
          <Language />
    </div>
  )
}

export default Button