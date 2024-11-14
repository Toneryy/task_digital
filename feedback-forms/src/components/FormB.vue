<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      v-model="formData.firstName"
      placeholder="Имя"
      required
    />
    <input
      type="text"
      v-model="formData.lastName"
      placeholder="Фамилия"
      required
    />
    <input
      type="text"
      v-model="formData.middleName"
      placeholder="Отчество"
    />
    <input
      type="date"
      v-model="formData.birthDate"
      placeholder="Дата рождения"
      required
    />
    <input
      type="text"
      v-model="formData.login"
      placeholder="Логин"
      required
    />
    <input
      type="email"
      v-model="formData.email"
      placeholder="Email"
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
      firstName: "",
      lastName: "",
      middleName: "",
      birthDate: "",
      login: "",
      email: "",
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
        requestId: "67890",
        statusMessage: "Данные успешно отправлены!",
      });
    }, 1000);
  });
}
</script>
