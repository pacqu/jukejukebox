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
    var order = this.Songs.length;
    this.Songs.push(song);
    //Function that adds HTML of song to playlist
    var songDiv = generateSongHTML(song,order);
    document.querySelector(".playlist").appendChild(songDiv);
  }

  this.getSong = function(order){
    return this.Songs[order];
  }
}

function generateSongHTML(song, order){
  var songHTML = document.createElement("DIV");
  //songHTML.appendChild(document.createTextNode(song.songTitle + " - " + song.songArtist + " - " + song.songAlbum));
  songHTML.innerHTML
  = "<img class='mini-artwork' src='" + song.songArtFile +"' style='height:100%;'></img>" + song.songTitle + " - " + song.songArtist + " - " + song.songAlbum ;
  var clss = document.createAttribute("class");
  clss.value = "song";
  var onclick = document.createAttribute("onclick");
  onclick.value = "changeSong(" + order + ")";
  var style = document.createAttribute("style")
  style.value = "order:" + order + ";";
  songHTML.setAttributeNode(clss);
  songHTML.setAttributeNode(onclick);
  songHTML.setAttributeNode(style);
  return songHTML;
}
