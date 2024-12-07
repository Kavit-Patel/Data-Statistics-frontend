import { IMasterData } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

export const errorMessage = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    const msg = error.response.data?.message;
    return msg instanceof Array
      ? msg.join(",")
      : msg || "Something Went Wrong !";
  }
  if (error instanceof Error) {
    return error.message || "Some Error has occured !";
  }
  return "An unknown error occured !";
};

export const useMasterData = (
  pageNo: number = 1,
  month: string | null,
  search: string
) => {
  return useQuery<IMasterData, AxiosError>({
    queryKey: ["masterData", pageNo, month, search],
    queryFn: async () => {
      const request = await api.get(
        `/product/master-data?page=${pageNo}&month=${month}&search=${search}`
      );
      const data = request.data;
      return data;
    },
    refetchOnWindowFocus: false,
  });
};
