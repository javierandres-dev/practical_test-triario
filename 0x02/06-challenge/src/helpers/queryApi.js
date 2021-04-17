const queryApi = async () => {
  const response = await fetch(
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=penguin&format=json'
  );
  if (response.ok) {
    const res = await response.json();
    return res;
  } else {
    return { error: true };
  }
};

export default queryApi;
