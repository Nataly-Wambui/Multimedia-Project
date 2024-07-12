import './index.css';
import { FaPlayCircle } from "react-icons/fa";

function Podcast(){
    return(
        <div className='layout'>
            <h1>Perfect Voice, Timely Topics</h1>
            <div className='intro'>
                <div className='about'>
                    <h2>@TechieVibes</h2>
                    <h5>Get ready to join us on an exciting ride through our tech journey.We'll be sharing all about the growth we've made, the challenges faced, and the milestones reached along the way. Stay tuned for inspiring stories, valuable insights, and practical tips.</h5>
                </div>
                <img className='mic' src='Media/podcast.png'/>
            </div>
            <hr/>
            <div className='episodes'>
                <div className='episode'>
                    <div className='description'>
                    <h4>Episode 1</h4>
                    <h3>Navigating Imposter Syndrome</h3>
                    <p>In this episode we look at the strategies for overcoming self-doubt and building confidence in the Tech field</p>
                    </div>
                    <div class="vl"></div>
                    <div className='play'>
                    <h6>20.47m</h6>
                    <span className='icon'><FaPlayCircle /></span>
                    </div>
                </div>
                <div className='episode'>
                    <div className='description'>
                    <h4>Episode 2</h4>
                    <h3>Mentorship and Networking</h3>
                    <p>The importance of mentorship and networking for women in Tech, providing tips on finding mentors and building a strong professional network</p>
                    </div>
                    <div class="vl"></div>
                    <div className='play'>
                    <h6>17.30m</h6>
                    <span className='icon'><FaPlayCircle /></span>
                    </div>
                </div>
                <div className='episode'>
                    <div className='description'>
                    <h4>Episode 3</h4>
                    <h3>Getting Started in Tech</h3>
                    <p>In this episode we look back at our 6 months in AkiraChix, how the journey has been, and areas we felt we needed to practice resilience.</p>
                    </div>
                    <div class="vl"></div>
                    <div className='play'>
                    <h6>16.19m</h6>
                    <span className='icon'><FaPlayCircle /></span>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Podcast