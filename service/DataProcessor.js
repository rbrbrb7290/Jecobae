import _getPlayList from '../lib/YouTubeAPI';

async function getPlayList(plId, pageToken) {
  let res;
  try {
    res = await _getPlayList(plId, pageToken);
  } catch (error) {
    res = await _getPlayList(plId, pageToken);
  } finally {
    if (!res) {
      return {};
    }
    return {
      pageToken: {
        nextPageToken: res['nextPageToken'],
        prevPageToken: res['prevPageToken'],
      },
      videoInfo: res['items'].map(row => ({
        title: row['snippet']['title'],
        desc: row['snippet']['description'],
        img: row['snippet']['thumbnails']['high']['url'],
        date: row['snippet']['publishedAt'].split('T', 1),
        videoId: row['contentDetails']['videoId'],
      })),
    };
  }
}

export default getPlayList;
