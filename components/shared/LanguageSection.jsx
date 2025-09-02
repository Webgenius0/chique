'use client';
import { useEffect, useRef, useState } from "react";

const LanguageSection = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLanguage") || "en"
    );
    const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);
    const googleTranslateRef = useRef(null);

    const languages = [
        { code: "en", name: "English" },
        { code: "es", name: "Spanish" },
        { code: "fr", name: "French" },
        { code: "de", name: "German" },
        { code: "pt", name: "Portuguese" },
    ];

    useEffect(() => {
        const initializeGoogleTranslate = () => {
            window.googleTranslateElementInit = () => {
                googleTranslateRef.current = new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: languages.map((lang) => lang.code).join(","),
                        layout:
                            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );

                // Apply saved language
                setTimeout(() => {
                    const select = document.querySelector(".goog-te-combo");
                    if (select) {
                        select.value = selectedLanguage;
                        select.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                }, 500);

                setGoogleTranslateLoaded(true);
            };

            if (!window.google || !window.google.translate) {
                const script = document.createElement("script");
                script.src =
                    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                script.async = true;
                document.body.appendChild(script);
            } else {
                window.googleTranslateElementInit();
            }
        };

        initializeGoogleTranslate();

        return () => {
            if (window.googleTranslateElementInit) {
                delete window.googleTranslateElementInit;
            }
        };
    }, []);

    // Handle language change
    const handleLanguageChange = (e) => {
        const langCode = e.target.value;
        setSelectedLanguage(langCode);
        localStorage.setItem("selectedLanguage", langCode);

        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = langCode;
            select.dispatchEvent(new Event("change", { bubbles: true }));
        }
    };

    return (
        <div className="language-selector">
            {/* Hidden Google Translate Element */}
            <div id="google_translate_element" style={{ display: "none" }}></div>

            {/* Custom Select Dropdown */}
            <select
                translate="no"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="custom-language-select"
                disabled={!googleTranslateLoaded}
            >
                {languages.map((language) => (
                    <option translate="no" key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSection;
