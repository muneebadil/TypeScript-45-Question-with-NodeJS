function album(artistname: string, albumtitle: string, albumtrack?: number) {
    let albumobj: { artist: string, title: string, track?: number } = {
        artist: artistname,
        title: albumtitle,
    };

    if (albumtrack !== undefined) {
        albumobj.track = albumtrack;
    }

    return albumobj;
}

let album1 = album("Muneeb", "Taire Bin");
let album2 = album("Asghar", "Taire lie");
let album3 = album("Atif", "Taire Khatir");

console.log(album1);
console.log(album2);
console.log(album3);
