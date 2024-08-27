# NoteNest

**NoteNest** is a simple and intuitive Chrome extension for capturing, organizing, and storing notes. Easily jot down ideas, reminders, or thoughts and access them anytime with ease.

## Features

- Add, edit, and delete notes
- Notes are stored locally using Chrome's `chrome.storage.sync` API
- Clean and minimalistic UI

## Installation

### Prerequisites

- Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript

## Setup

1. **Clone the repository:**

```
git clone https://github.com/lokeshkavisth/notenest.git
cd notenest
```

2. **Load the extension in Chrome:**

- Open Chrome and go to: [chrome://extensions/](chrome://extensions/)

- Enable Developer mode by toggling the switch in the top right corner.

- Click on 'Load unpacked' and select the `notenest` directory.

- Your extension should now appear in the list of installed extensions.

## Usage

1. Click on the NoteNest icon in the Chrome toolbar to open the popup.
2. Write your notes in the provided text area.
3. Click 'Save' to store your note.
4. To edit or delete a note, use the respective options in the popup.

## Publishing

**Preparing your extension:**

- Ensure all files are properly included in the `manifest.json`.
- Test your extension thoroughly.

**Packaging the extension:**

1. Go to [chrome://extensions/](chrome://extensions/) in Chrome.
2. Click on 'Pack extension'.
3. Select the root directory of your extension.
4. Click 'Pack Extension' to generate the `.crx` and `.pem` files.

**Publishing to the Chrome Web Store**

1. Go to the Chrome Web Store Developer Dashboard.
2. Click on 'Add a New Item' and upload the `.zip` file of your extension.
3. Fill in the required details (description, screenshots, etc.).
4. Pay the one-time registration fee (if required).
5. Submit your extension for review.

**Monitoring and updating**

- Check for any feedback or issues reported by users.
- Update your extension as needed and re-upload new versions.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contact

For questions or feedback, please contact me on [X (Twitter)](https://x.com/lokeshkavisth)
