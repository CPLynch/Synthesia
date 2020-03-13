import React, { useState, useEffect } from "react";
import styled from "styled-components";

//Components
import Loading from "./Loading";
import { Story, TopStoriesSection } from "./StyledComponents/TopStories";

export default function LatestStories() {
  const [bestStoriesIdArray, setBestStories] = useState([]);
  const [bestStoriesDataArray, setBestStoriesDataArray] = useState([]);
  const [grabNewBatch, setGrabNewBatch] = useState(0);
  const [loading, setLoading] = useState(true);

  /*************************************/
  /**
   * Gets an array of ids to the latest best stories at HackerNews
   * @returns {Promise<void>}
   */
  async function getAndSetBestIds() {
    const bestStoriesJSON = await fetch(
      "https://hacker-news.firebaseio.com/v0/beststories.json"
    );
    const resultJSON = await bestStoriesJSON.json();
    setBestStories(resultJSON);
    setGrabNewBatch(12);
  }

  useEffect(() => {
    console.log("getAndSet");
    getAndSetBestIds();
  }, [setBestStories, setGrabNewBatch]);

  /*************************************/

  /**
   * Gets a batch of stories from the array of ids and adds them to the list of current stories
   * @params numberToRetrieve is the batch size
   * @returns {Promise<void>}
   */
  async function addToBestStoryDataArray(numberToRetrieve) {
    console.log("a");
    if (!bestStoriesIdArray) return;

    let newBatch = await Promise.all(
      bestStoriesIdArray
        .slice(
          bestStoriesDataArray.length,
          bestStoriesDataArray.length + numberToRetrieve
        )
        .map(id => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          ).then(data => data.json());
        })
    );

    setBestStoriesDataArray([...bestStoriesDataArray, ...newBatch]);
    setLoading(false);
  }

  useEffect(() => {
    console.log("batchOfBest");
    if (grabNewBatch) {
      addToBestStoryDataArray(grabNewBatch);
      setGrabNewBatch(0);
    }
  }, [
    grabNewBatch,
    bestStoriesIdArray,
    setGrabNewBatch,
    setBestStoriesDataArray,
    setLoading
  ]);

  /**************************************/

  return (
    <TopStoriesSection>
      {loading ? (
        <Loading />
      ) : (
        bestStoriesDataArray.map((story, i) => (
          <a
            target="_blank"
            style={{
              color: "inherit",
              textDecoration: "inherit"
            }}
            key={story.id}
            href={story.url}
          >
            <Story main={!!(i === 0)}>
              <h3 style={{ paddingBottom: "10px" }}>{story.title}</h3>
              <p>{new Date(story.time * 1000).toDateString()}</p>
              <small
                style={{
                  marginTop: "6px",
                  display: "block",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {story.url}
              </small>
            </Story>
          </a>
        ))
      )}
      {loading || (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px"
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "40px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "20px"
            }}
            onClick={() => setGrabNewBatch(6)}
          >
            More
          </button>
        </div>
      )}
    </TopStoriesSection>
  );
}
