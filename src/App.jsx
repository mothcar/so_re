import { useState } from 'react';
import SajuForm from './components/SajuForm.jsx';
import SajuResult from './components/SajuResult.jsx';
import './App.css';

function App() {
  const [sajuResult, setSajuResult] = useState(null);

  const handleSajuCalculation = (year, month, day, hour) => {
    const saju = calculateSaju(year, month, day, hour);
    const interpretation = interpretSaju(saju);
    setSajuResult({ saju, interpretation });
  };

  return (
    <div className="App">
      <h1>사주 계산기</h1>
      <SajuForm onSubmit={handleSajuCalculation} />
      {sajuResult && <SajuResult result={sajuResult} />}
    </div>
  );
}

function calculateSaju(year, month, day, hour) {
  const baseYear = 1900;
  const celestialStems = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
  const terrestrialBranches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
  const elements = ["목", "화", "토", "금", "수"];

  const yearStem = celestialStems[(year - baseYear) % 10];
  const yearBranch = terrestrialBranches[(year - baseYear) % 12];

  const monthStem = celestialStems[(year * 2 + month) % 10];
  const monthBranch = terrestrialBranches[month - 1];

  const totalDays = (year - baseYear) * 365 + month * 30 + day;
  const dayStem = celestialStems[totalDays % 10];
  const dayBranch = terrestrialBranches[totalDays % 12];

  const hourStem = celestialStems[(totalDays * 2 + Math.floor((hour + 1) / 2)) % 10];
  const hourBranch = terrestrialBranches[Math.floor((hour + 1) / 2) % 12];

  return {
    year: `${yearStem}${yearBranch}`,
    month: `${monthStem}${monthBranch}`,
    day: `${dayStem}${dayBranch}`,
    hour: `${hourStem}${hourBranch}`,
    dayStemElement: elements[celestialStems.indexOf(dayStem) % 5]
  };
}

function interpretSaju(saju) {
  let interpretation = "간단한 사주 해석:\n";

  interpretation += `당신의 일주(日柱)는 ${saju.day}입니다. `;
  interpretation += `기본 성격은 ${saju.dayStemElement} 의 성질을 띱니다.\n`;

  const pillars = [saju.year, saju.month, saju.day, saju.hour];
  const uniquePillars = new Set(pillars);

  if (uniquePillars.size === 4) {
    interpretation += "네 기둥이 모두 다르므로, 다재다능한 성격일 수 있습니다.\n";
  } else if (uniquePillars.size === 1) {
    interpretation += "네 기둥이 모두 같아, 한 가지 일에 매우 집중된 성격일 수 있습니다.\n";
  } else {
    interpretation += "일부 기둥이 반복되어, 특정 성질이 강화된 성격일 수 있습니다.\n";
  }

  return interpretation;
}

export default App;
