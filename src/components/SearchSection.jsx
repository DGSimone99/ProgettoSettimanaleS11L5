import { useSelector } from "react-redux";
import MusicSection from "./MusicSection";
import { Col } from "react-bootstrap";
import { useEffect } from "react";

const SearchSection = () => {
  const search = useSelector((state) => state.search.content);

  useEffect(() => {
    search;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return search ? (
    <Col className="mainPage pt-5">
      <div className="text-white">
        Ricerca: <MusicSection artistName={search} />
      </div>
    </Col>
  ) : (
    <div></div>
  );
};

export default SearchSection;
