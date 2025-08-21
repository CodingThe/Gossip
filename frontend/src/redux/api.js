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
    console.log("req");
    const response = await fetch(url, config);
    console.log("res",response)
    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || 'An error occurred while making the request';
      console.log("gggggggggggggg",errorResponse);
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    console.log("the response",responseData);
    return responseData;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch from the API");
  }
};

export default apiCalling;