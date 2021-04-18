<template>
  <div class="forecast-day">
    <h3>
      <time :datetime="forecastDay.date.toISOString()">
        {{ forecastDay.date.toLocaleDateString() }}
      </time>
    </h3>
    <div class="forecast-day__basic-info">
      <strong class="forecast-day__temp"
        >{{ forecastDay.temp.toFixed(1) }} &deg;C</strong
      >
      <span class="forecast-day__temp-range"
        >{{ forecastDay.minTemp.toFixed(1) }} &hellip;
        {{ forecastDay.maxTemp.toFixed(1) }} &deg;C</span
      >
      <img
        class="forecast-day__icon"
        :src="forecastDay.icon"
        :alt="forecastDay.weatherType"
        width="100"
        height="100"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forecastDay: Object
  }
};
</script>

<style scoped>
.forecast-day {
  padding: 5px;

  background-color: white;
  border-radius: 5px;
}

.forecast-day__basic-info {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 50px auto;
  grid-gap: 5px;
}

.forecast-day__icon {
  grid-row: 1 / span 2;
  grid-column: 1;
  width: 100%;
  height: auto;
}

.forecast-day__temp {
  grid-row: 1;
  grid-column: 2;

  font-size: 1.1em;
}

.forecast-day__temp-range {
  grid-row: 2;
  grid-column: 2;
}
</style>