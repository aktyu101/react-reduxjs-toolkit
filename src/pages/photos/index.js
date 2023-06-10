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
      setPhotos(result.data.slice(0, 10));
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
  padding: 50px 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const PhotoTitle = styled.div`
  font-weight: 400;
`;
const PhotoBox = styled.div``;
const PhotoImage = styled.img`
  width: 600px;
  height: auto;
`;
//target이 있어야 함, ref가 아이템마다 적용되어 있어야 함
