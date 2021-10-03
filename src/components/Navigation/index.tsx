import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="bg-gray-800 flex justify-center items-center gap-10 h-16">
      <Link to="/library">
        <h3 className="hover:opacity-70 transition-opacity">
          Library
        </h3>
      </Link>
      <Link to="/search">
        <h3 className="hover:opacity-70 transition-opacity">
          Search
        </h3>
      </Link>
    </div>
  )
}

export default Navigation;