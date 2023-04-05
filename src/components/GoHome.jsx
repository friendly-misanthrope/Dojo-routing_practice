import { Link } from 'react-router-dom'

const GoHome = (props) => {
  return (
    <div>
      <Link to={'/home'} style={{fontSize: 5 + 'rem'}} >Go Home</Link>
    </div>
  );
}

export default GoHome;
