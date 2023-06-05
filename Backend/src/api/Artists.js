const express = require("express");
const cassandra = require('cassandra-driver');


const cluster = new cassandra.Client({
  contactPoints: ['cql.cloud-14845.w0.us-east-1.aws.scylla.cloud'],
  localDataCenter: 'us-east-1',
  // keyspace: keyspace
});

const router = express.Router();

const artists = [
  {
    id: "1",
    name: "Aritist 1",
    artistId: "artist ka email",
    songs: [
      {
        title: "Song 1",
        src: "song1.mp3",
        cover: "song1-cover.jpg",
      },
      {
        title: "Song 2",
        src: "song2.mp3",
        cover: "song2-cover.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "Aritist 2",
    artistId: "artist2 ka email",
    songs: [
      {
        title: "Song 3",
        src: "song1.mp3",
        cover: "song1-cover.jpg",
      },
      {
        title: "Song 4",
        src: "song2.mp3",
        cover: "song2-cover.jpg",
      },
    ],
  },
  {
    id: "3",
    name: "Aritist 3",
    artistId: "artist2 ka email",
    songs: [
      {
        title: "Song 3",
        src: "song1.mp3",
        cover: "song1-cover.jpg",
      },
      {
        title: "Song 4",
        src: "song2.mp3",
        cover: "song2-cover.jpg",
      },
    ],
  },
];

router.get("/", (req, res) => {
  res.json({
    artists,
  });
});

module.exports = router;
