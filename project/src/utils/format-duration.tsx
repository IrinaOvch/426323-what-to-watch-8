import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const formatDuration = (runTimeSeconds: number | undefined): string => {
  if (!runTimeSeconds) {
    return '';
  }
  const runTime = runTimeSeconds * 1000;
  if (dayjs.duration(runTime).asHours() > 1) {
    return dayjs.duration(runTime).format('HH:mm:ss');
  }

  return dayjs.duration(runTime).format('mm:ss');
};

const formatRunTime = (runTimeMinutes: number | undefined): string => {
  if (!runTimeMinutes) {
    return '';
  }
  const runTime = runTimeMinutes * 60000;
  return dayjs.duration(runTime).format('HH[h] mm[m]');
};

export { formatDuration, formatRunTime };
