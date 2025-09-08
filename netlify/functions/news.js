exports.handler = async (event, context) => {
  try {
    const apiKey = process.env.NEWS_API_KEY || '22ae24fcb78544a1977241e1319d4a0b';
    const response = await fetch(`https://newsapi.org/v2/everything?q=GTA%206%20OR%20%22Grand%20Theft%20Auto%206%22&sortBy=publishedAt&pageSize=50&language=en&apiKey=${apiKey}`);
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
