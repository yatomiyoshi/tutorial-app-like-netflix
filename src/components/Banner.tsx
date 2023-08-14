import instance from "../axios";
import { useEffect, useState } from "react";
import { requests } from "../request";

type movieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({});
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      console.log(request.data.results)

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  const truncate = (str: any, n: number) => {
    if(str !== undefined) {
      return str.length > n ? str?.substring(0, n - 1) + "..." : str
    }
  }
}