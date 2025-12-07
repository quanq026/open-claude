# Open Claude

A native macOS desktop client for Claude with a clean, minimal interface and system-wide quick access.

## Disclaimer

This project is an independent, open-source research and educational project. It is not affiliated with, endorsed by, or sponsored by Anthropic. "Claude" is a trademark of Anthropic, PBC.

This client requires a valid claude.ai account and authenticates through the official web login. It does not bypass any authentication or access controls. Usage is subject to Anthropic's [Terms of Service](https://www.anthropic.com/legal/consumer-terms) and [Acceptable Use Policy](https://www.anthropic.com/legal/aup).

This software is provided "as is" for educational and personal productivity purposes. The authors make no warranties and assume no liability for its use.

![Main Interface](screenshots/main.png)

## Features

### Native macOS Experience
- Transparent window with vibrancy effects (under-window blur)
- Native traffic light controls with custom positioning
- System font rendering with SF Pro Display
- Dark mode support

### Spotlight Search
Press `Cmd+Shift+C` from anywhere to open a floating Spotlight-style search bar. Ask quick questions without leaving your current workflow.

- Always-on-top floating window
- Closes automatically when clicking outside
- Uses Claude Haiku for fast responses
- Maintains conversation context within a session
- Auto-resizes based on response length

![Spotlight](screenshots/spotlight.png)

### Conversation Management
- Create, rename, and delete conversations
- Star important conversations
- Auto-generated titles based on conversation content
- Conversation history with timestamps

### Streaming Responses
- Real-time streaming text display
- Extended thinking support with collapsible summaries
- Tool use visualization
- Stop generation at any time

### Model Support
- Claude Opus 4.5 (default for main chat)
- Claude Haiku 4.5 (Spotlight quick queries)

## Installation

### Pre-built Releases
Download the latest DMG for your architecture:
- `Open Claude-x.x.x-arm64.dmg` - Apple Silicon (M1/M2/M3)
- `Open Claude-x.x.x.dmg` - Intel

### Build from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/open-claude.git
cd open-claude

# Install dependencies
pnpm install

# Development
pnpm dev

# Build from source to desktop app
pnpm dist
```

## Authentication

Open Claude uses your existing claude.ai account. Click "Sign in with Claude" to authenticate through the standard web login flow. Your session is stored securely using electron-store.

## Screenshots

### Login
![Login](screenshots/login.png)

### Conversation View
![Conversation](screenshots/conversation.png)

### Extended Thinking
![Thinking](screenshots/thinking.png)

## Roadmap

- [ ] MCP (Model Context Protocol) server support
- [ ] File attachments and image uploads
- [ ] Custom keyboard shortcuts configuration
- [ ] Multiple conversation windows
- [ ] Export conversations to Markdown

## Tech Stack

- Electron 39
- TypeScript

