import { Link, useRouteMatch } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import {} from '../../redux/reducers/musicSlice';

interface Props {
  src: string,
  coverimg?: string
}

const Result = ({ src, coverimg = 'https://via.placeholder.com/40' }: Props) => {
  const { path } = useRouteMatch();

  // const music = useSelector(state => state.music.src)
  // const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 h-16 w-full flex">
      <Link className="w-10/12 h-full hover:opacity-70 transition-opacity" to={`${path}track?src=${src}`}>
        <div className="h-full w-full flex items-center gap-5">
          <img src={coverimg} alt="" className="h-full w-auto object-contain" />
          <p>
            Name
          </p>
        </div>
      </Link>
      <button className="w-2/12">
        button
      </button>
    </div>
  )
};

export default Result;