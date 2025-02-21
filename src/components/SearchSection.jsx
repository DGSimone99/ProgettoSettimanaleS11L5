import { useSelector } from "react-redux";
import MusicSection from "./MusicSection";
import { Col } from "react-bootstrap";

const SearchSection = () => {
  const search = useSelector((state) => state.search.content);
  return search ? (
    <Col xs={12} md={9} className="offset-md-2 mainPage pt-5">
      <div className="text-white">
        Ricerca: <MusicSection artistName={search} />{" "}
      </div>
      ;
    </Col>
  ) : (
    <div></div>
  );
};

export default SearchSection;
