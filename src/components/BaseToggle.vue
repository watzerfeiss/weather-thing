<template>
  <div class="toggle">
    <span class="toggle__option" v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="`${inputName}-${option.value}`"
        :name="inputName"
        :value="option.value"
        :checked="option.value === selectedOption"
        @change="handleChange($event.target.checked, option.value)"
      />
      <label :for="`${inputName}-${option.value}`">
        {{ option.label }}
      </label>
    </span>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  model: {
    prop: "selectedOption",
    event: "change"
  },

  props: {
    selectedOption: {
      type: String
    },

    options: {
      type: Array,
      validator: (options) =>
        options.every((option) => option.value && option.label)
    }
  },

  data: () => ({
    inputName: nanoid(5)
  }),

  methods: {
    handleChange(isChecked, value) {
      if (!isChecked) {
        return;
      }
      this.$emit("change", value);
    }
  }
};
</script>

<style scoped>
.toggle {
  box-shadow: 2px 3px 7px -4px black;
}

.toggle,
.toggle__option {
  display: flex;
}

.toggle__option input {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.toggle__option label {
  padding: 5px 8px;

  color: white;
  background-color: rgb(85, 149, 202);
  border-radius: 3px;
  cursor: pointer;
}

.toggle__option:first-of-type label {
  border-radius: 5px 0 0 5px;
}

.toggle__option:last-of-type label {
  border-radius: 0 5px 5px 0;
}

.toggle__option input:checked + label {
  position: relative;
  top: 1px;
  background-color: rgb(53, 103, 143);
}
</style>
