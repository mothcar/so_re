function SajuResult({ result }) {
  const { saju, interpretation } = result;

  return (
    <div>
      <h2>사주 결과</h2>
      <p>년주: {saju.year}</p>
      <p>월주: {saju.month}</p>
      <p>일주: {saju.day}</p>
      <p>시주: {saju.hour}</p>
      <h3>해석</h3>
      <p>{interpretation}</p>
    </div>
  );
}

export default SajuResult;