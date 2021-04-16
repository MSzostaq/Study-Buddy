import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
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

const ContentWrapper = styled.div`
  display: flex;

  img {
    margin-left: 24px;
    max-height: 100px;
    max-width: 160px;
    object-fit: cover;
  }
`;

export const query = `
  {
    allArticles {
      id
      title
      category
      content
      image {
        url
      }
    }
  }
  `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed section</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, category, content, image = null, title }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : "Loading..."}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
