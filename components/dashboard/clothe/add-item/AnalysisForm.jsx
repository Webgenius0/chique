"use client";
import { useState } from "react";
import ClothingUploader from "./ClothingUploader";
import ItemAddForm from "./ItemAddForm";

const AnalysisForm = () => {
  const [aiAnalyze, setAiAnalyze] = useState({
    image: null,
    result: null,
  });
  const [status, setStatus] = useState({
    error: null,
    rawResponse: null,
    isLoading: false,
  });
  console.log(aiAnalyze);
  // on submit
  return (
    <div className="w-full flex xl:flex-row flex-col gap-8">
      {/* Clothing Uploader Section */}
      <ClothingUploader setAiAnalyze={setAiAnalyze} setStatus={setStatus} status={status} />
      {/* final submit form*/}
      <ItemAddForm aiAnalyze={aiAnalyze} setAiAnalyze={setAiAnalyze} setStatus={setStatus} status={status} />
    </div>
  );
};

export default AnalysisForm;
