# CC Admin

### Admin dashboard for Claude Code

A VSCode extension that provides a modern GUI admin panel for managing all Claude Code configuration — no more hand-editing JSON or markdown files.

> This project is not affiliated with or endorsed by Anthropic. Claude is a trademark of Anthropic.

## Features

### Initialize Project

A setup wizard for projects that don't have Claude Code configured yet. Detects missing configuration and shows a warning banner on the dashboard. The wizard lets you choose a model, edit the CLAUDE.md template, select which directories to scaffold (`rules/`, `commands/`, `skills/`, `workflows/`), and optionally create a `.claudeignore`. Safe to run on already-initialized projects — existing files are never overwritten.

### Dashboard

A live overview of your Claude Code setup: model, MCP server count, permissions, hooks, env vars, memory files, and project file counts. Click any card to jump to that section.

### Model

- Switch primary model (Opus 4.7, Sonnet 4.6, Haiku 4.5)
- Set a separate small/background model for lightweight tasks
- **Effort level** — `low`, `medium`, `high`, `xhigh`, `max` (persisted via `effortLevel`)
- **Extended Thinking** toggle — enables `alwaysThinkingEnabled` across all sessions
- **Show Thinking Summaries** toggle — display Claude's reasoning summaries

### Environment Variables

- Manage `env` key/value pairs passed to Claude on every run
- Works at both project and global scope

### Advanced

- Override or append to the system prompt (`systemPrompt`, `appendSystemPrompt`)
- Set bash command timeout (`bashTimeout`) and max thinking tokens (`maxThinkingTokens`)
- **View Mode** — default transcript view (`default`, `verbose`, `focus`)
- **Response Language** — set Claude's preferred response language
- **Session Cleanup Period** — how many days to keep session files (`cleanupPeriodDays`)
- **Include Git Instructions** — toggle built-in git workflow guidance
- **Respect .gitignore** — control whether `@` file picker honours `.gitignore`

### MCP Servers

- Add, remove, and enable/disable MCP servers
- Per-server environment variables supported in the add form

### Permissions

- **Default Mode** — set the permission mode (`default`, `acceptEdits`, `plan`, `auto`, `dontAsk`, `bypassPermissions`)
- Tag-style editor for `allow` and `deny` lists
- Works at both project and global scope

### Hooks

- View, add, and delete hooks by event type (PreToolUse, PostToolUse, Stop, Notification)
- Matcher (regex) support

### CLAUDE.md

- Full editor for your project's main Claude instructions

### .claudeignore

- Editor for the project-level ignore file (like `.gitignore` for Claude's context)

### Rules / Commands / Skills / Workflows

- Browse, open, and delete `.md` files in each category
- Create new files with a name prompt — opens in the editor automatically

### Memory

- Edit `~/.claude/MEMORY.md` directly
- Browse all `~/.claude/memory/*.md` files and open them in the editor

### Sandbox

- Enable/disable sandbox mode globally
- **Excluded commands** — commands that bypass sandboxing
- **Filesystem** — allow/deny lists for read and write path patterns
- **Network** — allowed/denied domain lists, toggle local binding

### App Config

- **Account** — view logged-in account, log out, or switch account
- **Editor mode** — `default` or `vim`
- **Auto Scroll** — scroll to latest output automatically
- **Show Turn Duration** — display timing for each turn
- **Terminal Progress Bar** — show progress indicator in terminal
- **Auto Connect IDE** — automatically connect to IDE on startup
- **Auto Install IDE Extension** — auto-install the IDE extension
- **Plugins** — enable/disable installed plugins
- **Extra Known Marketplaces** — additional plugin marketplace URLs

## Opening the Panel

- **Status bar** — click `⚙ Claude Code` in the bottom-right corner
- **Keyboard shortcut** — `Ctrl+Shift+Alt+C` (Mac: `Cmd+Shift+Alt+C`)

## Config Files Managed

| File                          | Scope                                             |
| ----------------------------- | ------------------------------------------------- |
| `.claude/settings.json`       | Project — model, env, prompts, permissions, hooks |
| `.claude/settings.local.json` | Project local — MCP toggles                       |
| `.claude/.mcp.json`           | Project — MCP server definitions                  |
| `CLAUDE.md`                   | Project — main instructions                       |
| `.claudeignore`               | Project — paths to exclude from context           |
| `.claude/rules/*.md`          | Project — coding standards                        |
| `.claude/commands/*.md`       | Project — slash commands                          |
| `.claude/skills/*.md`         | Project — reusable tasks                          |
| `.claude/workflows/*.md`      | Project — multi-step workflows                    |
| `~/.claude/settings.json`     | Global — model, env, permissions, hooks           |
| `~/.claude/commands/*.md`     | Global — slash commands                           |
| `~/.claude/rules/*.md`        | Global — coding standards                         |
| `~/.claude/skills/*.md`       | Global — skills                                   |
| `~/.claude/workflows/*.md`    | Global — workflows                                |
| `~/.claude/MEMORY.md`         | Global — memory index                             |
| `~/.claude/memory/*.md`       | Global — individual memory files                  |

## Development

```bash
npm install
npm run build    # one-off build
npm run watch    # rebuild on change
```

Press **F5** in VSCode to launch the Extension Development Host.

## Project Structure

```
src/
├── extension.ts           # Activation, status bar, commands
├── config/
│   ├── ConfigManager.ts   # Read/write all config files + file watchers
│   ├── paths.ts           # Resolve project and global .claude/ paths
│   └── schema.ts          # TypeScript interfaces
└── webview/
    ├── WebviewPanel.ts    # Webview lifecycle + message handling
    └── ui/
        ├── index.html     # Layout and styles
        └── main.js        # Frontend render + save logic
```
