const apiCalling = async (method, url, data) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || 'An error occurred while making the request';
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch from the API");
  }
};

export default apiCalling;