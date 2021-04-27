import useSWR from "swr";

import { ApiError } from "../../../api/ApiError";
import { mockDirectoryContentFetcher } from "../fetchers/directoryContentFetcher";
import File from "../models/File";

export default function useDirectoryContent(path: string) {
  const { data, mutate, error } = useSWR<File[], ApiError>(
    `/api/node/${path}`,
    mockDirectoryContentFetcher
  );

  const loading = !data && !error;

  return {
    loading,
    files: data,
    mutate,
  };
}
