import React from "react";
// import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddSong from "./AddSong";
import { useAuth0 } from "@auth0/auth0-react";

const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr",
    gridGap: "16px",
    alignItems: "start",
    justifyContent: "start",
    height: "100vh",
    backgroundColor: "#38386f",
    color: "white",
    padding: "16px",
  },
  header: {
    gridRow: "1",
    gridColumn: "1",
    justifySelf: "start",
  },
  avatar: {
    width: "80px",
    height: "80px",
  },
  songGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "16px",
    justifyItems: "center",
  },
  songCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    maxWidth: "400px",
    width: "100%",
  },
  coverImage: {
    width: "100%",
    height: "auto",
    marginBottom: "16px",
  },
};

const MyPage = () => {
  const { user } = useAuth0();
  const userName = "Your Band Name";
  // const avatarUrl = 'https://example.com/avatar.jpg';
  const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      coverUrl: "https://example.com/song1.jpg",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      coverUrl: "https://example.com/song2.jpg",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      coverUrl: "https://example.com/song3.jpg",
    },
    {
      title: "Song 1",
      artist: "Artist 1",
      coverUrl: "https://example.com/song1.jpg",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      coverUrl: "https://example.com/song2.jpg",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      coverUrl: "https://example.com/song3.jpg",
    },
    {
      title: "Song 1",
      artist: "Artist 1",
      coverUrl: "https://example.com/song1.jpg",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      coverUrl: "https://example.com/song2.jpg",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      coverUrl: "https://example.com/song3.jpg",
    },
    // Add more songs with cover images here
  ];

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        {/* <Avatar alt={userName} src={avatarUrl} style={styles.avatar} /> */}
        <Typography variant="h3" component="h1">
          {userName}
        </Typography>
        <Typography variant="h6">{user.email}</Typography>
        <div className="my-3">
          <AddSong />
        </div>
      </div>
      <div style={styles.songGrid}>
        {songs.map((song, index) => (
          <Card key={index} style={styles.songCard}>
            <img
              src={song.coverUrl}
              alt={`Cover for ${song.title}`}
              style={styles.coverImage}
            />
            <CardContent>
              <Typography variant="h6">{song.title}</Typography>
              <Typography variant="subtitle1">{song.artist}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyPage;
