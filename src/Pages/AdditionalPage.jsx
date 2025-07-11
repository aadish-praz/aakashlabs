import React, { useState } from "react";

const AdditionalPage = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single", {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "3b3a9d459amsh34120b6f71333a9p1733fdjsn2fd4cf069039",
          "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com"
        }
      });

      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-sky-100 rounded-md shadow-md mt-10 max-w-xl mx-auto mb-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Get a Random Joke</h2>
      <button
        onClick={fetchJoke}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Loading..." : "Tell me a joke"}
      </button>
      {joke && <p className="mt-6 text-lg text-gray-800">{joke}</p>}
    </div>
  );
};

export default AdditionalPage;
