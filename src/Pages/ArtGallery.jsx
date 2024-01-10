import Item from "../Components/Item/Item";

const ArtGallery = (prop) => {
  const data = prop.data;
  const art_data = prop.data.data;
  const ArtistId = data.ArtistId;
  const gallerys = art_data.Tbl_Gallery;
  const arts = art_data.Tbl_Art;

  // Filter ArtistId
  const filteredArtistId = gallerys
    .filter((gallery) => gallery.ArtistId === ArtistId)
    .map((gallery) => gallery.ArtId);

  // Filter Artist Art
  const filteredArtistArt = arts.filter((art) =>
    filteredArtistId.includes(art.ArtId)
  );

  const art = filteredArtistArt;

  return (
    <div>
      <Item data={art} />
    </div>
  );
};
export default ArtGallery;
