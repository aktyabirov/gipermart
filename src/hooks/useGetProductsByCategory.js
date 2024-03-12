import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductsByCategory = (categoryKey) => {
  return useQuery({
    queryKey: [categoryKey],
    queryFn: () => axios.get(`http://localhost:3000/${categoryKey}`).then(res => res.data),
  });
};
