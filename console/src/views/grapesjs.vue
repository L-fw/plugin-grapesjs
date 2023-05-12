<script setup lang="ts">
import {defineProps} from "vue";
import GrapesComponent from "@/views/grapesJsComponent.vue";

const props = defineProps({
  raw: {
    type: String,
    required: false,
    default: "",
  },
  content: {
    type: String,
    required: false,
    default: "",
  },
});

const emit = defineEmits<{
  (event: "update:raw", value: string): void;
  (event: "update:content", value: string): void;
  (event: "update", value: string): void;
}>();

const handleChange = (v: string) => {
  emit("update:raw", v);
  emit("update:content", v);
  console.log(props.raw);
  if (v !== props.raw) {
    emit("update", v);
  }
};

</script>

<template>
  <div>
    <grapes-component :value="raw" @change="handleChange">
    </grapes-component>
  </div>
</template>

<style scoped>

</style>
