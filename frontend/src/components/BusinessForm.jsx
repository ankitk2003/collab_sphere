import axios from "axios";
import React, { useRef, useState } from "react";

const BusinessForm = () => {
  const [industry, setIndustry] = useState("");
  const websiteUrlRef = useRef();
  const campaignGoalsRef = useRef();
  const targetAudienceRef = useRef();
  const budgetRangeRef = useRef();

  async function handleSubmit() {
    try {
      const token = localStorage.getItem("token");
      
      const websiteUrl = websiteUrlRef.current.value;
      const campaignGoals = campaignGoalsRef.current.value;
      const targetAudience = targetAudienceRef.current.value.split(",").map(item => item.trim());
      const budgetRange = budgetRangeRef.current.value;
      
      const res = await axios.post(
        "http://localhost:3000/api/v1/business/profile",
        {
          industry,
          websiteUrl,
          campaignGoals,
          targetAudience,
          budgetRange,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.log("Error submitting form", error);
    }
  }

  return (
    <div className="container mx-auto p-5">
      <div id="logo">
        <span className="font-bold ml-5 text-xl">Collab_sphere</span>
      </div>

      <div className="text-center text-lg font-bold mt-5">
        <p>Complete your business profile to start collaborating.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
        <div className="w-full md:flex-1 p-5">
          <div className="mb-4">
            <label className="block text-sm font-medium">Industry</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Website URL</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter website URL"
              ref={websiteUrlRef}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Campaign Goals</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Describe your campaign goals"
              ref={campaignGoalsRef}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Target Audience</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter target audience (comma separated)"
              ref={targetAudienceRef}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Budget Range</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter budget range"
              ref={budgetRangeRef}
            />
          </div>

          <div className="flex justify-end">
            <button
              className="border-gray-600 border-[1px] p-2 bg-green-500 text-white hover:text-black hover:bg-white rounded-md"
              onClick={handleSubmit}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessForm;
