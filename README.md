# Frontend Test Viz

## Instructions

1. Install dependencies

```sh
yarn # or npm install
yarn start # or npm run start
```

2. import `setupChart` from `src/assets/setup.mjs`
3. use `setupChart` to receive the basic setup of axles, domain, scales for a basic chart (viewable in browser)
4. Generate 50 random `Point[]` tuples between the provided min and maxes returned from `setupChart()`
5. plot these points on the chart
6. add a tooltip that displays on hover for each dot

