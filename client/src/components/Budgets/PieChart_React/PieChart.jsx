import React from "react";
import "./PieChart_Media.css";
import "./PieChart.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Entertainment", value: 50, color: "#2B8C82" },
  { name: "Bills", value: 750, color: "#8FD3E8" },
  { name: "Dining Out", value: 75, color: "#E8C9A9" },
  { name: "Personal Care", value: 100, color: "#6E6A83" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

function SpendingChart() {
  return (
    <div
      className="mediaNoneFLex"
    >
      {/* CHART */}
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <PieChart>
            {/* OUTER RING */}
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={105}
              paddingAngle={2}
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            {/* INNER SOFT RING */}
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                  opacity={0.35}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER TEXT */}
        <div
          style={{
            position: "relative",
            top: "-145px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            ${total}
          </h1>

          <p
            style={{
              marginTop: 8,
              color: "#888",
              fontSize: "1rem",
            }}
          >
            of $975 limit
          </p>
        </div>
      </div>

      {/* LEGEND */}
      <div className="PieContainer">
        {data.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 5,
                height: 40,
                borderRadius: 4,
                background: item.color,
              }}
            />

            <div>
              <div
                style={{
                  color: "#777",
                  fontSize: "1rem",
                }}
              >
                {item.name}
              </div>

              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                ${item.value.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingChart;