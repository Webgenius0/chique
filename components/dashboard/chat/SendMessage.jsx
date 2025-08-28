"use client"
import { useState, useRef, useCallback } from "react"
import ImagePreview from "./ImagePreview"
import { BsFillSendFill, BsImageFill } from "react-icons/bs"
import { useMutation } from "@tanstack/react-query"
import { axiosPrivateClient } from "@/lib/axios.private.client"

const SendMessage = ({ handleNewMessage }) => {
    // hooks 
    const axiosInstance = axiosPrivateClient()

    const [text, setText] = useState("")
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const fileInputRef = useRef(null)


    // send message to server
    const sendMessage = useMutation({
        mutationKey: ["sendMessage"],
        mutationFn: async () => {
            const formData = new FormData()
            if (image) {
                formData.append("image", image)
            }
            if (text) {
                formData.append("text", text)
            }
            const res = await axiosInstance.post("/open-ai/chat", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            return res.data.data || {}
        },
        onSuccess: (data) => {
            console.log(data)
            const formattedNewMessage = {
                id: uuId,
                sender: "ai",
                message: data.response,
                timestamp: new Date().toISOString(),
                image: data.image
            }
            // handleNewMessage(data)
            setText("")
            removeImage()
        },
        onError: (err) => {
            console.error(err)
        }
    })
    // handle image
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    // remove image
    const removeImage = useCallback(() => {
        setImage(null)
        setImagePreview(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }, [])

    // main render
    return (
        <div className="w-full shrink-0 flex flex-col gap-4 justify-start items-start p-4 bg-white rounded-lg shadow-sm">
            {imagePreview && (
                <ImagePreview
                    imagePreview={imagePreview}
                    onRemove={removeImage}
                />
            )}
            <div className="w-full flex gap-3 items-center">
                {/* Image upload button */}
                <label className="cursor-pointer text-2xl text-primary-dark hover:text-primary-darker p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <BsImageFill />
                    <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        onChange={handleImageChange}
                        accept="image/*"
                        id="image"
                    />
                </label>

                {/* Text input */}
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type your fashion question..."
                        className="w-full xs:p-3 p-2 xs:pr-12 xs:text-base text-sm rounded-lg border border-gray-300 focus:border-primary-dark  outline-none transition-all"
                    />
                </div>

                {/* Send button */}
                <button
                    type="button"
                    className={`xs:w-12 w-10 xs:h-12 h-10 rounded-lg shrink-0 flex border justify-center items-center transition-colors cursor-pointer `}
                >
                    <BsFillSendFill className="text-xl" />
                </button>
            </div>
        </div>
    )
}

export default SendMessage