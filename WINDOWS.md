# Running Open Claude on Windows

This guide explains how to build and run Open Claude natively on Windows.

## Prerequisites

1. **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
2. **pnpm** - Install via npm: `npm install -g pnpm`
3. **Git** - Download from [git-scm.com](https://git-scm.com/)
4. **Windows Build Tools** (optional, for native modules):
   ```bash
   npm install -g windows-build-tools
   ```

## Installation

### Option 1: Pre-built Releases (Recommended)

Download the latest Windows installer from the [Releases](https://github.com/tkattkat/open-claude/releases) page:
- `Open-Claude-Setup-x.x.x.exe` - Windows installer (x64)
- `Open-Claude-Setup-x.x.x-arm64.exe` - Windows installer (ARM64)

Double-click the installer and follow the installation wizard.

### Option 2: Build from Source

1. Clone the repository:
```bash
git clone https://github.com/tkattkat/open-claude.git
cd open-claude
```

2. Install dependencies:
```bash
pnpm install
```

3. Run in development mode:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm dist
```

The installer will be created in the `release` directory.

## Windows-Specific Features

### Visual Appearance

On Windows, Open Claude uses the native Windows appearance:
- **Dark Mode Support**: Automatically follows your Windows theme preference
- **Acrylic Background**: Semi-transparent window with backdrop blur effect
- **Native Window Controls**: Standard Windows minimize/maximize/close buttons
- **System Fonts**: Uses Segoe UI, the default Windows system font

### Keyboard Shortcuts

- **Spotlight Search**: `Ctrl+Shift+C` (opens quick search from anywhere)
- All other shortcuts use `Ctrl` instead of `Cmd` (macOS)

### Installation Location

By default, the installer will suggest:
- `C:\Program Files\Open Claude` (system-wide installation)
- `%LOCALAPPDATA%\Programs\Open Claude` (user-only installation)

### Data Storage

Application data (settings, session, conversations metadata) is stored in:
```
%APPDATA%\open-claude
```

## Troubleshooting

### Build Issues

**Problem**: `node-gyp` errors during installation

**Solution**: Install Windows Build Tools:
```bash
npm install -g windows-build-tools
```

**Problem**: Electron fails to download

**Solution**: Try setting a different mirror:
```bash
set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
pnpm install
```

### Runtime Issues

**Problem**: App won't start or crashes on startup

**Solution**: 
1. Clear app data: Delete `%APPDATA%\open-claude`
2. Reinstall the application
3. Check Windows Event Viewer for error details

**Problem**: Spotlight shortcut (`Ctrl+Shift+C`) doesn't work

**Solution**: 
1. Check if another application is using the same shortcut
2. Try changing the shortcut in Settings
3. Run the app as Administrator (some apps block global shortcuts)

**Problem**: Transparent/blurred window effects not working

**Solution**: 
- Windows 10: Enable "Transparency effects" in Settings > Personalization > Colors
- Windows 11: Enable "Transparency effects" in Settings > Personalization > Colors

### Performance

If you experience performance issues:
1. Ensure Windows is up to date
2. Update your graphics drivers
3. Disable hardware acceleration in the app settings (if available)
4. Close other resource-intensive applications

## Differences from macOS Version

### Visual Differences
- No vibrancy effects (macOS-specific)
- Standard Windows window frame instead of traffic lights
- Segoe UI font instead of SF Pro Display

### Functional Differences
- All core features work identically
- Keyboard shortcuts use `Ctrl` instead of `Cmd`
- Window management follows Windows conventions

## Development on Windows

### Recommended Setup

1. **VS Code** with extensions:
   - TypeScript
   - ESLint
   - Prettier

2. **PowerShell** or **Windows Terminal** for running commands

### Building

Development build (faster, with hot reload):
```bash
pnpm dev
```

Production build (optimized):
```bash
pnpm build
pnpm start
```

Create distributable installer:
```bash
pnpm dist
```

### Debugging

1. Enable developer tools: Add `mainWindow.webContents.openDevTools()` in `src/main.ts`
2. Use VS Code debugger with Node.js configuration
3. Check logs in `%APPDATA%\open-claude\logs` (if logging is implemented)

## Building for Windows from macOS/Linux

You can build Windows installers from macOS or Linux:

```bash
pnpm install
pnpm dist -- --win
```

Note: Some features like code signing require additional setup.

## Security

### SmartScreen Warning

When first running the installer, Windows SmartScreen may show a warning. This is normal for new applications without an Extended Validation certificate. 

To proceed:
1. Click "More info"
2. Click "Run anyway"

For production releases, consider code signing the installer with a valid certificate.

### Antivirus False Positives

Some antivirus software may flag Electron apps. This is a known issue with Electron applications. You may need to add an exception for Open Claude.

## Contributing

When contributing Windows-specific code:
1. Test on both Windows 10 and Windows 11
2. Ensure the app works without administrator privileges
3. Follow Windows UI conventions
4. Test with different display scaling settings (100%, 125%, 150%, etc.)

## Support

For Windows-specific issues, please:
1. Check existing [GitHub Issues](https://github.com/tkattkat/open-claude/issues)
2. Include your Windows version (Win+R, type `winver`)
3. Include app version (Help > About in the app)
4. Include relevant error messages

## License

Same as the main project - see [LICENSE](LICENSE) file.
