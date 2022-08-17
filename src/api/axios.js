import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import axios from "axios";

const BASE_URL = 'https://62f2281a25d9e8a2e7d8156d.mockapi.io/contacts';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: (values) => ({
        url: `/contacts`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    })
  }),
});

export const { useGetAllContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;

// const customAxios = axios.create({
//     baseURL: BASE_URL,
// });

// export const getContacts = async () => {
//     const response = await customAxios.get('');
//     return response.data;
// }