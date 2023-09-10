'use client';

import { InputProps } from '@/types';

export const Input: React.FC<InputProps> = ({ input, register, errors }) => {
  const { label, placeholder, type, name, options } = input;

  const usedPattern: RegExp = options.pattern
    ? new RegExp(options.pattern.value)
    : /^.*$/;

  if (options?.pattern) {
    options.pattern.value = usedPattern;
  }

  const hasError = errors[name];

  return (
    <label className="label-behavior">
      <span>
        {label}
        <span
          className={`${
            options.required ? 'inline' : 'hidden'
          } font-bold text-notify-error`}
        >
          *
        </span>
      </span>

      <input
        className={`input-behavior input-autofill mt-[4px] ${
          hasError && 'input-error-behavior'
        }`}
        type={type ? type : 'text'}
        placeholder={placeholder}
        {...register(name, options)}
      />

      <span className={`${hasError ? 'block' : 'hidden'} error-behavior`}>
        {hasError?.message?.toString()}
      </span>
    </label>
  );
};
