import { AfterFetchContext, BeforeFetchContext, useFetch } from '@vueuse/core'

async function request(url:string){
  const { data } =  await useFetch(url,
    {method: 'GET'},
    {
      beforeFetch: beforeFetch,
      afterFetch: afterFetch,
      onFetchError: onFetchError
    }
  ).json();
  return data;
}

function beforeFetch(ctx: BeforeFetchContext){
  const { url, options, cancel } = ctx;

  options.headers = {
    ...options.headers,
    Authorization: `Bearer 1212`,
  }

  return {
    options,
  }
}

function afterFetch(ctx: AfterFetchContext<any>){
  let {data, response} = ctx;
  // Modifies the response data
  // console.log(response)
  return ctx;
}

function onFetchError(ctx: {
  data: any;
  response: Response | null;
  error: any;
}){
  const {error} = ctx;
  console.error(error.message)
  return ctx;
}

export { request };
