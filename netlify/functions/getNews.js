export async function handler(event, context) {
  // This line gets the API key from Netlify environment variables
  const NEWS_KEY = process.env.NEWS_API_KEY; 

  // Check if the key exists
  if (!NEWS_KEY) {
    return { statusCode: 500, body: "News API key not found" };
  }

  try {
    // Use the key in the API URL
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_KEY}`);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}
