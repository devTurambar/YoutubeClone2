/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token) {
    try {
  
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      })
  
      const refreshedTokens = await response.json()
  
      if (!response.ok) {
        throw refreshedTokens
      }
  
      return {
        ...token,
        accessToken: refreshedTokens.access_token,
        accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
        refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
      }
    } catch (error) {
      console.log(error)
  
      return {
        ...token,
        error: "RefreshAccessTokenError",
      }
    }
  }

  export default refreshAccessToken;