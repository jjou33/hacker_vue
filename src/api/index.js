import axios from "axios";

// HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// API 함수들 정리
async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(userName) {
  try {
    return await axios.get(`${config.baseUrl}user/${userName}.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchItemInfo(id) {
  try {
    return await axios.get(`${config.baseUrl}item/${id}.json`);
  } catch (error) {
    console.log(error);
  }
}

export { fetchUserInfo, fetchItemInfo, fetchList };
