/*
Updates:
* artist name
* album title
* album artwork
* song title
* timing of song ? is this continious?
* begins playing

*/
function changeSong(songOrder){
  document.getElementById('active-song-artist').innerHTML = songOrder.songArtist;
  document.getElementById('active-song-album').innerHTML = songOrder.songAlbum;
  document.getElementById('active-song-artwork').innerHTML = songOrder.songArtFile;
  document.getElementById('active-song-title').innerHTML = songOrder.songTitle;
  // play_song();
  //call play song
}

function play_song(){
  document.getElementById('play-button').innerHTML = pause.png
  document.getElementById('songID').play();
}

function pause_song(){
  document.getElementById('play-button').innerHTML = play.jpg
  document.getElementById('songID').pause();
}
