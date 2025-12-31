export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png";


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];


export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjA5MTdiMzQ2ZjI1MjJkOTM0YTE1MzA2MWYyZjcwOSIsIm5iZiI6MTc2NzEwOTc1OC45MzkwMDAxLCJzdWIiOiI2OTUzZjQ3ZTYwNTBkMWMxNzVkN2ExZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hkQ-HMyMj2uOAJa_p70RKcAuaJ2oVH8LzgxsmYpFAPc'
  }
};


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
