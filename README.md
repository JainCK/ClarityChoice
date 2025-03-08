# ClarityChoice

## Overview

ClarityChoice is a decision-making tool that evaluates options across multiple criteria. Each option-criterion combination gets a score, and criteria can have different weights to reflect their importance.

## Main Theme

For example, when buying a car, you might evaluate three cars (options) against fuel efficiency, price, and style (criteria). Some criteria (like price) might be more important than others, so they get a higher weight. ClarityChoice makes this dynamic and real-time, allowing a team to build consensus.

## Key Challenges to Watch For

- **Concurrent Edits**: Multiple users editing the same cell simultaneously.
- **Data Consistency**: Ensuring all users see the same state.
- **Performance**: Minimizing unnecessary updates/re-renders.
- **User Tracking**: Identifying who's making which changes.
- **Error Handling**: Managing disconnections and reconnections gracefully.
