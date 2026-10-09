import { GoogleGenAI } from "@google/genai";

let ai = null;

function getAIInstance() {
  if (!ai) {
    const apiKey = (import.meta).env?.VITE_GEMINI_API_KEY || '';
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

const INDIAN_COLLEGE_DATA = [
  { name: "Uttar Pradesh", count: 9270, lat: 26.8467, lng: 80.9462 },
  { name: "Maharashtra", count: 5683, lat: 19.7515, lng: 75.7139 },
  { name: "Karnataka", count: 4751, lat: 15.3173, lng: 75.7139 },
  { name: "Rajasthan", count: 4503, lat: 27.0238, lng: 74.2179 },
  { name: "Tamil Nadu", count: 2976, lat: 11.1271, lng: 78.6569 },
  { name: "Madhya Pradesh", count: 2797, lat: 22.9734, lng: 78.6569 },
  { name: "Andhra Pradesh", count: 2640, lat: 15.9129, lng: 79.7400 },
  { name: "Gujarat", count: 2630, lat: 22.2587, lng: 71.1924 },
  { name: "Telangana", count: 2124, lat: 18.1124, lng: 79.0193 },
  { name: "Odisha", count: 1643, lat: 20.9517, lng: 85.0985 },
  { name: "West Bengal", count: 1555, lat: 22.9868, lng: 87.8550 },
  { name: "Kerala", count: 1547, lat: 10.8505, lng: 76.2711 },
  { name: "Haryana", count: 1183, lat: 29.0588, lng: 76.0856 },
  { name: "Bihar", count: 1084, lat: 25.0961, lng: 85.3131 },
  { name: "Chhattisgarh", count: 1035, lat: 21.2787, lng: 81.8661 },
  { name: "Punjab", count: 1021, lat: 31.1471, lng: 75.3412 },
  { name: "Assam", count: 674, lat: 26.2006, lng: 92.9376 },
  { name: "Uttarakhand", count: 539, lat: 30.0668, lng: 79.0193 },
  { name: "Himachal Pradesh", count: 368, lat: 31.1048, lng: 77.1734 },
  { name: "Jharkhand", count: 339, lat: 23.6102, lng: 85.2799 },
  { name: "Jammu and Kashmir", count: 318, lat: 33.7782, lng: 76.5762 },
  { name: "Manipur", count: 121, lat: 24.6637, lng: 93.9063 },
  { name: "Delhi", count: 119, lat: 28.7041, lng: 77.1025 },
  { name: "Meghalaya", count: 93, lat: 25.4670, lng: 91.3662 },
  { name: "Puducherry", count: 77, lat: 11.9416, lng: 79.8083 },
  { name: "Nagaland", count: 76, lat: 26.1584, lng: 94.5624 },
  { name: "Goa", count: 68, lat: 15.2993, lng: 74.1240 },
  { name: "Tripura", count: 61, lat: 23.9408, lng: 91.9882 },
  { name: "Arunachal Pradesh", count: 45, lat: 28.2180, lng: 94.7278 },
  { name: "Mizoram", count: 36, lat: 23.1645, lng: 92.9376 },
  { name: "Chandigarh", count: 23, lat: 30.7333, lng: 76.7794 },
  { name: "Sikkim", count: 21, lat: 27.5330, lng: 88.5122 },
  { name: "Dadra and Nagar Haveli and Daman and Diu", count: 21, lat: 20.4283, lng: 72.8397 },
  { name: "Andaman and Nicobar Islands", count: 9, lat: 11.7401, lng: 92.6586 },
  { name: "Ladakh", count: 6, lat: 34.1526, lng: 77.5770 },
  { name: "Lakshadweep", count: 6, lat: 10.5667, lng: 72.6417 },
];

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6A8Vvq_w_oIm0CmHOZJKMXL5WIgWUdjg2-zscOJ6VBfRzEC6Ujc7gI4OxNY-_VSoMSQ/exec";

/**
 * Fetch college data for a given query
 * @param {string} query - Search query (default: "India")
 * @returns {Promise<Array>} Array of location objects
 */
export const fetchCollegeData = async (query = "India") => {
  const normalizedQuery = query.toLowerCase();
  const isDefaultQuery = 
    normalizedQuery.includes("india") || 
    normalizedQuery.includes("hub") || 
    normalizedQuery === "";

  if (isDefaultQuery) {
    return INDIAN_COLLEGE_DATA.map((state, index) => ({
      id: `state-${index}`,
      name: state.name,
      lat: state.lat,
      lng: state.lng,
      score: state.count,
      description: `${state.count.toLocaleString()} registered colleges in ${state.name}.`
    }));
  }

  try {
    const prompt = `
      I need to generate data for a map.
      Analyze the region or topic: "${query}".
      Identify 10-15 distinct cities or specific areas in India that have a significant presence of colleges or universities related to this query.
      
      For each location, provide:
      1. Name of the City/Area
      2. Latitude (numeric)
      3. Longitude (numeric)
      4. A "Density Score" (Number of colleges estimate).
      5. A very brief 1-sentence description.

      STRICT OUTPUT FORMAT:
      Name|Latitude|Longitude|Score|Description
      
      Example:
      Mumbai|19.0760|72.8777|95|Home to Mumbai University.
    `;

    const response = await getAIInstance().models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }], 
        temperature: 0.3,
      },
    });

    const responseText = response.candidates[0].content.parts[0].text || '';
    const lines = responseText.split('\n').filter(line => line.includes('|'));
    
    return lines.map((line, index) => {
      const [name, lat, lng, score, description] = line.split('|').map(s => s.trim());
      return {
        id: `loc-${index}`,
        name: name || 'Unknown',
        lat: parseFloat(lat) || 0,
        lng: parseFloat(lng) || 0,
        score: parseInt(score) || 0,
        description: description || ''
      };
    }).filter(loc => loc.name && loc.lat && loc.lng);

  } catch (error) {
    console.error("Error fetching college data:", error);
    return INDIAN_COLLEGE_DATA.map((state, index) => ({
      id: `state-${index}`,
      name: state.name,
      lat: state.lat,
      lng: state.lng,
      score: state.count,
      description: `${state.count.toLocaleString()} registered colleges in ${state.name}.`
    }));
  }
};