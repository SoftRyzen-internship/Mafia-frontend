'use client';

import { TextAreaProps } from '@/types';

export const TextArea: React.FC<TextAreaProps> = ({
  textarea,
  register,
  errors,
}) => {
  const { label, placeholder, name, options } = textarea;

  const usedPattern: RegExp = options.pattern
    ? new RegExp(options.pattern.value)
    : /^.*$/;

  if (options?.pattern) {
    options.pattern.value = usedPattern;
  }

  const hasError = errors[name];

  return (
    <label className="label-behavior">
      {label}
      <textarea
        className={`input-behavior mt-[4px] ${
          hasError && 'input-error-behavior'
        } resize-none`}
        placeholder={placeholder}
        {...register(name, options)}
      />

      <span className={`${hasError ? 'block' : 'hidden'} error-behavior`}>
        {hasError?.message?.toString()}
      </span>
    </label>
  );
};
