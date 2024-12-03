import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAuthAPI = createApi({
  reducerPath: 'userAuthAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) =>{
                return{
                    url: 'user/register/',
                    method: 'POST',
                    body: user,
                    header: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
        loginUser: builder.mutation({
            query: (user) =>{
                return{
                    url: 'user/login/',
                    method: 'POST',
                    body: user,
                    header: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
        getLoggedUser: builder.query({
            query: (access_token) =>{
                return{
                    url: 'user/profile/',
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                    }
                }
            }
        }),
        getPlaces: builder.query({
            query: (data) =>{
                return{
                    url: `/place-list-create?query=${encodeURIComponent(data.query)}&page=${data.page}&min_rating=${data.filters?.ratingThreshold ? data.filters?.ratingThreshold : ''}&city=${data.filters?.city ? data.filters?.city.toLocaleLowerCase() : ''}`,
                    method: 'GET',
                }
            }
        }),

    }),
})
export const { useRegisterUserMutation, useLoginUserMutation, useGetLoggedUserQuery, useGetPlacesQuery } = userAuthAPI