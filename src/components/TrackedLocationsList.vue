<template>
  <div
    class="tracked-locations"
    dropzone
    @dragenter.self="dropPosition = trackedLocations.length"
    @dragleave="dropPosition = null"
    @dragover.prevent
    @drop="onDrop"
    @dragend="dropPosition = null"
  >
    <ul
      :class="
        `tracked-locations__list ${
          dropPosition === trackedLocations.length
            ? 'tracked-locations__list--drop-target'
            : ''
        }`
      "
      v-if="trackedLocations && trackedLocations.length > 0"
      dropzone
      @dragenter.self="dropPosition = trackedLocations.length"
      @dragleave="dropPosition = null"
      @dragover.prevent
      @drop="onDrop"
      @dragend="dropPosition = null"
    >
      <li
        v-for="(trackedLocation, index) in trackedLocations"
        :key="trackedLocation.woeid"
        :class="
          `tracked-locations__item ${
            dropPosition === index ? 'tracked-locations__item--drop-target' : ''
          }`
        "
        dropzone
        @dragleave="
          (evt) => {
            if (evt.target === evt.currentTarget) {
              return;
            }
            evt.stopPropagation();
          }
        "
        @dragenter.stop="dropPosition = index"
        @drop.stop="onDrop"
      >
        <TrackedLocation :location="trackedLocation" />
      </li>
    </ul>
    <PlaceholderText v-else class="tracked-locations__placeholder">
      Drag a search result here or click the Add button to track it
    </PlaceholderText>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TrackedLocation from "./TrackedLocation.vue";
import PlaceholderText from "./PlaceholderText.vue";
export default {
  components: { TrackedLocation, PlaceholderText },

  data() {
    return {
      dropPosition: null
    };
  },

  computed: {
    ...mapState({
      trackedLocations: (state) => state.trackedLocations
    })
  },

  methods: {
    ...mapActions(["trackLocation"]),

    onDrop(evt) {
      this.trackLocation({
        location: JSON.parse(evt.dataTransfer.getData("application/json")),
        index: this.dropPosition
      });
      this.dropPosition = null;
    }
  }
};
</script>

<style scoped>
.tracked-locations {
  display: grid;
  overflow-y: auto;
}

.tracked-locations__list--drop-target::after,
.tracked-locations__item--drop-target::before {
  content: "";
  display: block;

  height: 80px;
  margin-bottom: 5px;

  background-color: rgba(70, 131, 180, 0.05);
  border: 2px dashed steelblue;
  border-radius: 10px;
}

.tracked-locations__list {
  display: grid;
  align-content: flex-start;
  grid-gap: 5px;

  margin: 0;
  padding: 5px;
  list-style: none;
}

.tracked-locations__placeholder {
  place-self: start stretch;
  margin: 10px;
}
</style>
