import { getUserSession } from '@/lib/session';

// import {handler} from "@app/api/auth/[...nextauth]"
export const apiRequest = async (endpoint, params) => {
  const user = await getUserSession(true);
  const axios = require('axios');
  try {
      const response = await axios.get(endpoint, {
        headers: {
          "x-access-token": user.accessToken,
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          'Authorization' : `Bearer ${user.accessToken}`
        },
        params: params,
      })

      console.log("HELLO");
      // console.log(response.data.items);
      return response.data.items;
  }catch (error) {
    console.log("ERROR")
  }
}