/* eslint-disable no-unused-vars */
"use client"
import ErrorText from "@/components/common/ErrorText";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Select } from "antd";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";

const CommonInputWrapper = ({
  wrapperClass,
  inputClass,
  labeClass,
  selectClass,
  textareaClass,
  innerWrapper,
  label = "",
  type = "text",
  placeholder = "",
  register_as = "",
  register,
  name = "",
  options = [],
  errors = {},
  validationRules = {},
  readOnly = false,
  value = "",
  control,
  selectMode = "single",
  icon,
  editForm = false,
}) => {
  const [show, setShow] = useState(false);
  const errorMessage = errors[register_as]?.message;
  const normalizeValue = (val) => {
    if (selectMode === "multiple" || selectMode === "tags") {
      if (Array.isArray(val)) {
        return val.map(item => typeof item === 'object' ? item.value : item);
      }
      return val ? [typeof val === 'object' ? val.value : val] : [];
    }
    return typeof val === 'object' ? val?.value : val;
  };
  const normalizedValue = normalizeValue(value);

  return (
    <div
      className={cn(
        "w-full flex flex-col gap-2 text-lg text-primary-dark",
        wrapperClass
      )}
    >
      {/* Label */}
      {label && (
        <label
          className={cn("capitalize font-medium text-base", labeClass)}
          htmlFor={register_as}
        >
          {label}
        </label>
      )}

      <div className={cn(
        'w-full border px-4 sm:px-6 py-3 sm:py-4 flex gap-2 rounded-lg sm:rounded-xl border-common-border bg-white',
        innerWrapper
      )}>
        {/* Left icon */}
        {icon && <div className="shrink-0 w-fit flex items-center"> 
          {React.cloneElement(icon, { className: "text-lg sm:text-xl" })}
        </div>}

        {/* Textarea */}
        {type === "textarea" ? (
          <textarea
            id={register_as}
            placeholder={placeholder}
            name={name}
            defaultValue={value}
            className={cn(
              "w-full border-none outline-none resize-none min-h-32 sm:min-h-48 text-base",
              textareaClass
            )}
            {...register(register_as, validationRules)}
          />
        ) : type === "select" ? (
          <div className={cn("w-full text-sm sm:text-base", selectClass)}>
            <Controller
              control={control}
              name={register_as}
              defaultValue={normalizedValue}
              rules={validationRules}
              render={({ field }) => (
                <Select
                  {...field}
                  mode={selectMode !== "single" ? selectMode : undefined}
                  placeholder={placeholder}
                  options={options}
                  optionFilterProp="label"
                  value={normalizeValue(field.value)}
                  onChange={(selectedValue, option) => {
                    if (selectMode === "multiple" || selectMode === "tags") {
                      field.onChange(selectedValue);
                    } else {
                      field.onChange(option?.value || selectedValue);
                    }
                  }}
                  className="w-full bg-transparent border-none capitalize outline-none placeholder:text-dark text-base"
                  showSearch
                  allowClear
                  dropdownClassName="text-base"
                />
              )}
            />
          </div>
        ) : (
          <input
            type={type === "password" ? (show ? "text" : "password") : type}
            id={register_as}
            placeholder={placeholder}
            name={name}
            defaultValue={value}
            readOnly={readOnly}
            className={cn(
              "w-full border-none outline-none text-base",
              inputClass
            )}
            {...register(register_as, validationRules)}
          />
        )}

        {/* Eye Icon for Password */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShow((prevState) => !prevState)}
            className="cursor-pointer flex items-center"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? (
              <FaEye className="text-xl" />
            ) : (
              <FaEyeSlash className="text-xl" />
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {errorMessage && <ErrorText error={errorMessage} />}
    </div>
  );
};

export default CommonInputWrapper;