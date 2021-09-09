import axios from 'axios';
import qs from 'qs';
import config from './config';

const { api } = config;

export const authorize = async () => {
  try {
    const creds = btoa(`${api.clientId}:${api.clientSecret}`);
    const { data } = await axios({
      url: api.authUrl,
      method: 'post',
      data: qs.stringify({
        grant_type: 'client_credentials',
      }),
      headers: {
        Authorization: `Basic ${creds}`,
        'content-type': 'application/x-www-form-urlencoded',
      }
    });
    return data;
  } catch (e) {
    console.error(e);
    return { access_token: '' };
  }
}

export const fetchNewReleases = async (token) => {
  try {
    const { data } = await axios({
      url: `${api.baseUrl}/browse/new-releases`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return data.albums.items;
  } catch (e) {
    return [];
  }
}

export const fetchPlaylists = async (token) => {
  try {
    const { data } = await axios({
      url: `${api.baseUrl}/browse/featured-playlists`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return data.playlists.items;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const fetchCategories = async (token) => {
  try {
    const { data } = await axios({
      url: `${api.baseUrl}/browse/categories`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return data.categories.items;
  } catch (e) {
    console.error(e);
    return [];
  }
}
