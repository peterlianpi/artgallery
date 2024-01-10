import Items from "../Components/Item/Items";

const Home = (prop) => {
  const art = prop.data.data.Tbl_Art;

  return <Items data={art} />;
};
export default Home;
