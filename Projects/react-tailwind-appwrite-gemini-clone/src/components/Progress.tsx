interface CircleProgressProps {
  classes?: string;
  size?: string;
}
const CircleProgress = ({ classes = '', size = '' }: CircleProgressProps) => {
  return (
    <div
      role='progressbar'
      className={`circular-progress ${size} ${classes}`}
    >
     
    </div>
  );
};

interface LinearProgressProps {
  classes?: string;
}

const LinearProgress = ({ classes = '' }: LinearProgressProps) => {
  return (
    <div
      role='progressbar'
      className={`linear-progress ${classes}`}
    >
      <div className='active-indicator'></div>
    </div>
  );
};

export { CircleProgress, LinearProgress };
