import PropTypes from "prop-types";

const Data = ({ img, handleClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {img.map((profile) => {
        return (
          <div key={profile.fullName} onClick={() => handleClick(profile.fullName)}>
            <img
              src={profile.img}
              alt={profile.fullName}
              height={160}
              width={200}
            />
            <h4 style={{ textAlign: "center" }}>{profile.fullName}</h4>
            <h5 style={{ textAlign: "center" }}>{profile.bio}</h5>
            <h5 style={{ textAlign: "center" }}>{profile.profession}</h5>

          </div>
        );
      })}
    </div>
  );
};

Data.propTypes = {
  profile: PropTypes.array,
  handleClick: PropTypes.func,
};

export default Data;