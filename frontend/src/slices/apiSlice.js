import { BASE_URL } from "../constants";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { logout } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);

  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
