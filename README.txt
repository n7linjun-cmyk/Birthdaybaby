# 💙💚 Birthday Surprise Website

A free interactive birthday surprise made with only:

- HTML
- CSS
- JavaScript
- Your own videos
- GitHub Pages for free hosting

## 1. Add your videos

Put these four MP4 files inside the `videos` folder:

```text
videos/
├── birthday.mp4
├── surprise1.mp4
├── surprise2.mp4
└── surprise3.mp4
```

## 2. Change the birthday person's name

Open `script.js` and find:

```javascript
const birthdayPerson = "Birthday Girl";
```

Change it, for example:

```javascript
const birthdayPerson = "Ananya";
```

## 3. Change the final message

Open `index.html` and find the text inside:

```html
<p class="final-message">
```

Replace it with your own message.

## 4. Test it

Double-click `index.html`.

If your browser blocks local video playback, use VS Code with the Live Server extension, or upload to GitHub Pages.

## 5. Publish for FREE with GitHub Pages

1. Create a GitHub repository.
2. Upload:
   - index.html
   - style.css
   - script.js
   - videos folder
3. Open repository Settings.
4. Go to Pages.
5. Under Build and deployment choose:
   - Deploy from a branch
   - Branch: main
   - Folder: / (root)
6. Save.
7. GitHub will give you a public website link.

Send that link to the birthday person.

## Important

Keep the video file sizes reasonable. Very large videos can make the page slow to load on mobile.

For the best phone experience, vertical videos around 1080x1920 are ideal.
