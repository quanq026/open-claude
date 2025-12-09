# Build Instructions

This guide explains how to build Open Claude from source on different platforms.

## Prerequisites

All platforms require:
- **Node.js 18+** - [Download](https://nodejs.org/)
- **pnpm** - Install: `npm install -g pnpm`
- **Git** - [Download](https://git-scm.com/)

### Platform-Specific Requirements

#### Windows
- Windows 10/11
- Build Tools (optional): [Visual Studio Build Tools 2022](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) with "Desktop development with C++" workload

#### macOS
- macOS 10.15 or later
- Xcode Command Line Tools: `xcode-select --install`

#### Linux
- Build essentials: `sudo apt-get install build-essential`

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/tkattkat/open-claude.git
cd open-claude

# 2. Install dependencies
pnpm install

# 3. Build the application
pnpm run build

# 4. Run in development mode
pnpm start

# OR build production installer
pnpm dist
```

## Build Commands

### Development

```bash
# Build TypeScript and renderer
pnpm run build

# Run the app
pnpm start

# Development mode (build + run)
pnpm dev
```

### Production

```bash
# Build for current platform
pnpm dist

# Build for specific platform (from any OS)
pnpm dist -- --mac    # macOS
pnpm dist -- --win    # Windows
pnpm dist -- --linux  # Linux
```

## Build Output

Production builds are created in the `release/` directory:

### macOS
- `Open Claude-x.x.x-arm64.dmg` - Apple Silicon
- `Open Claude-x.x.x.dmg` - Intel
- `Open Claude-x.x.x-universal.dmg` - Universal (both)

### Windows
- `Open-Claude-Setup-x.x.x.exe` - x64 installer
- `Open-Claude-Setup-x.x.x-arm64.exe` - ARM64 installer
- `Open-Claude-x.x.x.exe` - Portable (no installer)

### Linux
- `open-claude_x.x.x_amd64.deb` - Debian/Ubuntu
- `open-claude-x.x.x.x86_64.rpm` - RedHat/Fedora
- `open-claude-x.x.x.AppImage` - Universal Linux

## Troubleshooting

### Common Issues

#### "pnpm: command not found"
```bash
npm install -g pnpm
```

#### "electron failed to download"
Try setting a different mirror:
```bash
# Option 1: Use npm config
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/

# Option 2: Environment variable
export ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
pnpm install
```

#### Build fails on Windows
1. Install Visual Studio Build Tools:
   - Download [Build Tools for Visual Studio 2022](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022)
   - Install "Desktop development with C++" workload

2. Run PowerShell/Command Prompt as Administrator

3. Clear cache and retry:
   ```bash
   pnpm store prune
   pnpm install
   ```

#### Build fails on macOS
1. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```

2. Accept Xcode license:
   ```bash
   sudo xcodebuild -license accept
   ```

#### Build fails on Linux
1. Install build dependencies:
   ```bash
   sudo apt-get install build-essential libssl-dev
   ```

### Platform-Specific Notes

#### Windows
- First build may take longer (downloading Electron, native modules)
- Antivirus software may slow down the build
- Use PowerShell or Windows Terminal (not CMD)

#### macOS
- First build requires downloading Electron binaries (~100MB)
- You may need to allow the app in System Preferences > Security
- Code signing requires an Apple Developer account

#### Linux
- AppImage builds require FUSE to run
- Debian/Ubuntu: `sudo apt-get install fuse libfuse2`
- May need to make AppImage executable: `chmod +x *.AppImage`

## Development Tips

### Fast Rebuilds

During development, you can rebuild only what changed:

```bash
# Rebuild TypeScript only
pnpm tsc

# Rebuild renderer only
pnpm run build:renderer

# Watch mode (auto-rebuild on changes)
pnpm tsc --watch
```

### Debugging

1. Enable DevTools in `src/main.ts`:
   ```typescript
   mainWindow.webContents.openDevTools();
   ```

2. Run with debug logging:
   ```bash
   DEBUG=* pnpm dev
   ```

### Clean Build

If you encounter issues, try a clean build:

```bash
# Remove build artifacts
rm -rf dist release node_modules

# Reinstall and rebuild
pnpm install
pnpm run build
```

## Build Times

Approximate build times on modern hardware:

| Platform | Clean Build | Incremental |
|----------|-------------|-------------|
| Windows  | 2-3 min     | 10-30 sec   |
| macOS    | 2-3 min     | 10-30 sec   |
| Linux    | 1-2 min     | 10-20 sec   |

*Note: First build takes longer due to downloading dependencies*

## Support

For build issues:
1. Check [existing issues](https://github.com/tkattkat/open-claude/issues)
2. Create a new issue with:
   - Your OS and version
   - Node.js version (`node --version`)
   - pnpm version (`pnpm --version`)
   - Full error output
   - Build command used
