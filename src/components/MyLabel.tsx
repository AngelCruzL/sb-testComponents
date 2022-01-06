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
  /**
   * This is the color of the label
   */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
   * This is the capitalization option of the label
   */
  allCaps?: boolean;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
