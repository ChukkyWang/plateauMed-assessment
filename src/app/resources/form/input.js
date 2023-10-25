"use client";

import { useFormContext } from "react-hook-form";

export function FormInput({
  camelCase,
  placeholder,
  title,
  isOptional,
  className,
  moreRegister,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputName = camelCase?.replace(/"/g, "");

  return (
    <div>
      <label htmlFor={camelCase}>
        {title} {isOptional !== false && <sup style={{ color: "red" }}>*</sup>}
      </label>
      <input
        {...rest}
        name={camelCase}
        id={camelCase}
        placeholder={`Enter ${title}`}
        {...register(camelCase, {
          required: {
            value: isOptional ?? true,
            message: `${title || "This feild"} is required.`,
          },
          ...moreRegister,
        })}
      />
      <>
        <small>{errors && <>{errors?.[inputName]?.message || ""}</>}</small>
      </>
    </div>
  );
}
