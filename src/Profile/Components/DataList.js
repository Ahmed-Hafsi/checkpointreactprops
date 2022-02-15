import PropTypes from "prop-types";
import Data from "./Data";

const DataList = ({ img, handleClick }) => {
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Data img={img} handleClick={handleClick} />;
    </div>
  );
};

DataList.propTypes = {
  cart: PropTypes.array,
  handleClick: PropTypes.func,
};

export default DataList;
