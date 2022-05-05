import { IconUser } from '@tabler/icons'
import './../styles/Header.css'

const Header = () => {
  return (
    <header>
      <IconUser className='logo' />
      <div>
        <h1>CV PROJECT</h1>
        <p>Build your curriculum and export it</p>
      </div>
    </header>
  )
}

export default Header
