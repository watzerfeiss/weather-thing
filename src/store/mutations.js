const mutations = {
  startSearch(state, { coords, requestId }) {
    state.search.isLoading = true;
    state.search.lastRequestId = requestId;
    if (coords) {
      state.search.distanceSearchOrigin = coords;
    }
  },

  cancelSearch(state) {
    state.search.lastRequestId = null;
    state.search.isLoading = false;
  },

  finishSearch(state, { results, requestId }) {
    if (requestId === state.search.lastRequestId) {
      state.search.results = results;
      state.search.isLoading = false;
    }
  },

  addTrackedLocation(state, { location, index = 0 }) {
    const isTracked = state.trackedLocations.find(
      (tracked) => tracked.woeid === location.woeid
    );
    if (isTracked) {
      return;
    }
    state.trackedLocations.splice(index, 0, location);
  },

  updateTrackedLocation(state, { location }) {
    const index = state.trackedLocations.findIndex(
      (tracked) => tracked.woeid === location.woeid
    );
    if (index === -1) {
      return;
    }

    state.trackedLocations.splice(index, 1, location);
  },

  removeTrackedLocation(state, { woeid }) {
    state.trackedLocations = state.trackedLocations.filter(
      (tracked) => tracked.woeid !== woeid
    );
  },

  viewLocation(state, { woeid }) {
    state.viewedLocation =
      (woeid &&
        state.trackedLocations.find((tracked) => tracked.woeid === woeid)) ||
      null;
  }
};

export default mutations;
