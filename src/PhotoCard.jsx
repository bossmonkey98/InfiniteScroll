export const PhotoCard = ({ photo }) => {
  return (
    <div className="image-card">
      <img alt={photo.author} src={photo.download_url} />
      <p>{photo.author}</p>
    </div>
  );
};
