export const base_url =
  process.env.NODE_ENV === "production"
    ? "https://bugsquashers-edu-app.herokuapp.com"
    : "http://localhost:5000";
