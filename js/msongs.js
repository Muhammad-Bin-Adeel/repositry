
const createSongObjects = (songNames, artist, album) => {
    return songNames.map((name, index) => ({
        id: index + 1,
        name: name,
        artist: artist,
        album: album,
        song_url: `https://example.com/songs/${encodeURIComponent(name)}`, // URL structure
        song_duration: `${Math.floor(Math.random() * 4) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}` // Random duration between 2:00 and 5:59
    }));
};


function fatchSongs() {

    return new Promise(async (resolve) => {
        try {

        var songs = [];
        const json = await $.getJSON("/data/albums.json");
        // console.log(json);

        for(var i = 0; i < json.length; i++){

            let item = json[i];
            let sn = createSongObjects(item['songs'], item['artist']['name'], item['albumName'] );
            songs = [...songs, ...sn];
            
        }

        console.log(songs);
        // at this point we have 100 songs 
        // we need to pick 10 random songs 

        let ten_songs = [];

        for(var i = 0; i < 10; i++){
            
            var randomIndex = Math.floor(Math.random() * songs.length );
            console.log(randomIndex)

            let randomSong = songs[randomIndex];
            console.log(randomSong)
            ten_songs.push(randomSong)




        }



        for(var i = 0; i < ten_songs.length; i++) {

            let song = ten_songs[i];


            var html = `<tr id"Songs" class="border-b border-gray-700 hover:bg-gray-700">
                        <td class="px-4 py-3">${i + 1}</td>
                        <td class="px-4 py-3">${song['name']}</td>
                        <td class="px-4 py-3">${song['artist']}</td>
                        <td class="px-4 py-3">${song['album']}</td>
                        <td class="px-4 py-3">${song['song_duration']}</td>
                    </tr>`

            let cr = $("#songs-table-body");
            cr.append(html);        

        }








           

        } catch (error) {
            console.error(error)
        }

        resolve()
    });

}


$(document).ready(async function () {
    fatchSongs()    
})