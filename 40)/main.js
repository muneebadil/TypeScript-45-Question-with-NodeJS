function album(artistname, albumtitle, albumtrack) {
    var albumobj = {
        artist: artistname,
        title: albumtitle,
    };
    if (albumtrack !== undefined) {
        albumobj.track = albumtrack;
    }
    return albumobj;
}
var album1 = album("Muneeb", "Taire Bin");
var album2 = album("Asghar", "Taire lie");
var album3 = album("Atif", "Taire Khatir");
console.log(album1);
console.log(album2);
console.log(album3);
