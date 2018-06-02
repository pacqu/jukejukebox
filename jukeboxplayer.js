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

  document.querySelector('.active-song').innerHTML
    = "<img class='mini-artwork' src='" + jukebox.getSong(songIndex).songArtFile + "' style='height:100%;'></img>"
    + jukebox.getSong(songIndex).songTitle + " - " + jukebox.getSong(songIndex).songArtist + " - " + jukebox.getSong(songIndex).songAlbum;
  /*
  if (document.querySelector('.active-song')) {
    var deactivate = document.createAttribute("class");
    deactivate.value = "song";
    document.querySelector('.active-song').setAttributeNode(deactivate);
  }

  var activate = document.createAttribute("class");
  activate.value = "active-song";
  document.querySelector('[style~=order:"'+ songIndex + '""]').setAttributeNode(activate);
  */
  //info for the play section
  document.getElementById('active-song-artist').innerHTML = jukebox.getSong(songIndex).songArtist;
  document.getElementById('active-song-album').innerHTML = jukebox.getSong(songIndex).songAlbum;
  document.getElementById('active-song-title').innerHTML = jukebox.getSong(songIndex).songTitle;
  var song = document.createAttribute("src");
  song.value = jukebox.getSong(songIndex).songSrc;
  //console.log(jukebox.getSong(songIndex).songSrc);
  document.getElementById('songID').setAttributeNode(song);
  var pic = document.createAttribute("src");
  pic.value = jukebox.getSong(songIndex).songArtFile;
  document.getElementById('active-song-art-file').setAttributeNode(pic);
  play_song();
}

function play_song(){
  document.getElementById('pause-play').innerHTML = '<i class="fa fa-pause">';
  var onclick = document.createAttribute("onclick");
  onclick.value = "pause_song()";
  document.getElementById('pause-play').setAttributeNode(onclick);
  document.getElementById('songID').play();
}

function pause_song(){
  document.getElementById('pause-play').innerHTML = '<i class="fa fa-play">';
  var onclick = document.createAttribute("onclick");
  onclick.value = "play_song()";
  document.getElementById('pause-play').setAttributeNode(onclick);
  document.getElementById('songID').pause();
}

for (var i = 0; i < 5; i++){
var jukebox = new Jukebox();
var song1 = new Song("change.mp3","Changes","A$AP Rocky","Testing","4:20","images/asap-rocky-testing.jpg");
var song2 = new Song("boredom.mp3","Bordeom","Tyler, The Creator","Flower Boy","4:20","images/flowerboy.png");
var song3 = new Song("chanel.mp3","Chanel","Frank Ocean","Chanel","4:20","images/chanel.jpg");
var song4 = new Song("but-a-dream.mp3","But A Dream","G-Eazy","The Beautiful and Damned","4:20","images/g-eazy-tbd.jpg");
var song5 = new Song("perry-aye.mp3","Perry Aye","A$AP Mob","Cozy Tapes Vol. 2", "4:20", "images/asap-mob-cozy2.jpg");
var song6 = new Song("no-less.mp3","No Less","G-Eazy","The Beautiful and Damned","4:20","images/g-eazy-tbd.jpg");
jukebox.addSong(song1);
jukebox.addSong(song2);
jukebox.addSong(song3);
jukebox.addSong(song4);
jukebox.addSong(song5);
jukebox.addSong(song6);
}
