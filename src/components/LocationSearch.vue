<template>
  <div class="location-search">
    <SearchBar v-if="$mq.collapseLists" class="location-search__bar" />

    <ul class="location-search__list" v-if="results && results.length > 0">
      <li
        class="location-search__item"
        v-for="result in this.results"
        :key="result.woeid"
      >
        <LocationSearchItem :searchResult="result" />
      </li>
    </ul>
    <PlaceholderText v-else class="location-search__placeholder">
      {{ this.placeholderMessage }}
    </PlaceholderText>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LocationSearchItem from "./LocationSearchItem.vue";
import SearchBar from "./SearchBar.vue";
import PlaceholderText from "./PlaceholderText.vue";

export default {
  components: { LocationSearchItem, SearchBar, PlaceholderText },

  computed: {
    ...mapGetters({
      results: "getUntrackedSearchResults"
    }),
    placeholderMessage: function() {
      if (!this.results) {
        return this.$mq.dropMap
          ? "Search for a city name"
          : "Search for a city name, \
or double-click the map to look up nearby locations";
      } else if (this.results.length === 0) {
        return "No results found";
      }
      return "";
    }
  }
};
</script>

<style scoped>
.location-search {
  display: grid;
  place-content: start stretch;
}

.location-search__bar {
  margin: 3px;
  border-radius: 5px;
}

.location-search__list {
  max-height: 100%;
  overflow-y: auto;
  display: grid;
  align-content: flex-start;
  grid-gap: 5px;

  margin: 0;
  padding: 5px;
  list-style: none;
}

.location-search__placeholder {
  place-self: stretch;
  margin: 10px;
}
</style>
