import React from 'react';
import SmartBinImage from '../images/SmartBinImage.png'; // Adjust the path if needed
import '../styles/smartbins.css';

const SmartBins = () => {
  // Helper function to generate a SmartBinID following the pattern:
  // letter letter number number letter number letter number letter number
  const generateSmartBinID = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const pattern = ['L', 'L', 'N', 'N', 'L', 'N', 'L', 'N', 'L', 'N'];
    return pattern
      .map(charType =>
        charType === 'L'
          ? letters[Math.floor(Math.random() * letters.length)]
          : numbers[Math.floor(Math.random() * numbers.length)]
      )
      .join('');
  };

  // Helper to generate a random integer between min and max (inclusive)
  const getRandomInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Array of 10 cities in the eastern region of Saudi Arabia
  const cities = [
    "Dammam",
    "Khobar",
    "Dhahran",
    "Hofuf",
    "Qatif",
    "Jubail",
    "Al Ahsa",
    "Ras Tanura",
    "Saihat",
    "Abqaiq"
  ];

  // Create 10 SmartBin objects
  const smartBins = [];
  for (let i = 0; i < 10; i++) {
    let fullness;
    // Assign fullness based on the index:
    // 2 empty, 2 between 26-49, 2 between 50-74, 2 between 75-99, 2 full (100)
    if (i < 2) {
      fullness = 0;
    } else if (i < 4) {
      fullness = getRandomInRange(26, 49);
    } else if (i < 6) {
      fullness = getRandomInRange(50, 74);
    } else if (i < 8) {
      fullness = getRandomInRange(75, 99);
    } else {
      fullness = 100;
    }

    smartBins.push({
      name: `Smart bin ${i + 1}`,
      fullness,
      smartBinID: generateSmartBinID(),
      city: cities[i] || "Unknown"
    });
  }

  return (
    <div className="smart-bins-container">
      {smartBins.map((bin, index) => (
        <div key={index} className="smart-bin-card">
          <h2 className="bin-name">{bin.name}</h2>
          <img src={SmartBinImage} alt="Smart Bin" className="bin-image" />
          <p className="bin-id">ID: {bin.smartBinID}</p>
          <p className="bin-city">City: {bin.city}</p>
          <p className="bin-fullness">
            Fullness: <span>{bin.fullness}%</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default SmartBins;