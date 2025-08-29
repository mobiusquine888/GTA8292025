export async function handler(event, context) {
  const YT_KEY = process.env.YOUTUBE_API_KEY; // reference your Netlify environment variable
  if (!YT_KEY) {
    return { statusCode: 500, body: "YouTube API key not found" };
  }

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=YOUR_CHANNEL_ID&key=${YT_KEY}`);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}
