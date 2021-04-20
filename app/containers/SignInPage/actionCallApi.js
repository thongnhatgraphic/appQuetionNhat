import callApiRequest from "./../../utils/request"


export const fetch_list_user_axios = (url) => {
    return callApiRequest.get(url)
}