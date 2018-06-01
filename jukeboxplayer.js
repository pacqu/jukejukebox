/*
Updates:
* artist name
* album title
* album artwork
* song title
* timing of song ? is this continious?
* begins playing

*/


function changeSong(songIndex){
  //put into active song section of Playlist
  //info for the play section
  document.getElementById('active-song-artist').innerHTML = jukebox.getSong(songIndex).songArtist;
  document.getElementById('active-song-album').innerHTML = jukebox.getSong(songIndex).songAlbum;
  //document.getElementById('active-song-artwork').innerHTML = jukebox.getSong(songIndex).songArtFile;
  document.getElementById('active-song-title').innerHTML = jukebox.getSong(songIndex).songTitle;
  var song = document.createAttribute("src");
  song.value = jukebox.getSong(songIndex).songSrc;
  document.getElementById('songID').setAttributeNode(song);

  var pic = document.createAttribute("src");
  pic.value = jukebox.getSong(songIndex).songArtFile;
  document.getElementById('active-song-art-file').setAttributeNode(pic)
  play_song();
}

function play_song(){
  //document.getElementById('pause-play').innerHTML = pause.png;
  document.getElementById('songID').play();
}

function pause_song(){
  document.getElementById('pause-play').innerHTML = play.jpg;
  document.getElementById('songID').pause();
}

var jukebox = new Jukebox();
var song1 = new Song("changes.mp3","Changes","A$AP Rocky","Testing","4:20","asap-rocky-testing.jpg");
jukebox.addSong(song1);
var testEl = generateSongHTML(song1,0);
console.log(testEl);
document.querySelector(".playlist").appendChild(testEl);
