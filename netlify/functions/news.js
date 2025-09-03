exports.handler = async (event, context) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    
    // More specific GTA 6 search query
    const query = 'GTA 6 OR "Grand Theft Auto VI" OR "Grand Theft Auto 6" OR "GTA VI" OR "Lucia Jason" OR "Vice City 2025" OR "Rockstar GTA 6"';
    
    const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=20&language=en&apiKey=${apiKey}&domains=ign.com,gamespot.com,polygon.com,kotaku.com,eurogamer.net,rockpapershotgun.com,gamesradar.com,destructoid.com,pcgamer.com`);
    
    const data = await response.json();
    
    // Filter results to only include GTA 6 related content
    const filteredArticles = (data.articles || []).filter(article => {
      const title = article.title?.toLowerCase() || '';
      const description = article.description?.toLowerCase() || '';
      const content = (title + ' ' + description).toLowerCase();
      
      return content.includes('gta 6') || 
             content.includes('grand theft auto vi') || 
             content.includes('grand theft auto 6') || 
             content.includes('gta vi') || 
             content.includes('vice city') ||
             content.includes('lucia') ||
             content.includes('jason');
    });
    
    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(filteredArticles)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: 'Failed to fetch news', details: error.message })
    };
  }
};
