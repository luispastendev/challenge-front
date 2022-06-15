import Comments from '../components/comments';
import { Navbar } from '../components/navbar';

const Dashboard = () => {

  return (<div className='bg-gray-50'>
    <Navbar />
    <Comments />
  </div>);
}

export default Dashboard