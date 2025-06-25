import type { Context, ServiceBroker } from "moleculer";

export default {
  name: "registration",

  actions: {
    register: {
      params: {
        email: { type: "email" },
        password: { type: "string", min: 6 },
      },
      async handler(ctx: Context<{ email: string; password: string }>) {
        const { email, password } = ctx.params;
        console.log(`Регистрация пользователя: ${email}`);
        return { success: true, message: "Пользователь зарегистрирован" };
      },
    },
  },
};
