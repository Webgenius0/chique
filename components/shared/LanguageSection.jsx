"use client";
import React, { useEffect, useRef, useState } from "react";

const LanguageSection = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("en"); // safe default
    const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);
    const googleTranslateRef = useRef(null);
    const [mounted, setMounted] = useState(false); // to prevent hydration mismatch

    const languages = [
        { code: "en", name: "English" },
        { code: "fr", name: "French" },
        { code: "es", name: "Spanish" },
        { code: "it", name: "Italian" },
    ];

    // Fix hydration mismatch: wait until mounted
    useEffect(() => {
        setMounted(true);
        const storedLang = localStorage.getItem("selectedLanguage") || "en";
        setSelectedLanguage(storedLang);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const initializeGoogleTranslate = () => {
            window.googleTranslateElementInit = () => {
                googleTranslateRef.current =
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",
                            includedLanguages: languages.map((lang) => lang.code).join(","),
                            layout:
                                window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                            autoDisplay: false,
                        },
                        "google_translate_element"
                    );

                // apply stored language
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
    }, [mounted, selectedLanguage]);

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

    if (!mounted) return null; // 🚀 prevent hydration error

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
