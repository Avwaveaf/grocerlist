export const GoogleIcon = ({ id, iconName, stylingClassName }) => {
  return (
    <span id={id} className={`material-symbols-outlined ${stylingClassName}`}>
      {iconName}
    </span>
  );
};
