export const POST = async (url, body) => {
  const res = await fetch(`http://80.75.14.90:9090/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};
