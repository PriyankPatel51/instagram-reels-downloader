export default async function handler(req, res) {
const reelUrl = req.query.url;

if (!reelUrl) {
return res.status(400).json({
success: false,
message: "Missing URL"
});
}

try {
// Replace with your chosen metadata API endpoint.
const response = await fetch(
`https://YOUR_API_ENDPOINT?url=${encodeURIComponent(reelUrl)}`
);

```
const data = await response.json();

return res.status(200).json(data);
```

} catch (err) {
return res.status(500).json({
success: false,
message: err.message
});
}
}

