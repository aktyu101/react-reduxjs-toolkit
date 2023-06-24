import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styled from "@emotion/styled";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    // const wait = () =>
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("성공");
    //     }, 3000);
    //   });
    // wait()
    //   .then((message) => {
    //     console.log(message);
    //     console.log("after wait");
    //   })
    //   .catch((error) => console.log("error", error));
    async function getPhotos() {
      const result = await axios("https://jsonplaceholder.typicode.com/photos");
      setPhotos(result.data.slice(0, 50));
    }
    getPhotos();
    // axios("https://jsonplaceholder.typicode.com/photos").then((result) => {
    //   setPhotos(result.data);
    // });
  }, []);
  //promise

  return (
    <>
      <ListContainerInner>
        {photos.map((photo) => (
          <ListItem key={photo.id}>
            <PhotoBox>
              <PhotoImage src={photo.url} alt={photo.title} />
            </PhotoBox>
            <PhotoTitle>{photo.title}</PhotoTitle>
          </ListItem>
        ))}
      </ListContainerInner>
    </>
  );
}
const ListItem = ({ children }) => {
  const [target, SetTarget] = useState(null);
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(() => {}, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [target]);
  return <StyledListItem ref={SetTarget}>{children}</StyledListItem>;
};

//axios api 호출
const ListContainerInner = styled.ul`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-flow: wrap;
`;
const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 30px;
  justify-content: center;
  -webkit-justify-content: flex-start;
`;
const PhotoTitle = styled.div`
  font-weight: 400;
  width: 400px;
  height: 80px;
`;
const PhotoBox = styled.div``;
const PhotoImage = styled.img`
  width: 400px;
  height: auto;
`;
//target이 있어야 함, ref가 아이템마다 적용되어 있어야 함
