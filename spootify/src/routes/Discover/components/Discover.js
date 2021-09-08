import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import { authorize, fetchNewReleases, fetchPlaylists, fetchCategories } from '../../../utils';
import '../styles/_discover.scss';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { access_token } = await authorize();
    const [ newReleases, playlists, categories ] = await Promise.all([
      fetchNewReleases(access_token),
      fetchPlaylists(access_token),
      fetchCategories(access_token),
    ]);
    this.setState({ newReleases, playlists, categories, isLoading: false });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
