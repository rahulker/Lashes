import PropTypes from "prop-types";
function LevelCards({
  imgContent,
  levelNum,
  percentage,
  ListOne,
  listTwo,
  listThree,
  hiddenOrShow,
  hiddenOrShow2,
}) {
  return (
    <div className="level-cards text-left w-fit">
      <img src={imgContent} alt="level of product quality" />
      {/* content of card */}
      <div className="mt-5 flex flex-col gap-2.5">
        <p className="opacity-20">{levelNum}</p>
        <p className="font-bold">{percentage}</p>
        <ul className="quality-level-list">
          <li>{ListOne}</li>
          <li style={{ display: hiddenOrShow }}>{listTwo}</li>
          <li style={{ display: hiddenOrShow2 }}>{listThree}</li>
        </ul>
      </div>
    </div>
  );
}
LevelCards.propTypes = {
  imgContent: PropTypes.any,
  levelNum: PropTypes.string,
  percentage: PropTypes.string,
  ListOne: PropTypes.string,
  listTwo: PropTypes.string,
  listThree: PropTypes.string,
  hiddenOrShow: PropTypes.string,
  hiddenOrShow2: PropTypes.string,
};
export default LevelCards;