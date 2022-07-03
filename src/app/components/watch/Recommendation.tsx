import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Recomm = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  padding-bottom: 10px;
  padding-right: 10px;
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 80px;
  height: 100px;
  position: relative;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const Duration = styled.span`
  position: absolute;
  font-size: small;
  color: white;
  background: #000;
  bottom: 1%;
  right: 1%;
`;
const Text = styled.div`
  flex: 1;
  padding-left: 10px;
  height: 100px;
`;
const Name = styled.h4`
  font-weight: normal;
  margin: 1px;
`;
const Channel = styled.span`
  font-size: smaller;
  display: block;
  color: gray;
`;
const Actions = styled.div`
  cursor: pointer;
`;
const Recommendation = () => {
  return (
    <Recomm>
      <ImgContainer>
        <Img src="/images/cliff.avif" alt="creation" />
        <Duration>24:00</Duration>
      </ImgContainer>
      <Text>
        <Name>The great and marvelous works of God</Name>
        <Channel>In God's Hands</Channel>
        <Channel>50K views</Channel>
      </Text>
      <Actions>
        <FontAwesomeIcon size="lg" icon={faEllipsisV} />
      </Actions>
    </Recomm>
  );
};

export default Recommendation;
