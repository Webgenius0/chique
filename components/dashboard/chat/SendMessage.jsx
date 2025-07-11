"use client"
import { useState, useRef, useCallback } from "react"
import ImagePreview from "./ImagePreview"
import MessageInput from "./MessageInput"
import SuggestionsBar from "./SuggestionsBar"

const SendMessage = () => {
    const [text, setText] = useState("")
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const fileInputRef = useRef(null)

    const suggestions = [
        { id: 1, message: "What should I wear to a wedding?" },
        { id: 2, message: "Help me style this outfit" },
        { id: 3, message: "Suggest casual weekend looks" },
        { id: 4, message: "What colors work with my skin tone?" },
        { id: 5, message: "How to accessorize this dress?" },
        { id: 6, message: "Office outfit ideas" },
    ]

    const handleSendText = () => {
        if (text.trim() || imagePreview) {
            console.log("Sending:", { text, image: imagePreview })
            setText("")
            setImage(null)
            setImagePreview(null)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendText()
        }
    }

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

    const removeImage = useCallback(() => {
        setImage(null)
        setImagePreview(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }, [])

    const handleSuggestionClick = (message) => {
        setText(message)
        setTimeout(() => {
            const input = document.querySelector('input[type="text"]')
            if (input) input.focus()
        }, 0)
    }

    return (
        <div className="w-full shrink-0 flex flex-col gap-4 justify-start items-start p-4 bg-white rounded-lg shadow-sm">
            <SuggestionsBar
                suggestions={suggestions}
                onSuggestionClick={handleSuggestionClick}
            />
            {imagePreview && (
                <ImagePreview
                    imagePreview={imagePreview}
                    onRemove={removeImage}
                />
            )}
            <MessageInput
                text={text}
                onTextChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                onImageChange={handleImageChange}
                fileInputRef={fileInputRef}
                onSend={handleSendText}
                hasContent={text.trim() || imagePreview}
            />
        </div>
    )
}

export default SendMessage