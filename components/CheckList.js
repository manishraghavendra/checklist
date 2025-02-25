import { useState, useEffect } from "react";


const lifeExperiences = [
    "👶 Be born",
    "🚼 Take first steps",
    "🗣️ Say first words",
    "📚 Learn to read",
    "🤝 Make a best friend",
    "🚴 Learn to ride a bike",
    "📖 Read a book that changes your perspective",
    "🏊 Learn to swim",
    "🏫 Finish elementary school",
    "🏫 Finish middle school",
    "🥊 Play a sport",
    "🛫 Fly in a plane",
    "🛥️ Ride a boat",
    "🚆 Travel in a train",
    "🚁 Fly in a helicopter",
    "💋 Get kissed",
    "🌊 See the ocean",
    "❄️ Experience snowfall",
    "☃️ Make a snowman",
    "🎂 Celebrate an epic birthday",
    "🎶 Attend a live concert",
    "🏕️ Go camping under the stars",
    "🎢 Ride a rollercoaster",
    "🎻 Play an instrument",
    "💳 Get a credit card",
    "🚘 Start driving",
    "🗺️ Go on a road trip",
    "🛂 Visit another country",
    "🎤 Give a speech in front of an audience",
    "🏫 Finish high school",
    "🌐 Learn another language",
    "💰 Invest in something meaningful",
    "📷 Meet someone you admire",
    "🤦‍♂️ Make a terrible mistake",
    "🏆 Win a competition",
    "⛰️ Climb a mountain",
    "🎽 Run a marathon",
    "🍳 Learn to cook",
    "🔦 Explore a cave",
    "🌋 See an active volcano",
    "🎓 Graduate college",
    "💕 Have a long-term relationship",
    "💔 Get your heart broken",
    "🖊️ Sign your first contract",
    "🏢 Get your first job",
    "📈 Get a promotion",
    "💵 Earn your own paycheck",
    "🔥 Get fired",
    "📰 Be featured in the news",
    "🤡 Make a big career change",
    "🏠 Buy a home",
    "☀️ See a solar eclipse",
    "🌑 See a comet",
    "🌎 Travel the world",
    "🎭 Overcome a personal fear"      
];

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("lifeChecklist")) || [];
    setCheckedItems(savedData);
  }, []);

  // Toggle checkbox state & save progress
  const toggleItem = (item) => {
    const updatedList = checkedItems.includes(item)
      ? checkedItems.filter((i) => i !== item)   
      : [...checkedItems, item];

    setCheckedItems(updatedList);
    localStorage.setItem("lifeChecklist", JSON.stringify(updatedList));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4 text-[oklch(0.645_0.246_16.439)]">
        Life Checklist
      </h1>

      <div className="mb-4">
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all"
            style={{
              width: `${(checkedItems.length / lifeExperiences.length) * 100}%`,
            }}
          ></div>
        </div>
        <p className="text-center mt-2 font-semibold text-gray-700">
          You've completed {checkedItems.length} out of {lifeExperiences.length} items.
        </p>
      </div>


      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {lifeExperiences.map((item) => (
          <li key={item} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={() => toggleItem(item)}
              className="w-5 h-5"
            />
            <span
              className={`text-[oklch(0.645_0.246_16.439)] ${
                checkedItems.includes(item) ? "line-through text-gray-500" : ""
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}




