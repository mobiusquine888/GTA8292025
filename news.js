exports.handler = async (event, context) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const response = await fetch(`https://newsapi.org/v2/everything?q=GTA+6&sortBy=publishedAt&pageSize=20&language=en&apiKey=${apiKey}`);
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data.articles || [])
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch news' })
    };
  }
};