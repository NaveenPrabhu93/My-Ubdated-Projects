import React,  { useState, useRef } from "react";


export default function MusicPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const audioRef = useRef(null);
   
   

    const tracks = [
        {
        
          title: 'surviva',
          artist: 'Artist 1',
          src: '/audio/Surviva - SenSongsMp3.Co.mp3',
          trackno:'Track NO 1',
          image:'/images/Surviva-From-Vivegam--Tamil-2017-500x500.jpg',
        },
        {
          title: 'Chilla Chilla',
          artist: 'Artist 2',
          src: '/audio/Chilla-Chilla-MassTamilan.dev.mp3',
          trackno:'Track NO 2',
          image:'/images/images (1).jpeg',
        },
        {
            title: 'Gangstaa',
            artist: 'Artist 3',
            src: '/audio/Gangstaa-MassTamilan.dev.mp3',
            trackno:'Track NO 3',
            image:'/images/gangstaa-song-from-thunivu-creating-sensation_b_2512220914.jpg'
          },
          {
            title: 'Bang Bang',
            artist: 'Artist 4',
            src: '/audio/Bang_Bang_Bang-StarMusiQ.Com.mp3',
            trackno:'Track NO 4',
            image:'/images/sddefault.jpg'
          },
          {
            title: 'Pookkalae Sattru',
            artist: 'Artist 5',
            src: 'audio/04.Pookkalae Sattru Oyivedungal.mp3',
            trackno:'Track NO 5',
            image:'/images/images(2).jpg'
          },
          {
            title: 'Ethir Neechal',
            artist: 'Artist 6',
            src: 'audio/Ethir_Neechal-StarMusiQ.Com.mp3',
            trackno:'Track NO 5',
            image:'/images/ab67616d0000b273a19cdda1305f8a0a0a59b4a0.jpeg'
          },
          {
            title: 'Kadhal Aasai',
            artist: 'Artist 7',
            src: 'audio/Kadhal_Aasai-StarMusiQ.Com.mp3',
            trackno:'Track NO 5',
            image:'/images/maxresdefault.jpg'
          },
          {
            title: 'Nee Partha',
            artist: 'Artist 8',
            src: 'audio/Nee_Partha-VmusiQ.Com.mp3',
            trackno:'Track NO 5',
            image:'/images/Nee-Paartha-Vizhigal-Trending-Version-Tamil-2023-20230926175514-500x500.jpg'
          },
          {
            title: 'Lolita',
            artist: 'Artist 9',
            src: 'audio/Lolita - VmusiQ.Com.mp3',
            trackno:'Track NO 5',
            image:'/images/Engeyum-Kadhal-Tamil-2010-20190731133246-500x500.jpg'
          },
          {
            title: 'Nillayo',
            artist: 'Artist 10',
            src: 'audio/Nillayo-SenSongsMp3.Co.mp3',
            trackno:'Track NO 5',
            image:'/images/maxresdefault (1).jpg'
          },
        // Add more tracks as needed
      ];
    
      const playPause = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };
    
      const nextTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
        setIsPlaying(false);
      };
    
      const prevTrack = () => {
        setCurrentTrackIndex(
          (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
        );
        setIsPlaying(false);
      };


    
    return(
    <>
    
    <div className="main-div">
        <div className="title-div">
            <center>
                <br></br>
        <h6>MUSIC PLAYER PROJECT BY K.NAVEEN PRABHU</h6>
           </center>
        </div>
    
        <div className="play-list-div">
        <table>
        <thead>
          <tr>
            <th><center>Track.No</center></th>
            <th><center>Title</center></th>
            <th><center>Artist</center></th>
            
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, index) => (
            <tr key={index}>
                <td><center>{index+1}</center></td>
              <td><center>{track.title}</center></td>
              <td><center>{track.artist}</center></td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
        
    <div className="player-div">
    <center>
        <div className="music-player">
         
          
          <h2>{tracks[currentTrackIndex].title}</h2>
          <h3>{tracks[currentTrackIndex].artist}</h3>
          <img src={tracks[currentTrackIndex].image} alt=""/>
          <audio ref={audioRef} src={tracks[currentTrackIndex].src}></audio>
          </div>
          <br></br>
      <div className="controls">
        <button onClick={prevTrack} className="next-prev">Previous</button>
        <button onClick={playPause} className="play-pause">{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={nextTrack} className="next-prev">Next</button>
      </div>
        
     
      </center>
        </div>
        
    </div>
    </>
    )
}