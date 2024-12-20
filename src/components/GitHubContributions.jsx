import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { request, gql } from "graphql-request";
import { GITHUB_TOKEN, username} from "../config";
const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);

  const fetchGitHubData = async () => {
    const GITHUB_TOKEN =GITHUB_TOKEN
    const username = username // Replace with your GitHub username

    const query = gql`
      query ($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const headers = {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    };

    try {
      const data = await request("https://api.github.com/graphql", query, { username }, headers);
      const contributionsData = data.user.contributionsCollection.contributionCalendar.weeks
        .flatMap((week) => week.contributionDays)
        .map((day) => ({
          date: day.date,
          count: day.contributionCount,
        }));

      setContributions(contributionsData);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="card" >
    <div
      style={{
        padding: "20px",
        backgroundColor: "black",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2>GitHub Contributions</h2>
      {contributions.length > 0 ? (
        <CalendarHeatmap
          startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
          endDate={new Date()}
          values={contributions}
          classForValue={(value) => {
            if (!value || value.count === 0) {
              return "color-empty";
            }
            return `color-scale-${Math.min(value.count, 4)}`;
          }}
          tooltipDataAttrs={(value) => ({
            "data-tip": `${value.date} - ${value.count} contributions`,
          })}
        />
      ) : (
        <p>Loading contributions...</p>
      )}
      <style>
        {`
          .color-empty {
            fill: #ebedf0;
          }
          .color-scale-1 {
            fill: #c6e48b;
          }
          .color-scale-2 {
            fill: #7bc96f;
          }
          .color-scale-3 {
            fill: #239a3b;
          }
          .color-scale-4 {
            fill: #196127;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default GitHubContributions;
