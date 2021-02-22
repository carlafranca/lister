# Github repo Lister

Single-page App to retrieve github organizations plubic repositories

## Installation

Create a github presonal access token to increase the API Rate limit.

Setting > developer settings > personal access token

Add the token to the .env file on REACT_APP_LISTER_API_TOKEN=xxxxxxxx

### Based on the requirement

- Github API has a bit of a confusion with "stargazer_count" and "watchers" which both are displaying the same data. They're using the "subscribers_count" as watchers but it's not part of the "org-repos" endpoint.
- The new version (V4) comes with the GraphiQL, maybe it would be a better option to reduce the calls/payload.
- Also I Didn't have the time to finish styling the app, testing crossbrowser, work on accessibility and other improvements.

### Refactor/hotfix

With a bit of extra time I did some improvements.

- Refactor style using styled-content
- Fixed major peformance issue(render). changed form/input to an uncontrolled component using useRef.
- Cleaned useFetch code
- Created a useSort hook. Did the basics for a reusable component, need urgent improvments (at moment using useReduce)
