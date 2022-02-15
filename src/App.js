import Nav from "./Profile/Components/Nav";
import DataList from "./Profile/Components/DataList";
import mohamedaliklai from "./Profile/Components/assets/mohamedaliklai.jpg";
import brucelee from "./Profile/Components/assets/brucelee.jpg";
import ipman from "./Profile/Components/assets/ipman.jpg";


function App() {
  const handleClick = (fullName) => {
    alert(fullName);
  };

  const img = [
    {
      img: mohamedaliklai,
      fullName: "Mohamed Ali ",
      bio: "Male",
      profession: "boxer",
    },
    {
      img: brucelee,
      fullName: "Bruce Lee",
      bio: "Male",
      profession: "Jeet kune do, Boxe, Wing chun"
    },
    {
      img: ipman,
      fullName: "Ip Man",
      bio: "Male",
      profession: "Wing chun"
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Nav />

      <DataList img={img} handleClick={handleClick} />
    </div>
  );
}

export default App;
