import React, {useState,useEffect} from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
const styles = {
    root: {
      backgroundColor: '#73c3d2',
      minHeight: '100vh',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    artistCard: {
      backgroundColor: '#31b6c9',
      borderRadius: '4px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
      marginBottom: '16px',
      width: '100%',
    },
    artistCardContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '16px',
        justifyItems: 'center',
    },
    artistName: {
      marginTop: '16px',
      marginBottom: '8px',
      textColour: 'white',
    },
    songCard: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
      padding: '8px',
    },
    songCover: {
      width: '50px',
      height: '50px',
      marginRight: '8px',
      borderRadius: '4px',
    },
    musicPlayer: {
      marginTop: '16px',
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
      padding: '16px',
    },
  };
  
  const HomePage = () => {
    const [artists, setArtists] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/api/Artists')
        .then((res)=> setArtists(res.data.artists));
    },[]);
    // const artists = [
    //   {
    //     name: 'Artist 1',
    //     songs: [
    //       {
    //         title: 'Song 1',
    //         src: 'song1.mp3',
    //         cover: 'song1-cover.jpg',
    //       },
    //       {
    //         title: 'Song 2',
    //         src: 'song2.mp3',
    //         cover: 'song2-cover.jpg',
    //       },
    //       {
    //         title: 'Song 1',
    //         src: 'song1.mp3',
    //         cover: 'song1-cover.jpg',
    //       },
    //       {
    //         title: 'Song 2',
    //         src: 'song2.mp3',
    //         cover: 'song2-cover.jpg',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Artist 2',
    //     songs: [
    //       {
    //         title: 'Song 3',
    //         src: 'song3.mp3',
    //         cover: 'song3-cover.jpg',
    //       },
    //       {
    //         title: 'Song 4',
    //         src: 'song4.mp3',
    //         cover: 'song4-cover.jpg',
    //       },
    //       {
    //         title: 'Song 3',
    //         src: 'song3.mp3',
    //         cover: 'song3-cover.jpg',
    //       },
    //       {
    //         title: 'Song 4',
    //         src: 'song4.mp3',
    //         cover: 'song4-cover.jpg',
    //       },
    //     ],
    // },
    // {
    //     name: 'Artist 3',
    //     songs: [
    //       {
    //         title: 'Song 1',
    //         src: 'song1.mp3',
    //         cover: 'song1-cover.jpg',
    //       },
    //       {
    //         title: 'Song 2',
    //         src: 'song2.mp3',
    //         cover: 'song2-cover.jpg',
    //       },
    //       {
    //         title: 'Song 1',
    //         src: 'song1.mp3',
    //         cover: 'song1-cover.jpg',
    //       },
    //       {
    //         title: 'Song 2',
    //         src: 'song2.mp3',
    //         cover: 'song2-cover.jpg',
    //       },
    //     ],
    //   },
    // ];
  if(artists === null ) return <div>loading</div>
    return (
      <div style={styles.root}>
        {artists.map((artist, index) => (
          <Card key={index} style={styles.artistCard}>
             <div className="container-fluid">
                 <Typography variant="h5" component="h2" color={"#fff"} fontWeight={"bold"} style={styles.artistName}>
                {artist.name}
              </Typography>
              </div>
            <CardContent style={styles.artistCardContent}>
              {artist.songs.map((song, songIndex) => (
                <Card key={songIndex} style={styles.songCard}>
                  <img src={song.cover} alt="Song Cover" style={styles.songCover} />
                  <Typography variant="body1" component="p">
                    {song.title}
                  </Typography>
                </Card>
              ))}
            </CardContent>
          </Card>
        ))}
        <div style={styles.musicPlayer}>
          <ReactAudioPlayer
            src={artists[0].songs[0].src} // Sample song URL
            autoPlay={false}
            controls
          />
        </div>
      </div>
    );
  };
  
export default HomePage;
