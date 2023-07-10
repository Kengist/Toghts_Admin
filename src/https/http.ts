const BASE_URL = "https:://www.base.com/api";

export const httpRequest = async (params) => {
  try {
    const { url, method, body, headers, isFormData = false } = params;

    if (!url) throw new Error("url is not set");
    if (typeof url !== "string") throw new Error("url must be a string");
    const options: any = {
      method: method || "GET",
      redirect: "follow",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("i-token")}`,
        ...headers,
      },
    };

    if (!isFormData) {
      options.headers["Content-Type"] = "application/json";
    }

    if (body) {
      options.body = isFormData ? body : JSON.stringify(body);
    }

    const res = await fetch(`${BASE_URL}${url}`, options);
    const responseData: any = await res.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
