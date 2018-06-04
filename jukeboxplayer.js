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


var jukebox = new Jukebox();
var song1 = new Song("songs/change.mp3","Changes","A$AP Rocky","Testing","4:20","images/asap-rocky-testing.jpg");
jukebox.addSong(song1);
function selectSong(){
  switch (document.getElementById('song-select').value) {

    case "boredom":
    var song2 = new Song("songs/boredom.mp3","Boredom","Tyler, The Creator","Flower Boy","4:20","images/flowerboy.png");
    jukebox.addSong(song2);
    break;

    case "chanel":
    var song3 = new Song("songs/chanel.mp3","Chanel","Frank Ocean","Chanel","4:20","images/chanel.jpg");
    jukebox.addSong(song3);
    break;

    case "dream":
    var song4 = new Song("songs/but-a-dream.mp3","But A Dream","G-Eazy","The Beautiful and Damned","4:20","images/g-eazy-tbd.jpg");
    jukebox.addSong(song4);
    break;

    case "perry":
    var song5 = new Song("songs/perry-aye.mp3","Perry Aye","A$AP Mob","Cozy Tapes Vol. 2", "4:20", "images/asap-mob-cozy2.jpg");
    jukebox.addSong(song5);
    break;

    case "noless":
    var song6 = new Song("songs/no-less.mp3","No Less","G-Eazy","The Beautiful and Damned","4:20","images/g-eazy-tbd.jpg");
    jukebox.addSong(song6);
    break;

    case "commes":
    var song7 = new Song("songs/commes.m4a","Commes des Garcons","Frank Ocean","Endless","4:20","images/endless.jpg");
    jukebox.addSong(song7);
    break;

    case "nights":
    var song8 = new Song("songs/nights.m4a","Nights","Frank Ocean","Blonde","4:20","images/blonde.jpg");
    jukebox.addSong(song8);
    break;

    case "gina":
    var song9 = new Song("songs/gogina.mp3","Go Gina","SZA","CTRL","4:20","images/ctrl.jpg");
    jukebox.addSong(song9);
    break;

    case "everybody":
    var song10 = new Song("songs/everybody.mp3","Everybody Works","Jay Som","Everybody Works","4:20","images/everybody.jpg");
    jukebox.addSong(song10);
    break;

    case "marcy":
    var song11 = new Song("songs/marcy.mp3","Marcy Me","JAY-Z","4:44","4:20","images/444.png");
    console.log(song11);
    jukebox.addSong(song11);
    break;

    default:
    break;

  };
}
