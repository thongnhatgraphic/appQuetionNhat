import callApiRequest from '../moduleApiService';

export const fetchListQuestionReQuest = url => callApiRequest.get(url);

export const fetchListUserAxios = url => callApiRequest.get(url);
