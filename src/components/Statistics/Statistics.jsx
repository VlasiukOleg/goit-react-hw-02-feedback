import { StatisticsWraper } from './Statistics,styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsWraper>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total()}</p>
        <p>Positive feedback: {total() === 0 ? 0 : positivePercentage()}%</p>
      </StatisticsWraper>
    </>
  );
};
