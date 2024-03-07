import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const calendarApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://date.nager.at/api/v3/" }),
  endpoints: (builder) => ({
    getHolidays: builder.query({
      query: ({ year, country }) => `PublicHolidays/${year}/${country}`,
    }),
  }),
});

export const { useGetHolidaysQuery } = calendarApi;
