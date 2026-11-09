import "./Tab.css";
import { useState, useEffect } from "react";
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.";
const tabs = [
  {
    id: 1,
    title: "Tab1",
    content: "Content1",
    description: lorem,
  },
  {
    id: 2,
    title: "Tab2",
    content: "Content2",
    description: lorem,
  },
  {
    id: 3,
    title: "Tab3",
    content: "Content3",
    description: lorem,
  },
  {
    id: 4,
    title: "Tab4",
    content: "Content4",
    description: lorem,
  },
];
function Tab() {
  const saved = Number(localStorage.getItem("activeTab"));

  const [activeTab, setActiveTab] = useState(saved || 1);
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <div className="header">
        <h1>Tabs Component with React</h1>
        <div className="list">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className={tab.id === activeTab ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </span>
          ))}
        </div>
      </div>
      <div className="content">
        <h2>{current.content}</h2>
        <p>{current.description}</p>
      </div>
    </div>
  );
}
export default Tab;
