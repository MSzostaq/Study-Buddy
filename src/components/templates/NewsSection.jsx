import React from "react";
import styled from "styled-components";
import ViewWrapper from "components/molecules/ViewWrapper";
import Button from "components/atoms/Button";

const Wrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  overflow-y: scroll;
  padding: 50px;
`;

const NewsSectionHeader = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: auto;
`;

const ArticleWrapper = styled(ViewWrapper)`
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 16px 0;

  p {
    line-height: 1.6;
  }
`;

const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const data = [
  {
    title: "New computers at school",
    category: "Tech news",
    content:
      "Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.",
    image: "https://unsplash.it/200/100",
  },
  {
    title: "New computers at school1",
    category: "Tech news",
    content:
      "Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.",
  },
  {
    title: "New computers at school2",
    category: "Tech news",
    content:
      "Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.",
  },
  {
    title: "New computers at school3",
    category: "Tech news",
    content:
      "Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.Lorem ipsum door sit amet.",
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed section</NewsSectionHeader>
      {data.map(({ category, content, image = null, title }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <p>{content}</p>
          {image ? <img src={image} alt="article" /> : null}
          <Button isBig>Click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
