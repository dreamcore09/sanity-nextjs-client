import { queryUriBuilder } from "../src/sanity-client";

test('Generates api url correct', () => {
  const result = queryUriBuilder({ apiHost: 'api.sanity.io' , dataSet: 'test-dataset', projectId: 'xxx123', apiKey: 'asbcdef1234567890', apiVersion: 'v2022-03-07' }, '*[]', 'raw');
  expect(result.toString()).toBe('https://xxx123.api.sanity.io/v2022-03-07/data/query/test-dataset?query=*%5B%5D&perspective=raw');
});