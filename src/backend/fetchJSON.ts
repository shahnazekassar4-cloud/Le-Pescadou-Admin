// import { getStoredData } from './fnAsyncStorage'

type Props = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
  body?: object | undefined;
  signal?: AbortSignal | null | undefined;
};

export const fetchJSON = async ({ url, method, body, signal }: Props) => {
  const apiUrl = "http://localhost:1337/api"; //(j'improvise, à toi de voir si ce lien fonctionne)
  //Constants.API_URL;

  //ils ont mis ça pour l'authentification, c'est plus safe mais on peut voir ça dans un 2eme temps.
  // const token = await getStoredData("token");

  const headers = new Headers();
  const baseUrl = `${apiUrl}/${url}`;

  headers.append("Content-Type", "application/json");

  // if (token) {
  //   headers.append("Authorization", `Bearer ${token}`);
  // }

  const res = await fetch(baseUrl, {
    method,
    headers,
    signal,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const message = await res.text();

    let error: any;

    try {
      const response = JSON.parse(message);
      error = { message: response.error.message };
      response.error?.details?.errors?.forEach((err: any) => {
        error[err.path.join(".")] = err.message;
      });
    } catch (e) {
      error = { message };
    }

    throw error;
  }

  return res.json();
};

export default fetchJSON;
