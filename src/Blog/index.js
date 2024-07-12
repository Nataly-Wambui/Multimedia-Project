
import './index.css';
import { Link} from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog'>
            <h1>AVAILABLE BLOGS</h1>
            <div className='container'>
                <div>
                    <img className='image' src="Images/bornacrime.jpeg" alt='born a crime picture'/>
                </div>

                <div className='description'>
                    <p className='date'>10.07.24</p>
                    <h3>BORN A CRIME</h3>
                    <p>Stories from a South African Childhood is an autobiographical comedy book written by South African comedian Trevor Noah, published in 2016</p>

                 
                    <Link to="/read-more" className='read'>Read More</Link>
                

                </div>
            </div>
        </div>
    );
};

export default Blog;
