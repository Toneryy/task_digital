import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    requestId: null as string | null,
    statusMessage: '' as string,
  }),
  actions: {
    setFormStatus(requestId: string, statusMessage: string) {
      this.requestId = requestId;
      this.statusMessage = statusMessage;
    },
  },
});
