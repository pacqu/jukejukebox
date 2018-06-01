function Song(src, title, artist, album, duration, artFile){
  this.songSrc = src;
  this.songTitle = title;
  this.songArtist = artist;
  this.songAlbum =  album;
  this.songDuration = duration;
  this.songArtFile = artFile;
}

function Jukebox(){
  this.Songs = [];
  this.addSongs = function(song){
    this.Songs.push(song);
  }
}
