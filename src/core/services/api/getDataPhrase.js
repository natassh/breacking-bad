import { endPoint } from './config/api-config';

const getDataPhrase = () => {
  const phraseResponseObject = fetch(endPoint);
  const phraseJsonPromise = phraseResponseObject.then(res => res.json());
  const phraseBloggerData = phraseJsonPromise.then(data => data);
  return phraseBloggerData;
};

export { getDataPhrase };
