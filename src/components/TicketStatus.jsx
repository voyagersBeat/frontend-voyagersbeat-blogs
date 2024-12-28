import React, { useState } from "react";
import { FaPlane, FaBus, FaTrain } from "react-icons/fa";

const TicketStatus = () => {
  const [mode, setMode] = useState("flight");
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    let apiUrl = "";
    const apiKey = "YOUR_API_KEY_HERE";

    if (mode === "flight") {
      apiUrl = `https://app.goflightlabs.com/flights?flight_iata=${query}&access_key=${apiKey}`;
    } else if (mode === "bus") {
      apiUrl = `https://api.examplebusstatus.com/buses?bus_number=${query}&api_key=${apiKey}`;
    } else if (mode === "train") {
      apiUrl = `https://api.exampletrainstatus.com/trains?train_number=${query}&api_key=${apiKey}`;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      setLoading(false);

      if (result.data && result.data.length > 0) {
        setData(result.data[0]);
      } else {
        setError(`No ${mode} data found. Please check the number.`);
      }
    } catch (err) {
      setLoading(false);
      setError(`An error occurred while fetching ${mode} data.`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setError(`Please enter a valid ${mode} number.`);
      return;
    }
    fetchData();
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Live Travel Status
        </h2>

        {/* Tabs for selecting travel mode */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setMode("flight")}
            className={`flex items-center gap-2 px-4 py-2 ${
              mode === "flight"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded-sm`}
          >
            <FaPlane />
            Flight
          </button>
          <button
            onClick={() => setMode("bus")}
            className={`flex items-center gap-2 px-4 py-2 ${
              mode === "bus"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded-sm`}
          >
            <FaBus />
            Bus
          </button>
          <button
            onClick={() => setMode("train")}
            className={`flex items-center gap-2 px-4 py-2 ${
              mode === "train"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded-sm`}
          >
            <FaTrain />
            Train
          </button>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
        >
          <input
            type="text"
            placeholder={`Enter ${
              mode.charAt(0).toUpperCase() + mode.slice(1)
            } Number`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-sm hover:bg-[#1e73be] transition duration-300"
          >
            Search
          </button>
        </form>

        {/* Loading State */}
        {loading && <p className="text-center text-gray-600">Loading...</p>}

        {/* Error State */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Result Section */}
        {data && (
          <div className="bg-white shadow-lg rounded-md p-6">
            <h3 className="text-xl font-semibold text-[#1e73be] mb-4 flex items-center gap-2">
              {mode === "flight" && <FaPlane />}
              {mode === "bus" && <FaBus />}
              {mode === "train" && <FaTrain />}
              {mode.charAt(0).toUpperCase() + mode.slice(1)} Details
            </h3>
            {mode === "flight" && (
              <>
                <p className="text-gray-700">
                  <span className="font-medium">Flight:</span>{" "}
                  {data.flight.iata}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Airline:</span>{" "}
                  {data.airline.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Departure:</span>{" "}
                  {data.departure.iata} ({data.departure.scheduled})
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Arrival:</span>{" "}
                  {data.arrival.iata} ({data.arrival.scheduled})
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Status:</span>{" "}
                  {data.flight_status}
                </p>
              </>
            )}
            {mode === "bus" && (
              <>
                <p className="text-gray-700">
                  <span className="font-medium">Bus Number:</span>{" "}
                  {data.bus_number}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Route:</span> {data.route}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Departure:</span>{" "}
                  {data.departure_time}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Arrival:</span>{" "}
                  {data.arrival_time}
                </p>
              </>
            )}
            {mode === "train" && (
              <>
                <p className="text-gray-700">
                  <span className="font-medium">Train Number:</span>{" "}
                  {data.train_number}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Route:</span> {data.route}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Departure:</span>{" "}
                  {data.departure_time}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Arrival:</span>{" "}
                  {data.arrival_time}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketStatus;
