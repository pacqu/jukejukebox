function Song(src, title, artist, album, duration, artFile){
  this.songSrc = src;
  this.songTitle = title;
  this.songArtist = artist;
  this.songAlbum =  album;
  this.songDuration = duration;
  this.songArtFile = artFile;
}

function Jukebox(){
  this.Songs = new Array();

  this.addSongs = function(songs){
    this.Songs.concat(songs);
    //Function that adds HTML of all songs to the playlist
  }
  this.addSong = function(song){
    var order =
    this.Songs.push(song);
    //Function that adds HTML of song to playlist
  }

  this.getSong = function(order){
    retunr this.Songs(order);
  }
}
var song1 = new Song("spotify","Waves","Kanye","TLOP","4:20","blessed");
var song2 = new Song("applemusic","Good Morning","Kanye","Graduation","3:10","messed");
/*
function generateSongHTML(song, order){

}
*/
