type FetchOptions = RequestInit & {
  params?: Record<string, string | number>;
  headers?: Record<string, string>;
};

export const api = async <T>(
  enpoint: string,
  options: FetchOptions = {}
): Promise<T> => {
  const { params, headers, ...restOptions } = options;

  const url = new URL(`http://localhost:5000/${enpoint}`);

  if (params) {
    Object.entries(url).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const response = await fetch(url.toString(), {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if(!response.ok) {
    throw new Error(`Ошибка запроса: ${response.statusText}`);
  }

  return response.json();
};
