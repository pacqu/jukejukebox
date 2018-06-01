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
    return this.Songs(order);
  }
}


function generateSongHTML(song, order){
  var songHTML = document.createElement("DIV");
  songHTML.appendChild(document.createTextNode(song.songTitle + " - " + song.songArtist + " - " + song.songAlbum));
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

var song1 = new Song("spotify","Waves","Kanye","TLOP","4:20","blessed");
var song2 = new Song("applemusic","Good Morning","Kanye","Graduation","3:10","messed");

var testEl = generateSongHTML(song1,0);
var testEl1 = generateSongHTML(song2,1);
console.log(testEl);
document.querySelector(".playlist").appendChild(testEl);
document.querySelector(".playlist").appendChild(testEl1);
