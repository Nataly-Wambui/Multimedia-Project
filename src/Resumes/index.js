import './index.css'
import Hannah from '../images/Hannah.jpg';
import Nataly from '../images/Natalie.jpg';
import Faith from '../images/Faith.jpg';
import Esther from '../images/Esther.jpg';
import Sharon from '../images/Sharon.jpg';
import Logo from  '../images/Logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Resumes = () =>{
    const pdfUrl1 = 'https://drive.google.com/file/d/1c7Vzh7w-FNAKaQOhU-Ie44jXKz09cMyM/view?usp=sharing'
    const pdfUrl2 = 'https://drive.google.com/file/d/1pC-ZVRkBH9g_oLOzsUwIGtFbHauVTYd6/view?usp=sharing'
    const pdfUrl3 = 'https://drive.google.com/file/d/1zJsLwUdb7OnNvk7xlT_u-vmPjA_swRZb/view?usp=sharing'
    const pdfUrl4 = 'https://drive.google.com/file/d/1RCDJoW9dTM3bEewsVKjtJsBItnOx2S1n/view?usp=sharing'
    const pdfUrl5 = 'https://drive.google.com/file/d/125RtSjMCv0bwCpLtt3HjMfeTphrYN6_h/view?usp=sharing'
    return (
        <div>
            <div className="team">
                <h1>OUR TEAM</h1>
            </div>
            <div className='profiles1'>
                <div className='hannah'>
                    <img src={Hannah} alt='Hannah' className='images' />
                    <h4 className='title1'>
                        Hannah Unyolo<br /> Software Developer<br />
                        <a href={pdfUrl1} rel='noopener noreferrer' className='resume'>Resume</a>
                    </h4>
                </div>
                <div className='nataly'>
                    <img src={Nataly} alt='Nataly' className='images' />
                    <h4 className='title2'>
                        Natalie Wambui<br /> Software Developer<br />
                        <a href={pdfUrl2} rel='noopener noreferrer' className='resume'>Resume</a>
                    </h4>
                </div>
                <div className='faith'>
                    <img src={Faith} alt='Faith' className='images' />
                    <h4 className='title3'>
                        Faith Mutava<br /> Software Developer<br />
                        <a href={pdfUrl3} rel='noopener noreferrer' className='resume'>Resume</a>
                    </h4>
                </div>
            </div>
            <div className='profile2'>
                <div className='sharon'>
                    <img src={Sharon} alt='Sharon' className='images' />
                    <h4 className='title4'>
                        Sharon Njung'e<br /> Software Developer<br />
                        <a href={pdfUrl4} rel='noopener noreferrer' className='resume'>Resume</a>
                    </h4>
                </div>
                <div className='esther'>
                    <img src={Esther} alt='Esther' className='images' />
                    <h4 className='title5'>
                        Esther Shiamagovi<br /> Software Developer<br />
                        <a href={pdfUrl5} rel='noopener noreferrer' className='resume'>Resume</a>
                    </h4>
                </div>
            </div>
            <div className='footer'>
                <div className='part1'>
                    <img src={Logo} alt='Logo' className='image' />
                    <div className='icons'>
                        <div className='facebook'>
                            <span><FaFacebookSquare /></span>
                        </div>
                        <div className='twitter'>
                            <span><FaXTwitter /></span>
                        </div>
                        <div className='youtube'>
                            <span><FaYoutube /></span>
                        </div>
                        <div className='instagram'>
                            <span><FaInstagram /></span>
                        </div>
                        <div className='linkedin'>
                            <span><FaLinkedinIn /></span>
                        </div>
                    </div>
                </div>
                <div className='part2'>
                    <h3><b>Quick Links</b></h3>
                    <h4>Home</h4>
                    <h4>Blogs</h4>
                    <h4>About us</h4>
                    <h4>Contact us</h4>
                </div>
                <div className='part3'>
                    <h3><b>Our partners</b></h3>
                    <h4>Akirachix</h4>
                </div>
                <div className='part4'>
                    <h3><b>Privacy</b></h3>
                    <h4>Data Privacy</h4>
                    <h4>General terms</h4>
                </div>
            </div>
            <div className='footer2'>
                <h4>copyright@Upile 2024</h4>
            </div>
        </div>
    )
  };
  export default Resumes;