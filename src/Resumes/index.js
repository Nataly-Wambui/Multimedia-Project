import './index.css'
import Hannah from '../images/Hannah.jpg';
import Nataly from '../images/Natalie.jpg';
import Faith from '../images/Faith.jpg';
import Esther from '../images/Esther.jpg';
import Sharon from '../images/Sharon.jpg';
import Logo from  '../images/Alogo.png';


const Resumes = () =>{
    const pdfUrl1 = 'https://drive.google.com/file/d/1zxsUrhD3WQYxtzdORIwxJWYHiIsvaBHy/view?usp=sharing'
    const pdfUrl2 = 'https://drive.google.com/file/d/1fD9Y2l6a3Kw4fX3u36b_NUBeuy724PVZ/view?usp=sharing'
    const pdfUrl3 = 'https://drive.google.com/file/d/1IGEELPAu6TOeHDi0scBBwFikZyIXU6xo/view?usp=sharing'
    const pdfUrl4 = 'https://drive.google.com/file/d/1HqqQxRBqNp9AncOaNH2_eE7v61oVl4pQ/view?usp=sharing'
    const pdfUrl5 = 'https://drive.google.com/file/d/1rMRaX073yOAWLlTmPhDAu6pyhrkN9O28/view?usp=sharing'
    return(
        <div id='resume'>
        <div className="team">
            <h1>OUR TEAM</h1>
        </div>
        <div className='profiles1'>
            <div className='image1'>
                <img src={Hannah}  alt='Hannah' className='images'/>
                <h4 className='title1'>Hannah Unyolo<br/> Software Developer<br/><a href={pdfUrl1} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
              
          </div>
            <div className='image2'>
                <img src={Nataly} alt='Nataly' className='images'/>
                <h4 className='title2'>Natalie Wambui<br/> Software Developer<br/><a href={pdfUrl2} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>
            <div className='image3'>
                <img src={Faith} alt='Faith' className='images'/>
                <h4 className='title3'>Faith Mutava<br/> Software Developer<br/><a href={pdfUrl3} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>
        </div>
        <div className='profile2'>
            <div className='image4'>
                <img src={Sharon} alt='Sharon' className='images'/>
                <h4 className='title4'>Sharon Njung'e<br/> Software Developer<br/><a href={pdfUrl4} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>
            <div className='image4'>
                <img src={Esther} alt='Esther' className='images'/>
                <h4 className='title5'>Esther Shiamagovi<br/> Software Developer<br/><a href={pdfUrl5} target='"_blank' rel='noopener nonreferrer' className='resume'>Resume</a></h4>
            </div>

        </div>
        <div className='footer'>
            <div className='part1'>
                <img src={Logo} alt='Logo' className='image'/>
            </div>
            <div className='part2'>
               <h3><b>Quick Links</b></h3>
               <p>Home</p>
               <p>Blogs</p>
               <p>About us</p>
               <p>Contact us</p>
            </div>
            <div className='part3'>
                <h3><b>Our patners</b></h3>
                <p>AkiraChix</p>
            </div>
            <div className='part4'>
                <h3><b>Privacy</b></h3>
                <p>Data Privacy</p>
                <p>General terms</p>

            </div>
        </div>
        <div className='footer2'>
            <h4>copyright@Upile 2024</h4>
        </div>
        </div>
        
    )
  };
  
  export default Resumes;