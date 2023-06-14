type StartWithHttpOrHttps = `http://${string}` | `https://${string}`

function getEnvironmentUrl(pathname = ''): StartWithHttpOrHttps {
  let origin

  if (typeof window !== 'undefined') {
    // If running in the browser, use the current URL
    origin = window.location.origin
  } else if (process.env.VERCEL_ENV === 'production') {
    origin = 'https://lifepacks.co'
  } else if (process.env.VERCEL_URL) {
    // If running on the server, use the Vercel environment variable
    origin = 'https://' + process.env.VERCEL_URL
  } else {
    origin = 'http://localhost:3000'
  }

  return (origin + pathname) as StartWithHttpOrHttps
}

export default getEnvironmentUrl
