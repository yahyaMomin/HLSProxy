
# HLS Proxy

This HLS Proxy is designed to handle a variety of .m3u8 formats, including those with multiple audio tracks and other features that standard proxies may not properly support. It allows seamless streaming through a proxy by passing required headers to the target m3u8 files.

 ## Features

- Supports .m3u8 formats with multiple audio tracks.
- Pass custom headers (e.g., referer, origin) to bypass restrictions.
- Easy deployment with minimal setup.
## Deployment

To deploy the project, follow these steps:

1. Install Dependencies 

```bash
npm install
```

2. Start the proxy server
```bash
npm run Start
```

Or Click Below to Deploy on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/joshholly/hlsproxy)


## Usage/Examples

To use the proxy, navigate to:

`https://[yourProxyDomain]/proxy?url=[m3u8URL]&headers=[JSONHeaders]`

### Parameters
**url:** The full URL of the .m3u8 stream you want to proxy.

**headers:** (Optional) A JSON-encoded string of HTTP headers to be sent with the request, such as referer or origin.



### Example:
`https://m3u8-3.wafflehacker.io/proxy?url=https://pcmirror.cc/hls/80094026.m3u8&headers=%7B%22referer%22%3A%22https%3A%2F%2Fpcmirror.cc%2F%22%2C%22origin%22%3A%22https%3A%2F%2Fpcmirror.cc%2F%22%7D`

### NOTE:
Ensure that the headers you pass are correctly encoded in JSON format.