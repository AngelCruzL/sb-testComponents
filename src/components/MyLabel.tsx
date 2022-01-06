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
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * This is the capitalization option of the label
   */
  allCaps?: boolean;
  /**
   * This is the customizable font color of the label
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
