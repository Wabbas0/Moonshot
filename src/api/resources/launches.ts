import request from "../request";

export interface Launch {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  probability: number;
  holdreason: string;
  failreason: string;
  hashtag: string;
  launch_service_provider: {
    id: number;
    url: string;
    name: string;
    type: string;
  };
  pad: {
    id: number;
    url: string;
    agency_id: number;
    name: string;
    info_url: string;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    map_image: string;
    total_launch_count: number;
  };
  infoURLs: string;
  vidURLs: string;
  webcast_live: boolean;
  image: string;
  infographic: string;
}

export const getLaunches = async (
  startDate: string,
  endDate: string,
  offset?: number
) => {
  try {
    const results = await request({
      url: `/launch/?window_start__gte=${startDate}&window_end__lte=${endDate}&limit=100${
        offset ? `&offset=${offset}` : ""
        }`,
    });

    if (results) {
      return results;
    }

    throw new Error("No result found");
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export default getLaunches;
