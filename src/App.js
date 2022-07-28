import { PhotoCard } from "./PhotoCard";
import "./styles.css";
import { useFetch } from "./useFetch";
import { useInfyScroll } from "./infiniteScroll";
import Loader from "./Loader";

export default function App() {
  const { loadMoreRef, page } = useInfyScroll();
  const { Data, loading } = useFetch(page);

  return (
    <div className="App">
      <div className="container">
        {Data?.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div ref={loadMoreRef}>{loading && <Loader />}</div>
    </div>
  );
}
