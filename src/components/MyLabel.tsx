import './MyLabel.module.css';

export interface MyLabelProps {
  /**
   * This is the message to display on the label
   */
  label: string;
  /**
   * This is the size of the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
}: MyLabelProps) => {
  return <span className={`${size}`}>{label}</span>;
};
