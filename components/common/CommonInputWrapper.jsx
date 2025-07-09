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
  // Function to normalize the value to always return primitive values
  const normalizeValue = (val) => {
    if (selectMode === "multiple" || selectMode === "tags") {
      if (Array.isArray(val)) {
        return val.map(item => typeof item === 'object' ? item.value : item);
      }
      return val ? [typeof val === 'object' ? val.value : val] : [];
    }
    return typeof val === 'object' ? val?.value : val;
  };
  // Normalize the initial value
  const normalizedValue = normalizeValue(value);
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-2 justify-start items-start text-lg text-primary-dark",
        wrapperClass
      )}
    >
      {/* Label */}
      {label && (
        <label
          className={cn("capitalize font-medium", labeClass)}
          htmlFor={register_as}
        >
          {label}
        </label>
      )}
      <div className={cn('w-full border px-6 py-4 flex gap-2 rounded-xl border-common-border bg-white', innerWrapper)}>
        {/* left icon */}
        {icon && <div className="shrink-0 w-fit"> {icon} </div>}
        {/* Textarea */}
        {type === "textarea" ? (
          <textarea
            id={register_as}
            placeholder={placeholder}
            name={name}
            defaultValue={value}
            className={cn(
              "w-full border-none capitalize outline-none resize-none min-h-48 ",
              textareaClass
            )}
            {...register(register_as, validationRules)}
          />
        ) : type === "select" ? (
          <div
            className={cn(
              "w-full !text-lg",
              selectClass
            )}
          >
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
                      // For multiple select, return array of values
                      field.onChange(selectedValue);
                    } else {
                      // For single select, return just the value (not the object)
                      field.onChange(option?.value || selectedValue);
                    }
                  }}
                  className="w-full bg-transparent border-none capitalize outline-none placeholder:text-dark"
                  showSearch
                  allowClear
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
              "w-full border-none  outline-none",
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
            className={`cursor-pointer`}
          >
            {show ? <FaEye className="sm:text-2xl text-xl" /> : <FaEyeSlash className="sm:text-2xl text-xl" />}
          </button>
        )}
      </div>
      {/* Error Message */}
      {errorMessage && <ErrorText error={errorMessage} />}
    </div>
  );
};

export default CommonInputWrapper;
