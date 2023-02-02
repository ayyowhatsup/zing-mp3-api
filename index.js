const express = require('express')
const { zing } = require("zingmp3-api-next");
const path = require('path');
const app = express()
const port = 3321

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
var cors = require("cors")
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "Content-Type", "Authorization")
    next()
 })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Song
app.get('/api/v1/song/get', (req, res) => {
    const id = req.query.id
    zing.get_song(id).then(data => res.send(data))
})

//Playlist
app.get('/api/v1/playlist/get', (req, res) => {
    const id = req.query.id
    zing.get_playlist(id).then(data => res.send(data))
})

//Home
app.get('/api/v1/home/get', (req, res) => {
    zing.get_home().then((data) => {
        res.send(data)
    })
})

//Top 100
app.get('/api/v1/top100/get', (req, res) => {
    zing.get_top_100().then((data) => {
        res.send(data)
    })
})

//Chart
app.get('/api/v1/chart/get', (req, res) => {
    zing.get_home_chart().then((data) => {
        res.send(data)
    })
})

//New-Release
app.get('/api/v1/new-release/get', (req, res) => {
    zing.get_new_release_chart() .then((data) => {
        res.send(data)
    })
})

//Song-info
app.get('/api/v1/song-info/get', (req, res) => {
    const id = req.query.id
    zing.get_song_info(id).then(data => res.send(data))
})

//Artist
app.get('/api/v1/artist/get', (req, res) => {
    const id = req.query.id
    zing.get_artist(id).then(data => res.send(data))
})

//Lyrics
app.get('/api/v1/lyric/get', (req, res) => {
    const id = req.query.id
    zing.get_song_lyric(id).then(data => res.send(data))
})

// Search All
app.get('/api/v1/search/multi', (req, res) => {
    const keyword = req.query.keyword
    zing.search_all(keyword).then(data => res.send(data))
})

//MV
app.get('/api/v1/mv/get', (req, res) => {
    const id = req.query.id
    zing.get_mv(id).then((data) => {
        res.send(data)
    })
})

// Search by type
app.get("/api/v1/search", (req, res) => {
    const keyword = req.query.keyword
    const page = req.query.page
    const count = req.query.count
    const type = req.query.type
    zing.search_by_type(keyword, type, page, count).then(data => res.send(data) ) 
})

//Recommend keyword
app.get('/api/v1/recommend/get', (req, res) => {
    zing.get_recommend_keyword().then((data) => {
        res.send(data)
    })
})

//suggested keyword
app.get('/api/v1/suggested/get', (req, res) => {
    const keyword = req.query.keyword
    zing.get_suggestion_keyword(keyword).then((data) => {
        res.send(data)
    })
})

// zing.get_week_chart("IWZ9Z08I") 
/*
id: string (required)
week: number (optional)(default: 0)
year: number (optional)(default: 0)
*/

// zing.get_radio()

// zing.get_list_by_genre("IWZ9Z08I") https://zingmp3.vn/the-loai-nghe-si/Viet-Nam/IWZ9Z08I.html
/**
 * id: string (required)
    page: number (optional)(default: 1)
*/

// zing.get_hub_home()

// zing.get_hub_detail("IWZ9Z09A") https://zingmp3.vn/hub/Khuc-Nhac-Vui/IWZ9Z09A.html 
/** id: string */

// zing.get_list_mv("IWZ9Z08I") https://zingmp3.vn/the-loai-video/Viet-Nam/IWZ9Z08I.html
/**
 * id: string (required)
page: number (optional)(default: 1)
count: number (optional)(default: 15)
sort: string (optional)(default: "listen")
 */

// zing.get_category_mv("IWZ97FCE")  https://zingmp3.vn/the-loai-video/EDM-Viet/IWZ97FCE.html
/** id: string (required) */

// zing.get_suggested_playlists("ZODAB8EF") https://zingmp3.vn/album/Today-s-EDM-Hits-The-Chainsmokers-Alan-Walker-Alesso-Topic/ZODAB8EF.html
/** id: string (required) */

// zing.get_events()

// zing.get_event_info("IWZ97FZF") https://zingmp3.vn/event/IWZ97FZF.html