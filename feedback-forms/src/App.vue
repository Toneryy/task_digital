<template>
  <div>
    <h1>Форма А</h1>
    <FormA />
    <h1>Форма Б</h1>
    <FormB />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormA from './components/FormA.vue';
import FormB from './components/FormB.vue';

export default defineComponent({
  components: { FormA, FormB },
});
</script>
