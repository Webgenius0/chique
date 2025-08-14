"use client"

import CommonBtn from "@/components/common/CommonBtn"
import CommonInputWrapper from "@/components/common/CommonInputWrapper"
import { Rate } from "antd"
import { useState } from "react"
import { useForm } from "react-hook-form"

const FeedBackForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [value, setValue] = useState(2);
    // on submit
    const onSubmit = (data) => {
        console.log(data)
    }
    // form
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto flex flex-col gap-3 sm:gap-6 justify-start items-center">
            <h1 className="sm:text-3xl text-2xl font-bold capitalize">Give Review</h1>
            <div className="w-full flex justify-between items-center gap-3">
                <p className="font-medium capitalize text-xl">Select Rating</p>
                <Rate tooltips={desc} onChange={setValue} value={value} />
            </div>
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="textarea"
                name="review"
                placeholder="Type your review here..."
                register_as="name"
                validationRules={{
                    required: "This field is required",
                }}
            />
            {/* submit button */}
            <CommonBtn type="submit" isLoading={false}>
                Submit
            </CommonBtn>
        </form>
    )
}

export default FeedBackForm