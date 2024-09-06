import React, { useState, useEffect } from 'react';
import './index.css';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
function Podcast() {
    const [currentAudio, setCurrentAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playingEpisode, setPlayingEpisode] = useState(null);
    const handlePlayPause = (audioFile, episodeIndex) => {
        if (currentAudio) {
            if (isPlaying && playingEpisode === episodeIndex) {
                currentAudio.pause();
                setIsPlaying(false);
                setPlayingEpisode(null);
            } else {
                currentAudio.pause();
                const newAudio = new Audio(audioFile);
                newAudio.play();
                setCurrentAudio(newAudio);
                setIsPlaying(true);
                setPlayingEpisode(episodeIndex);
                newAudio.onended = () => {
                    setIsPlaying(false);
                    setPlayingEpisode(null);
                };
            }
        } else {
            const newAudio = new Audio(audioFile);
            newAudio.play();
            setCurrentAudio(newAudio);
            setIsPlaying(true);
            setPlayingEpisode(episodeIndex);
            newAudio.onended = () => {
                setIsPlaying(false);
                setPlayingEpisode(null);
            };
        }
    };
    return (
        <div className='layout'>
            <h1>Perfect Voice, Timely Topics</h1>
            <div className='intro'>
                <div className='about'>
                    <h2>@UpileTalks</h2>
                    <h5>Get ready to join us on an exciting ride through our tech journey. We'll be sharing all about the growth we've made, the challenges faced, and the milestones reached along the way. Stay tuned for inspiring stories, valuable insights, and practical tips.</h5>
                </div>
                <img className='mic' src='Media/podcast.png' alt='Podcast microphone' />
            </div>
            <hr />
            <div className='episodes'>
                <div className='episode'>
                    <div className='description'>
                        <h4>Episode 1</h4>
                        <h3>Desire vs Control</h3>
                        <p className='para'>In this episode, we look at the instances of desire versus control referring to the book "Born a Crime.</p>
                    </div>
                    <div className="vl"></div>
                    <div className='play' onClick={() => handlePlayPause('Media/episode1.mp3', 0)}>
                        <h6>19.14m</h6>
                        <span className='icon'>{isPlaying && playingEpisode === 0 ? <FaPauseCircle /> : <FaPlayCircle />}</span>
                    </div>
                </div>
                <div className='episode'>
                    <div className='description'>
                        <h4>Episode 2</h4>
                        <h3>Mentorship and Networking</h3>
                        <p className='para'>The importance of mentorship and networking for women in Tech.</p>
                    </div>
                    <div className="vl"></div>
                    <div className='play' onClick={() => handlePlayPause('Media/episode2.mp3', 1)}>
                        <h6>17.30m</h6>
                        <span className='icon'>{isPlaying && playingEpisode === 1 ? <FaPauseCircle /> : <FaPlayCircle />}</span>
                    </div>
                </div>
                <div className='episode'>
                    <div className='description'>
                        <h4>Episode 3</h4>
                        <h3>Getting Started in Tech</h3>
                        <p className='para'>In this episode, we look back at our 6 months in AkiraChix.</p>
                    </div>
                    <div className="vl"></div>
                    <div className='play' onClick={() => handlePlayPause('Media/episode3.mp3', 2)}>
                        <h6>16.19m</h6>
                        <span className='icon'>{isPlaying && playingEpisode === 2 ? <FaPauseCircle /> : <FaPlayCircle />}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Podcast;