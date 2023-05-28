export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
  };
  
export const setAuthHeader = (token) => {
    window.localStorage.setItem('auth_token', token);
  };
  
  const baseURL = 'http://localhost:8080';
  const headers = {
    'Content-Type': 'application/json'
  };
  
  export const request = async (method, url, data) => {
    const authToken = getAuthToken();
    if (authToken !== null && authToken !== "null" && authToken !== "undefined") {
      headers.Authorization = `Bearer ${authToken}`;
    }
  
    const requestOptions = {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined
    };

    return await fetch(baseURL + url, requestOptions)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        throw error;
      });
  };