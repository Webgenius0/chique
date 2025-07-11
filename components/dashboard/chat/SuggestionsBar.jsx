"use client"

const SuggestionsBar = ({ suggestions, onSuggestionClick }) => {
    return (
        <div className="w-full flex flex-wrap gap-2 justify-start  items-start">
            {suggestions.map((suggestion) => (
                <button
                    key={suggestion.id}
                    onClick={() => onSuggestionClick(suggestion.message)}
                    className="px-4 py-2 text-sm capitalize cursor-pointer text-primary-dark font-medium rounded-full border border-primary-dark hover:bg-primary-dark hover:text-white transition-colors duration-200"
                >
                    {suggestion.message}
                </button>
            ))}
        </div>
    )
}

export default SuggestionsBar