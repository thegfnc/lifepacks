type StartWithHttpOrHttps = `http://${string}` | `https://${string}`

function getEnvironmentUrl(pathname = ''): StartWithHttpOrHttps {
  let origin

  if (typeof window !== 'undefined') {
    // If running in the browser, use the current URL
    origin = window.location.origin
  } else {
    // If running on the server, use the Vercel environment variable
    origin = process.env.VERCEL_URL || 'http://localhost:3000'
  }

  return (origin + pathname) as StartWithHttpOrHttps
}

export default getEnvironmentUrl
