#!/usr/bin/env node

/**
 * Setup Verification Script
 * Checks if the development environment is properly configured
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Constants
const MIN_NODE_VERSION = 18;
const BUILD_DIR = path.join(__dirname, 'build');
const NODE_MODULES_DIR = path.join(__dirname, 'node_modules');
const DIST_DIR = path.join(__dirname, 'dist');
const STATIC_JS_DIR = path.join(__dirname, 'static', 'js');

console.log('🔍 Open Claude - Setup Verification\n');

let hasErrors = false;

// Helper to run command and get output
function runCommand(cmd, description) {
  try {
    const output = execSync(cmd, { encoding: 'utf8', stdio: 'pipe' }).trim();
    console.log(`✅ ${description}: ${output}`);
    return { success: true, output };
  } catch (error) {
    console.log(`❌ ${description}: Not found or error`);
    hasErrors = true;
    return { success: false, error };
  }
}

// Check Node.js version
console.log('📦 Checking Prerequisites...\n');

const nodeResult = runCommand('node --version', 'Node.js version');
if (nodeResult.success) {
  try {
    const versionMatch = nodeResult.output.match(/v?(\d+)\.(\d+)\.(\d+)/);
    if (versionMatch) {
      const majorVersion = parseInt(versionMatch[1], 10);
      if (majorVersion < MIN_NODE_VERSION) {
        console.log(`⚠️  Warning: Node.js ${MIN_NODE_VERSION}+ recommended, you have ${nodeResult.output}`);
      }
    } else {
      console.log(`⚠️  Warning: Could not parse Node.js version format`);
    }
  } catch (e) {
    console.log(`⚠️  Warning: Could not parse Node.js version`);
  }
}

// Check pnpm
runCommand('pnpm --version', 'pnpm version');

// Check git
runCommand('git --version', 'Git version');

// Check if dependencies are installed
console.log('\n📚 Checking Dependencies...\n');

const nodeModulesExists = fs.existsSync(NODE_MODULES_DIR);
if (nodeModulesExists) {
  console.log('✅ node_modules directory exists');
  
  // Check key dependencies
  const electronExists = fs.existsSync(path.join(NODE_MODULES_DIR, 'electron'));
  const typescriptExists = fs.existsSync(path.join(NODE_MODULES_DIR, 'typescript'));
  
  if (electronExists) {
    console.log('✅ Electron is installed');
  } else {
    console.log('❌ Electron is not installed');
    hasErrors = true;
  }
  
  if (typescriptExists) {
    console.log('✅ TypeScript is installed');
  } else {
    console.log('❌ TypeScript is not installed');
    hasErrors = true;
  }
} else {
  console.log('❌ node_modules not found - run "pnpm install" first');
  hasErrors = true;
}

// Check if build artifacts exist
console.log('\n🔨 Checking Build Status...\n');

const distExists = fs.existsSync(DIST_DIR);
const staticJsExists = fs.existsSync(path.join(STATIC_JS_DIR, 'main.js'));

if (distExists) {
  console.log('✅ dist/ directory exists');
} else {
  console.log('⚠️  dist/ directory not found - run "pnpm run build" to build');
}

if (staticJsExists) {
  console.log('✅ Renderer bundle exists');
} else {
  console.log('⚠️  Renderer bundle not found - run "pnpm run build" to build');
}

// Check platform-specific requirements
console.log('\n💻 Platform-Specific Checks...\n');

const platform = process.platform;
console.log(`Platform: ${platform}`);

if (platform === 'win32') {
  console.log('Windows detected');
  const iconExists = fs.existsSync(path.join(BUILD_DIR, 'icon.ico'));
  if (iconExists) {
    console.log('✅ Windows icon (icon.ico) exists');
  } else {
    console.log('❌ Windows icon (icon.ico) not found');
    hasErrors = true;
  }
} else if (platform === 'darwin') {
  console.log('macOS detected');
  const iconExists = fs.existsSync(path.join(BUILD_DIR, 'icon.icns'));
  if (iconExists) {
    console.log('✅ macOS icon (icon.icns) exists');
  } else {
    console.log('❌ macOS icon (icon.icns) not found');
    hasErrors = true;
  }
} else if (platform === 'linux') {
  console.log('Linux detected');
}

// Check essential source files
console.log('\n📄 Checking Source Files...\n');

const essentialFiles = [
  'src/main.ts',
  'src/preload.ts',
  'src/api/client.ts',
  'static/index.html',
  'static/spotlight.html',
  'static/settings.html',
  'package.json',
  'tsconfig.json'
];

let missingFiles = 0;
for (const file of essentialFiles) {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} not found`);
    missingFiles++;
    hasErrors = true;
  }
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('\n❌ Setup verification failed. Please fix the issues above.\n');
  console.log('Common solutions:');
  console.log('  • Run "pnpm install" to install dependencies');
  console.log('  • Run "pnpm run build" to build the project');
  console.log('  • Make sure Node.js 18+ is installed');
  console.log('  • Check the documentation at .github/BUILD_INSTRUCTIONS.md\n');
  process.exit(1);
} else {
  console.log('\n✅ All checks passed! Your setup looks good.\n');
  console.log('Next steps:');
  if (!distExists || !staticJsExists) {
    console.log('  • Run "pnpm run build" to build the project');
  }
  console.log('  • Run "pnpm dev" to start in development mode');
  console.log('  • Run "pnpm dist" to create a production build\n');
  process.exit(0);
}
