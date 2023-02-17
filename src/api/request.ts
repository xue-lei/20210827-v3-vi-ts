import { AfterFetchContext, BeforeFetchContext, useFetch } from '@vueuse/core';

function beforeFetch(ctx: BeforeFetchContext) {
  const { url, options, cancel } = ctx;

  options.headers = {
    ...options.headers,
    Authorization: `Bearer 1212`
  };

  return {
    options
  };
}

function afterFetch(ctx: AfterFetchContext<any>) {
  const { data, response } = ctx;
  // Modifies the response data
  // console.log(response)
  return ctx;
}

function onFetchError(ctx: {
  data: any;
  response: Response | null;
  error: any;
}) {
  const { error } = ctx;
  console.error(error.message);
  return ctx;
}

async function request(url: string) {
  const { data } = await useFetch(
    url,
    { method: 'GET' },
    {
      beforeFetch,
      afterFetch,
      onFetchError
    }
  ).json();
  return data;
}

export { request };
