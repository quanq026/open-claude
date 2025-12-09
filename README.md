# Open Claude

A native desktop client for Claude with a clean, minimal interface and system-wide quick access. Available for macOS and Windows.

## Disclaimer

This project is an independent, open-source research and educational project. It is not affiliated with, endorsed by, or sponsored by Anthropic. "Claude" is a trademark of Anthropic, PBC.

This client requires a valid claude.ai account and authenticates through the official web login. It does not bypass any authentication or access controls. Usage is subject to Anthropic's [Terms of Service](https://www.anthropic.com/legal/consumer-terms) and [Acceptable Use Policy](https://www.anthropic.com/legal/aup).

This software is provided "as is" for educational and personal productivity purposes. The authors make no warranties and assume no liability for its use.

<img width="2226" height="1866" alt="Main Interface" src="https://github.com/user-attachments/assets/7c36f018-2659-4eff-805f-eedee1491c87" />

## Features

### Native Desktop Experience

**macOS:**
- Transparent window with vibrancy effects (under-window blur)
- Native traffic light controls with custom positioning
- System font rendering with SF Pro Display
- Dark mode support

**Windows:**
- Native window controls with acrylic blur effects
- System font rendering with Segoe UI  
- Dark mode support following Windows theme
- Standard Windows shortcuts (`Ctrl` instead of `Cmd`)

### Spotlight Search
Press `Cmd+Shift+C` (macOS) or `Ctrl+Shift+C` (Windows) from anywhere to open a floating Spotlight-style search bar. Ask quick questions without leaving your current workflow.

- Always-on-top floating window
- Closes automatically when clicking outside
- Uses Claude Haiku for fast responses
- Maintains conversation context within a session
- Auto-resizes based on response length

<img width="1990" height="758" alt="Spotlight" src="https://github.com/user-attachments/assets/540ddc9c-1eee-4801-a96a-78d28a7bc0f3" />

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

**macOS:**
- `Open Claude-x.x.x-arm64.dmg` - Apple Silicon (M1/M2/M3/M4)
- `Open Claude-x.x.x.dmg` - Intel

**Windows:**
- `Open-Claude-Setup-x.x.x.exe` - Windows installer (x64)
- `Open-Claude-Setup-x.x.x-arm64.exe` - Windows installer (ARM64)

Download the latest release for your platform from the [Releases](https://github.com/tkattkat/open-claude/releases) page.

**Windows Users:** See [WINDOWS.md](WINDOWS.md) for detailed Windows-specific installation and setup instructions.

### Build from Source

```bash
# Clone the repository
git clone https://github.com/tkattkat/open-claude.git
cd open-claude

# Install dependencies
pnpm install

# Development
pnpm dev

# Build from source to desktop app
pnpm dist
```

For detailed build instructions and troubleshooting, see [BUILD_INSTRUCTIONS.md](.github/BUILD_INSTRUCTIONS.md).

## Authentication

Open Claude uses your existing claude.ai account. Click "Sign in with Claude" to authenticate through the standard web login flow. Your session is stored securely using electron-store.

## Screenshots

### Login
<img width="2166" height="1512" alt="Login" src="https://github.com/user-attachments/assets/1281ad7a-e3f9-4b7f-ad06-90b005175ab1" />

### Conversation View
<img width="2020" height="1578" alt="Conversation" src="https://github.com/user-attachments/assets/153ee10b-b8a0-42f5-9e6f-8b138272a27f" />


## Roadmap

- [ ] MCP (Model Context Protocol) server support
- [x] File attachments and image uploads
- [x] Windows native support
- [ ] Linux support
- [ ] Custom keyboard shortcuts configuration
- [ ] Multiple conversation windows
- [x] Export conversations to Markdown

## Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| macOS (Intel) | ✅ Full Support | Native vibrancy effects, SF Pro fonts |
| macOS (Apple Silicon) | ✅ Full Support | Optimized for M1/M2/M3/M4 chips |
| Windows 10/11 (x64) | ✅ Full Support | Acrylic blur, Segoe UI fonts |
| Windows 10/11 (ARM64) | ✅ Full Support | Native ARM64 builds available |
| Linux | 🚧 Planned | Community contributions welcome |

## Tech Stack

- Electron 39
- TypeScript
- Native platform APIs for optimal performance

