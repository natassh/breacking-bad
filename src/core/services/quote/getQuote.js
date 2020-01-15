import { endPoint } from '../../api/config/api-config';

const getQuote = () => {
  const phraseResponseObject = fetch(endPoint);
  const phraseJsonPromise = phraseResponseObject.then(res => res.json());
  const phraseBloggerData = phraseJsonPromise.then(data => data);
  return phraseBloggerData;
};

export { getQuote };
