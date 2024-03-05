import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
    const [receivedData, setReceivedData] = useState(null);
    // try to get the date to initialize to today
    const [selectedDate, setSelectedDate] = useState(""); // State variable for selected date

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://0.0.0.0:8080/search?date=${selectedDate}`);
                setReceivedData(response.data);
        } catch (error) {
            alert("Choose the current or past date.")
            console.error('Error fetching data from backend:', error);
        }
    };

    useEffect(() => {
        if (selectedDate) {
            fetchData()
        }
    }, [selectedDate]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="container">
            <h2>Select Date:</h2>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="date-input"
            />
            {receivedData && (
                <div>
                    <h2>Picture of the Day:</h2>
                    <div className="picture-container">
                        <img src={receivedData.url} alt={receivedData.title} className="apod-image" />
                        <div className="picture-info">
                            <p><strong>Title:</strong> {receivedData.title}</p>
                            <p><strong>Date:</strong> {receivedData.date}</p>
                            <p><strong>Explanation:</strong> {receivedData.explanation}</p>
                            <p><strong>Copyright:</strong> {receivedData.copyright}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
