import type { FormValues } from "../types";

const BASE_URL = "http://localhost:3210/api";

export async function registerUser(data: FormValues): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${BASE_URL}/registration/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Ошибка регистрации: ${errorText}`);
  }

  return response.json();
}
