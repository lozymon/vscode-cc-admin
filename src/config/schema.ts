export interface Hook {
  type: 'command';
  command: string;
}

export interface HookEntry {
  matcher?: string;
  hooks: Hook[];
}

export interface Hooks {
  PreToolUse?: HookEntry[];
  PostToolUse?: HookEntry[];
  Stop?: HookEntry[];
  Notification?: HookEntry[];
}

export interface Permissions {
  allow: string[];
  deny: string[];
  defaultMode?: 'default' | 'acceptEdits' | 'plan' | 'auto' | 'dontAsk' | 'bypassPermissions';
}

export interface McpServer {
  command: string;
  args?: string[];
  env?: Record<string, string>;
}

export interface McpJson {
  mcpServers: Record<string, McpServer>;
}

export interface Settings {
  model?: string;
  smallModel?: string;
  effortLevel?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
  alwaysThinkingEnabled?: boolean;
  showThinkingSummaries?: boolean;
  maxThinkingTokens?: number;
  permissions?: Permissions;
  hooks?: Hooks;
  mcpServers?: Record<string, McpServer>;
  env?: Record<string, string>;
  systemPrompt?: string;
  appendSystemPrompt?: string;
  bashTimeout?: number;
  viewMode?: 'default' | 'verbose' | 'focus';
  language?: string;
  includeGitInstructions?: boolean;
  cleanupPeriodDays?: number;
  respectGitignore?: boolean;
}

export interface SettingsLocal {
  permissions?: Permissions;
  enabledMcpjsonServers?: string[];
  disabledMcpjsonServers?: string[];
}

export interface MarkdownFile {
  name: string;
  firstLine: string;
  filePath: string;
}

export interface MemoryFile {
  name: string;
  filePath: string;
  content: string;
}

export interface ClaudeConfig {
  settings: Settings;
  settingsLocal: SettingsLocal;
  mcpServers: Record<string, McpServer>;
  claudeMd: string;
  claudeIgnore: string;
  rules: MarkdownFile[];
  commands: MarkdownFile[];
  skills: MarkdownFile[];
  workflows: MarkdownFile[];
}

export interface GlobalConfig {
  settings: Settings;
  commands: MarkdownFile[];
  rules: MarkdownFile[];
  skills: MarkdownFile[];
  workflows: MarkdownFile[];
  memoryMd: string;
  memory: MemoryFile[];
}
