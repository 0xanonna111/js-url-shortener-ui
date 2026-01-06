const shortUrlInput = document.getElementById("shortUrl");
const status = document.getElementById("status");

function shortenUrl() {
  const longUrl = document.getElementById("longUrl").value.trim();

  if (!longUrl) {
    status.innerText = "Please enter a valid URL";
    return;
  }

  // Mock short URL generation
  const code = Math.random().toString(36).substring(2, 7);
  const shortUrl = `https://sho.rt/${code}`;

  shortUrlInput.value = shortUrl;
  status.innerText = "Short URL generated!";
}

function copyUrl() {
  if (!shortUrlInput.value) return;

  navigator.clipboard.writeText(shortUrlInput.value);
  status.innerText = "Short URL copied!";
}
