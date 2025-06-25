import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from '../types'
import { registerUser } from '../api/client.api';

export function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

const onSubmit: SubmitHandler<FormValues> = async (data) => {
  try {
    const result = await registerUser(data);
    console.log(result.message);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div data-testid="Registration">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Поле email обязательно",
               pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
            },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            aria-invalid={!!errors.password}
            {...register("password", {
              required: "Поле пароль обязательно",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

