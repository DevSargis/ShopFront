export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
  };
  
export const setAuthHeader = (token) => {
    window.localStorage.setItem('auth_token', token);
  };
  
  const baseURL = 'http://192.168.2.125:8080';
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
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          throw new Error(`${data.message} ${response.status}`);
        });
      }
      return response.json();
    })
    .catch(error => {
      throw error;
    });
  };