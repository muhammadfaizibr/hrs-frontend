import React, { useEffect } from 'react';

const GoogleTranslate = () => {
   
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: 'ur,pa,sd,ps', // Specify supported languages (Urdu, Punjabi, Sindhi, Pashto)
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

    return (
        <div id="google_translate_element"></div>
    );
};

export default GoogleTranslate;