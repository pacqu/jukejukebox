/*
Updates:
* artist name
* album title
* album artwork
* song title
* timing of song ? is this continious?
* begins playing

*/

var jukebox = new Jukebox();
function changeSong(songIndex){
  document.getElementById('active-song-artist').innerHTML = jukebox.getSong(songIndex).songArtist;
  document.getElementById('active-song-album').innerHTML = jukebox.getSong(songIndex).songAlbum;
  document.getElementById('active-song-artwork').innerHTML = jukebox.getSong(songIndex).songArtFile;
  document.getElementById('active-song-title').innerHTML = jukebox.getSong(songIndex).songTitle;
  var song = document.createAttribute("src");
  song.value = jukebox.getSong(songIndex).songSrc;
  document.getElementById('songID').setAttribute(song);
  play_song();
}

function play_song(){
  document.getElementById('pause-play').innerHTML = pause.png;
  document.getElementById('songID').play();
}

function pause_song(){
  document.getElementById('pause-play').innerHTML = play.jpg;
  document.getElementById('songID').pause();
}
