<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      v-model="formData.name"
      placeholder="Имя"
      required
    />
    <input
      type="email"
      v-model="formData.email"
      placeholder="Email (необязательно)"
    />
    <input
      type="text"
      v-model="formData.inn"
      placeholder="ИНН"
      required
    />
    <input
      type="tel"
      v-model="formData.phone"
      placeholder="Телефон (+7 (XXX) XXX-XX-XX)"
      required
    />
    <button type="submit">Отправить</button>
  </form>
  <p v-if="formStatus">{{ formStatus }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useFormStore } from "../stores/formStore";

export default defineComponent({
  setup() {
    const formStore = useFormStore();
    const formData = reactive({
      name: "",
      email: "",
      inn: "",
      phone: "",
    });

    const handleSubmit = async () => {
      try {
        const response = await fakeSubmit(formData); // передаем formData напрямую
        formStore.setFormStatus(response.requestId, response.statusMessage);
      } catch (error) {
        formStore.setFormStatus("", "Ошибка отправки");
      }
    };

    return {
      formData, // используется в шаблоне
      handleSubmit,
      formStatus: formStore.statusMessage,
    };
  },
});

async function fakeSubmit(formData: any) {
  return new Promise<{ requestId: string; statusMessage: string }>(resolve => {
    setTimeout(() => {
      resolve({
        requestId: "12345",
        statusMessage: "Данные успешно отправлены!",
      });
    }, 1000);
  });
}
</script>
