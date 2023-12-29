import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://657e2c793e3f5b1894639324.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: "POST",
        body:comment,
      }),
      invalidatesTags: ["Comments"],
    }),
    updateCommentCount: builder.mutation({
      query: ({id, ...data}) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body:data,
      }),
      invalidatesTags: ["Comments"],
    }),

  }),
});

export const { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentCountMutation } = commentApi;

//     addPost: build.mutation({
//       query: (body) => ({
//         url: `posts`,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Posts'],
//     }),
//   }),
// })
