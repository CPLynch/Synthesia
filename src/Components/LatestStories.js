import React, { useState, useEffect } from "react";

//Components
import {
  Story,
  LatestStoriesSection,
  LatestHeading
} from "./StyledComponents/LatestStories";

export default function LatestStories() {
  const [latestStoriesDataArray, setLatestStories] = useState([]);
  /**
   * Gets 5 latest stories from HackerNews
   * @returns {Promise<void>}
   */
  async function getAndSet5Latest() {
    const latestStoryIds = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    const latestStoryIdsJSON = await latestStoryIds.json();
    let latest5 = await Promise.all(
      latestStoryIdsJSON.slice(0, 5).map(id => {
        return fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        ).then(data => data.json());
      })
    );
    setLatestStories(latest5);
  }

  useEffect(() => {
    getAndSet5Latest();
  }, [setLatestStories]);
  /****************************************/

  return (
    <LatestStoriesSection>
      <LatestHeading>Latest Stories</LatestHeading>
      {latestStoriesDataArray.length > 0 &&
        latestStoriesDataArray.map(story => {
          if (story !== null) {
            return (
              <a
                key={story.id}
                target="_blank"
                style={{
                  color: "inherit",
                  textDecoration: "inherit"
                }}
                href={story.url}
              >
                <Story>
                  <h3 style={{ paddingBottom: "8px" }}>{story.title}</h3>
                  <p>{new Date(story.time * 1000).toDateString()}</p>
                  <small
                    style={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block",
                      marginTop: "6px"
                    }}
                  >
                    {story.url}
                  </small>
                </Story>
              </a>
            );
          }
        })}
    </LatestStoriesSection>
  );
}
