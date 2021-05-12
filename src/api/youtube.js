import axios from "axios";

const KEY = "AIzaSyAQijDfgI-Z1yrlfEyMF9oNqGnT9qouxqw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { 
        part: "snippet",
        type: "video",
        maxResults: 6,
        key: KEY
     }
});