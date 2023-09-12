import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "./appContext";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  //   credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    debugger;
    const token = getState().global.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  debugger;
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().global.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  reducerPath: "adminApi",
  tagTypes: ["Salaries", "Cards", "Jobs", "Customers", "Geography"],
  endpoints: (build) => ({
    getSalaries: build.query({
      query: () => "api/salaries",
      providesTags: ["Salaries"],
    }),
    getSalariesCard: build.query({
      query: () => "api/cards",
      // method: "GET",
      providesTags: ["Cards"],
    }),
    getJobs: build.query({
      query: () => `api/jobs`,
      providesTags: ["Jobs"],
    }),
    createSalarie: build.mutation({
      query: (data) => ({
        url: `api/salaries`,
        method: "POST",
        body: { ...data },
        providesTags: ["Customers"],
      }),
    }),
    createJob: build.mutation({
      query: (data) => ({
        url: `api/jobs`,
        method: "POST",
        body: { ...data },
        providesTags: ["Customers"],
      }),
    }),
    getGeography: build.query({
      query: () => `client/geography`,
      providesTags: ["Geography"],
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});
export const {
  useGetSalariesQuery,
  useGetSalariesCardQuery,
  useGetJobsQuery,
  useCreateSalarieMutation,
  useGetGeographyQuery,
  useLoginMutation,
  useCreateJobMutation,
} = api;
