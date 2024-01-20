const Tab = ({ tab, handleClick }) => {
  return (
    <div key={tab.name} onClick={handleClick}>
      <img>tab image here</img>
    </div>
  );
};

export default Tab;
