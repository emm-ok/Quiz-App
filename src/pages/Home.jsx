import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h2>HomePage</h2>
        <Link to='/quiz'>To Quiz</Link>
    </div>
  )
}

export default Home