import { useCallback, useEffect, useRef, useState } from "react";

export const useInfyScroll = () => {
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef(null);

  const handleobserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting) {
        setPage(page + 1);
      }
    },
    [page]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleobserver, option);
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleobserver]);
  return { page, loadMoreRef };
};
