const express = require('express')
const { ZingMp3 } = require("zingmp3-api-full")
const app = express()
const port = 3321

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/api/v1/song/get', (req, res) => {
    const id = req.query.id
    ZingMp3.getSong(id).then(data => res.send(data))
})

app.get('/api/v1/playlist/get', (req, res) => {
    const id = req.query.id
    ZingMp3.getDetailPlaylist(id).then(data => res.send(data))
})

app.get('/api/v1/home/get', (req, res) => {
    ZingMp3.getHome().then((data) => {
        res.send(data)
      })
})

app.get('/api/v1/top100/get', (req, res) => {
    ZingMp3.getTop100().then((data) => {
        res.send(data)
      })
})

app.get('/api/v1/chart/get', (req, res) => {
    ZingMp3.getChartHome().then((data) => {
        res.send(data)
      })
})

app.get('/api/v1/new-release/get', (req, res) => {
    ZingMp3.getNewReleaseChart().then((data) => {
        res.send(data)
      })
})

app.get('/api/v1/song-info/get', (req, res) => {
    const id = req.query.id
    ZingMp3.getInfoSong(id).then(data => res.send(data))
})

app.get('/api/v1/artist/get',  (req, res) => {
    const id = req.query.id
    ZingMp3.getArtist(id).then(data => res.send(data))
})

app.get('/api/v1/lyric/get', (req, res) => {
    const id = req.query.id
    ZingMp3.getLyric(id).then(data => res.send(data))
})

app.get('/api/v1/search', (req, res)=>{
    const keyword = req.query.keyword
    ZingMp3.search(keyword).then(data => res.send(data))
})

app.get('/api/v1/mv/get', (req, res) => {
    const id = req.query.id
    ZingMp3.getVideo(id).then((data) => {
        res.send(data)
      })
})