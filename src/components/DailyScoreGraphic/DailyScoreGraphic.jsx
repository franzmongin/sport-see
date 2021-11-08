import React, { useState } from "react";
import { Legend, RadialBarChart, RadialBar, Tooltip } from "recharts";

function DailyScoreGraphic({ data, todayScore }) {
  return (
    <div className="daily-score-graphic">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey={todayScore}
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
}

export default DailyScoreGraphic;
