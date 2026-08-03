// Pricing rates for AI models — all rates in $/1M tokens
//
// Fallback order (first match wins):
//   1. PROVIDER_PRICING[provider][model]  — provider-specific override
//   2. MODEL_PRICING[model]               — canonical model price (provider-agnostic)
//   3. PATTERN_PRICING                    — glob pattern match (e.g. "codex-*")

/**
 * Canonical model pricing — provider-agnostic.
 * Cover all known models; deduplicated across providers.
 */
export const MODEL_PRICING = {
  // === Anthropic / Claude ===
  "claude-opus-4-6":              { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 25.00,  cache_creation: 6.25  },
  "claude-opus-4-5-20251101":     { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 25.00,  cache_creation: 6.25  },
  "claude-sonnet-4-6":            { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 15.00,  cache_creation: 3.75  },
  "claude-sonnet-4-5-20250929":   { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 15.00,  cache_creation: 3.75  },
  "claude-haiku-4-5-20251001":    { input: 1.00,  output: 5.00,  cached: 0.10,  reasoning: 5.00,   cache_creation: 1.25  },
  "claude-sonnet-4-20250514":     { input: 3.00,  output: 15.00, cached: 1.50,  reasoning: 15.00,  cache_creation: 3.00  },
  "claude-opus-4-20250514":       { input: 15.00, output: 25.00, cached: 7.50,  reasoning: 112.50, cache_creation: 15.00 },
  "claude-3-5-sonnet-20241022":   { input: 3.00,  output: 15.00, cached: 1.50,  reasoning: 15.00,  cache_creation: 3.00  },
  "claude-haiku-4.5":             { input: 0.50,  output: 2.50,  cached: 0.05,  reasoning: 3.75,   cache_creation: 0.50  },
  "claude-opus-4.1":              { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 37.50,  cache_creation: 5.00  },
  "claude-opus-4.5":              { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 37.50,  cache_creation: 5.00  },
  "claude-opus-4.6":              { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 37.50,  cache_creation: 5.00  },
  "claude-sonnet-4":              { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 22.50,  cache_creation: 3.00  },
  "claude-sonnet-4.5":            { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 22.50,  cache_creation: 3.00  },
  "claude-sonnet-4.6":            { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 22.50,  cache_creation: 3.00  },
  "claude-opus-4-5-thinking":     { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 37.50,  cache_creation: 5.00  },
  "claude-opus-4-6-thinking":     { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 37.50,  cache_creation: 5.00  },
  "claude-fable-5":               { input: 10.00, output: 50.00, cached: 1.00,  reasoning: 50.00,  cache_creation: 12.50 },

  // === OpenAI / GPT ===
  "gpt-3.5-turbo":               { input: 0.5,  output: 1.5,  cached: 0,  reasoning: 1.5,  cache_creation: 0 },
  "gpt-4":                       { input: 30,  output: 60,  cached: 0,  reasoning: 60,  cache_creation: 0 },
  "gpt-4-turbo":                 { input: 10,  output: 30,  cached: 0,  reasoning: 30,  cache_creation: 0 },
  "gpt-4o":                      { input: 2.5,  output: 10,  cached: 1.25,  reasoning: 10,  cache_creation: 0 },
  "gpt-4o-mini":                 { input: 0.15,  output: 0.6,  cached: 0.075,  reasoning: 0.6,  cache_creation: 0 },
  "gpt-4.1":                     { input: 2,  output: 8,  cached: 0.5,  reasoning: 8,  cache_creation: 0 },
  "gpt-5":                       { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5-mini":                  { input: 0.25,  output: 2,  cached: 0.025,  reasoning: 2,  cache_creation: 0 },
  "gpt-5-codex":                 { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5.1":                     { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5.1-codex":               { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5.1-codex-mini":          { input: 0.25,  output: 2,  cached: 0.025,  reasoning: 2,  cache_creation: 0 },
  "gpt-5.1-codex-mini-high":      { input: 2.00,  output: 8.00,  cached: 1.00,  reasoning: 12.00,  cache_creation: 2.00  },
  "gpt-5.1-codex-max":           { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5.2":                     { input: 1.75,  output: 14,  cached: 0.175,  reasoning: 14,  cache_creation: 0 },
  "gpt-5.2-codex":               { input: 1.75,  output: 14,  cached: 0.175,  reasoning: 14,  cache_creation: 0 },
  "gpt-5.3-codex":               { input: 1.75,  output: 14,  cached: 0.175,  reasoning: 14,  cache_creation: 0 },
  "gpt-5.3-codex-spark":         { input: 3.00,  output: 12.00, cached: 0.30,  reasoning: 12.00,  cache_creation: 3.00  },
  "gpt-5.6":                      { input: 2.50,  output: 15.00, cached: 0.25,  reasoning: 15.00,  cache_creation: 2.50  },
  "gpt-5.6-luna":                { input: 0.1,  output: 0.6,  cached: 0.01,  reasoning: 0.6,  cache_creation: 0.125 },
  "gpt-5.6-terra":               { input: 1,  output: 6,  cached: 0.1,  reasoning: 6,  cache_creation: 1.25 },
  "gpt-5.6-sol":                 { input: 5,  output: 30,  cached: 0.5,  reasoning: 30,  cache_creation: 6.25 },
  "o1":                          { input: 15,  output: 60,  cached: 7.5,  reasoning: 60,  cache_creation: 0 },
  "o1-mini":                      { input: 3.00,  output: 12.00, cached: 1.50,  reasoning: 18.00,  cache_creation: 3.00  },

    "chat-latest":                 { input: 5,  output: 30,  cached: 0.5,  reasoning: 30,  cache_creation: 0 },
  "gpt-3.5-turbo-0125":          { input: 0.5,  output: 1.5,  cached: 0,  reasoning: 1.5,  cache_creation: 0 },
  "gpt-3.5-turbo-1106":          { input: 1,  output: 2,  cached: 0,  reasoning: 2,  cache_creation: 0 },
  "gpt-3.5-turbo-16k":           { input: 3,  output: 4,  cached: 0,  reasoning: 4,  cache_creation: 0 },
  "gpt-3.5-turbo-instruct":      { input: 1.5,  output: 2,  cached: 0,  reasoning: 2,  cache_creation: 0 },
  "gpt-3.5-turbo-instruct-0914": { input: 1.5,  output: 2,  cached: 0,  reasoning: 2,  cache_creation: 0 },
  "gpt-4-0613":                  { input: 30,  output: 60,  cached: 0,  reasoning: 60,  cache_creation: 0 },
  "gpt-4-turbo-2024-04-09":      { input: 10,  output: 30,  cached: 0,  reasoning: 30,  cache_creation: 0 },
  "gpt-4.1-2025-04-14":          { input: 2,  output: 8,  cached: 0.5,  reasoning: 8,  cache_creation: 0 },
  "gpt-4.1-mini":                { input: 0.4,  output: 1.6,  cached: 0.1,  reasoning: 1.6,  cache_creation: 0 },
  "gpt-4.1-mini-2025-04-14":     { input: 0.4,  output: 1.6,  cached: 0.1,  reasoning: 1.6,  cache_creation: 0 },
  "gpt-4.1-nano":                { input: 0.1,  output: 0.4,  cached: 0.025,  reasoning: 0.4,  cache_creation: 0 },
  "gpt-4.1-nano-2025-04-14":     { input: 0.1,  output: 0.4,  cached: 0.025,  reasoning: 0.4,  cache_creation: 0 },
  "gpt-4o-2024-08-06":           { input: 2.5,  output: 10,  cached: 1.25,  reasoning: 10,  cache_creation: 0 },
  "gpt-4o-2024-11-20":           { input: 2.5,  output: 10,  cached: 1.25,  reasoning: 10,  cache_creation: 0 },
  "gpt-4o-mini-2024-07-18":      { input: 0.15,  output: 0.6,  cached: 0.075,  reasoning: 0.6,  cache_creation: 0 },
  "gpt-4o-mini-search-preview":  { input: 0.15,  output: 0.6,  cached: 0.075,  reasoning: 0.6,  cache_creation: 0 },
  "gpt-4o-mini-search-preview-2025-03-11": { input: 0.15,  output: 0.6,  cached: 0.075,  reasoning: 0.6,  cache_creation: 0 },
  "gpt-4o-search-preview":       { input: 2.5,  output: 10,  cached: 1.25,  reasoning: 10,  cache_creation: 0 },
  "gpt-4o-search-preview-2025-03-11": { input: 2.5,  output: 10,  cached: 1.25,  reasoning: 10,  cache_creation: 0 },
  "gpt-5-2025-08-07":            { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5-chat-latest":           { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5-mini-2025-08-07":       { input: 0.25,  output: 2,  cached: 0.025,  reasoning: 2,  cache_creation: 0 },
  "gpt-5-nano":                  { input: 0.05,  output: 0.4,  cached: 0.005,  reasoning: 0.4,  cache_creation: 0 },
  "gpt-5-nano-2025-08-07":       { input: 0.05,  output: 0.4,  cached: 0.005,  reasoning: 0.4,  cache_creation: 0 },
  "gpt-5-pro":                   { input: 15,  output: 120,  cached: 0,  reasoning: 120,  cache_creation: 0 },
  "gpt-5-pro-2025-10-06":        { input: 15,  output: 120,  cached: 0,  reasoning: 120,  cache_creation: 0 },
  "gpt-5.1-2025-11-13":          { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5.1-chat-latest":         { input: 1.25,  output: 10,  cached: 0.125,  reasoning: 10,  cache_creation: 0 },
  "gpt-5.2-2025-12-11":          { input: 1.75,  output: 14,  cached: 0.175,  reasoning: 14,  cache_creation: 0 },
  "gpt-5.2-chat-latest":         { input: 1.75,  output: 14,  cached: 0.175,  reasoning: 14,  cache_creation: 0 },
  "gpt-5.2-pro":                 { input: 21,  output: 168,  cached: 0,  reasoning: 168,  cache_creation: 0 },
  "gpt-5.2-pro-2025-12-11":      { input: 21,  output: 168,  cached: 0,  reasoning: 168,  cache_creation: 0 },
  "gpt-5.3-chat-latest":         { input: 1.75,  output: 14,  cached: 0.175,  reasoning: 14,  cache_creation: 0 },
  "gpt-5.4":                     { input: 2.5,  output: 15,  cached: 0.25,  reasoning: 15,  cache_creation: 0 },
  "gpt-5.4-2026-03-05":          { input: 2.5,  output: 15,  cached: 0.25,  reasoning: 15,  cache_creation: 0 },
  "gpt-5.4-mini":                { input: 0.75,  output: 4.5,  cached: 0.075,  reasoning: 4.5,  cache_creation: 0 },
  "gpt-5.4-mini-2026-03-17":     { input: 0.75,  output: 4.5,  cached: 0.075,  reasoning: 4.5,  cache_creation: 0 },
  "gpt-5.4-nano":                { input: 0.2,  output: 1.25,  cached: 0.02,  reasoning: 1.25,  cache_creation: 0 },
  "gpt-5.4-nano-2026-03-17":     { input: 0.2,  output: 1.25,  cached: 0.02,  reasoning: 1.25,  cache_creation: 0 },
  "gpt-5.4-pro":                 { input: 30,  output: 180,  cached: 0,  reasoning: 180,  cache_creation: 0 },
  "gpt-5.4-pro-2026-03-05":      { input: 30,  output: 180,  cached: 3,  reasoning: 180,  cache_creation: 0 },
  "gpt-5.5":                     { input: 5,  output: 30,  cached: 0.5,  reasoning: 30,  cache_creation: 0 },
  "gpt-5.5-2026-04-23":          { input: 5,  output: 30,  cached: 0.5,  reasoning: 30,  cache_creation: 0 },
  "gpt-5.5-pro":                 { input: 30,  output: 180,  cached: 3,  reasoning: 180,  cache_creation: 0 },
  "gpt-5.5-pro-2026-04-23":      { input: 30,  output: 180,  cached: 3,  reasoning: 180,  cache_creation: 0 },
  "gpt-realtime-2.1":            { input: 4,  output: 24,  cached: 0.4,  reasoning: 24,  cache_creation: 0 },
  "gpt-realtime-2.1-mini":       { input: 0.6,  output: 2.4,  cached: 0.06,  reasoning: 2.4,  cache_creation: 0 },
  "o1-2024-12-17":               { input: 15,  output: 60,  cached: 7.5,  reasoning: 60,  cache_creation: 0 },
  "o1-pro":                      { input: 150,  output: 600,  cached: 0,  reasoning: 600,  cache_creation: 0 },
  "o1-pro-2025-03-19":           { input: 150,  output: 600,  cached: 0,  reasoning: 600,  cache_creation: 0 },
  "o3":                          { input: 2,  output: 8,  cached: 0.5,  reasoning: 8,  cache_creation: 0 },
  "o3-2025-04-16":               { input: 2,  output: 8,  cached: 0.5,  reasoning: 8,  cache_creation: 0 },
  "o3-deep-research":            { input: 10,  output: 40,  cached: 2.5,  reasoning: 40,  cache_creation: 0 },
  "o3-deep-research-2025-06-26": { input: 10,  output: 40,  cached: 2.5,  reasoning: 40,  cache_creation: 0 },
  "o3-mini":                     { input: 1.1,  output: 4.4,  cached: 0.55,  reasoning: 4.4,  cache_creation: 0 },
  "o3-mini-2025-01-31":          { input: 1.1,  output: 4.4,  cached: 0.55,  reasoning: 4.4,  cache_creation: 0 },
  "o3-pro":                      { input: 20,  output: 80,  cached: 0,  reasoning: 80,  cache_creation: 0 },
  "o3-pro-2025-06-10":           { input: 20,  output: 80,  cached: 0,  reasoning: 80,  cache_creation: 0 },
  "o4-mini":                     { input: 1.1,  output: 4.4,  cached: 0.275,  reasoning: 4.4,  cache_creation: 0 },
  "o4-mini-2025-04-16":          { input: 1.1,  output: 4.4,  cached: 0.275,  reasoning: 4.4,  cache_creation: 0 },
  "o4-mini-deep-research":       { input: 2,  output: 8,  cached: 0.5,  reasoning: 8,  cache_creation: 0 },
  "o4-mini-deep-research-2025-06-26": { input: 2,  output: 8,  cached: 0.5,  reasoning: 8,  cache_creation: 0 },
// === Gemini ===
  "gemini-3.6-flash":              { input: 1.50,  output: 7.50,  cached: 0.15,  reasoning: 11.25,  cache_creation: 1.875 },
  "gemini-3.6-flash-high":         { input: 1.50,  output: 7.50,  cached: 0.15,  reasoning: 11.25,  cache_creation: 1.875 },
  "gemini-3.6-flash-medium":       { input: 1.50,  output: 7.50,  cached: 0.15,  reasoning: 11.25,  cache_creation: 1.875 },
  "gemini-3.6-flash-low":          { input: 1.50,  output: 7.50,  cached: 0.15,  reasoning: 11.25,  cache_creation: 1.875 },
  "gemini-3.5-flash-lite":         { input: 0.30,  output: 2.50,  cached: 0.03,  reasoning: 3.75,   cache_creation: 0.375 },
  "gemini-3.5-flash-high":         { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  },
  "gemini-3-flash-preview":        { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  },
  "gemini-3-pro-preview":         { input: 2.00,  output: 12.00, cached: 0.25,  reasoning: 18.00,  cache_creation: 2.00  },
  "gemini-3.1-pro-low":           { input: 2.00,  output: 12.00, cached: 0.25,  reasoning: 18.00,  cache_creation: 2.00  },
  "gemini-3.1-pro-high":          { input: 4.00,  output: 18.00, cached: 0.50,  reasoning: 27.00,  cache_creation: 4.00  },
  "gemini-pro-agent":             { input: 4.00,  output: 18.00, cached: 0.50,  reasoning: 27.00,  cache_creation: 4.00  },
  "gemini-3-flash-agent":         { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  },
  "gemini-3.5-flash-low":         { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  },
  "gemini-3.5-flash-extra-low":   { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  },
  "gemini-3-flash":               { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  },
  "gemini-2.5-pro":               { input: 2.00,  output: 12.00, cached: 0.25,  reasoning: 18.00,  cache_creation: 2.00  },
  "gemini-2.5-flash":             { input: 0.30,  output: 2.50,  cached: 0.03,  reasoning: 3.75,   cache_creation: 0.30  },
  "gemini-2.5-flash-lite":        { input: 0.15,  output: 1.25,  cached: 0.015, reasoning: 1.875,  cache_creation: 0.15  },

  // === Qwen ===
  "qwen3-coder-plus":             { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  },
  "qwen3-coder-flash":            { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },

  // === Kimi ===
  // Official platform.kimi.ai: cache-hit / cache-miss / output per 1M tokens
  "kimi-k3":                      { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 15.00,  cache_creation: 3.00  },
  "k3":                           { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 15.00,  cache_creation: 3.00  },
  "kimi-k2.7-code":               { input: 0.95,  output: 4.00,  cached: 0.19,  reasoning: 4.00,   cache_creation: 0.95  },
  "kimi-k2.7-code-highspeed":     { input: 1.90,  output: 8.00,  cached: 0.38,  reasoning: 8.00,   cache_creation: 1.90  },
  "kimi-for-coding":              { input: 0.95,  output: 4.00,  cached: 0.19,  reasoning: 4.00,   cache_creation: 0.95  },
  "kimi-for-coding-highspeed":    { input: 1.90,  output: 8.00,  cached: 0.38,  reasoning: 8.00,   cache_creation: 1.90  },
  "kimi-k2":                      { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  },
  "kimi-k2-thinking":             { input: 1.50,  output: 6.00,  cached: 0.75,  reasoning: 9.00,   cache_creation: 1.50  },
  "kimi-k2.5":                    { input: 1.20,  output: 4.80,  cached: 0.60,  reasoning: 7.20,   cache_creation: 1.20  },
  "kimi-k2.5-thinking":           { input: 1.80,  output: 7.20,  cached: 0.90,  reasoning: 10.80,  cache_creation: 1.80  },
  "kimi-k2.6":                    { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  },
  "kimi-latest":                  { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  },

  // === DeepSeek ===
  "deepseek-chat":                { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  },
  "deepseek-reasoner":            { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  },
  "deepseek-r1":                  { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  },
  "deepseek-v3.2-chat":           { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  },
  "deepseek-v3.2-reasoner":       { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  },
  "deepseek-v4-flash":            { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  },
  "deepseek-v4-pro":              { input: 0.435, output: 0.87,  cached: 0.003625, reasoning: 0.87,  cache_creation: 0.435 },

  // === GLM ===
  "glm-4.6":                      { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },
  "glm-4.6v":                     { input: 0.75,  output: 3.00,  cached: 0.375, reasoning: 4.50,   cache_creation: 0.75  },
  "glm-4.7":                      { input: 0.75,  output: 3.00,  cached: 0.375, reasoning: 4.50,   cache_creation: 0.75  },
  "glm-5":                        { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  },

  // === MiniMax ===
  "MiniMax-M3":                   { input: 0.30,  output: 1.20,  cached: 0.06,  reasoning: 1.80,   cache_creation: 0.30  },
  "MiniMax-M2.1":                 { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },
  "MiniMax-M2.5":                 { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },
  "MiniMax-M2.7":                 { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },
  "minimax-m2.1":                 { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },
  "minimax-m2.5":                 { input: 0.60,  output: 2.40,  cached: 0.30,  reasoning: 3.60,   cache_creation: 0.60  },

  // === Grok ===
  "grok-code-fast-1":             { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },

  // === OpenRouter fallback ===
  "auto":                         { input: 2.00,  output: 8.00,  cached: 1.00,  reasoning: 12.00,  cache_creation: 2.00  },

  // === Misc ===
  "oswe-vscode-prime":            { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  },
  "gpt-oss-120b-medium":          { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  },
  "vision-model":                 { input: 1.50,  output: 6.00,  cached: 0.75,  reasoning: 9.00,   cache_creation: 1.50  },
  "coder-model":                  { input: 1.50,  output: 6.00,  cached: 0.75,  reasoning: 9.00,   cache_creation: 1.50  },
};

/**
 * Provider-specific pricing overrides.
 * Only include entries where price DIFFERS from MODEL_PRICING.
 * Keyed by provider alias (cc, cx, gc, gh, ...) or provider id (openai, anthropic, ...).
 */
export const PROVIDER_PRICING = {
  // GitHub Copilot (gh) — explicit override, matches canonical gpt-5.3-codex rate
  gh: {
    "gpt-5.3-codex": { input: 1.75, output: 14.00, cached: 0.175, reasoning: 14.00, cache_creation: 1.75 },
  },
};

/**
 * Pattern-based pricing fallback — matched when no exact model entry found.
 * Patterns use simple glob: "*" matches any substring.
 * First match wins — order matters.
 */
export const PATTERN_PRICING = [
  // --- Codex variants ---
  { pattern: "*-codex-xhigh",   pricing: { input: 10.00, output: 40.00, cached: 5.00,  reasoning: 60.00,  cache_creation: 10.00 } },
  { pattern: "*-codex-high",    pricing: { input: 8.00,  output: 32.00, cached: 4.00,  reasoning: 48.00,  cache_creation: 8.00  } },
  { pattern: "*-codex-max",     pricing: { input: 8.00,  output: 32.00, cached: 4.00,  reasoning: 48.00,  cache_creation: 8.00  } },
  { pattern: "*-codex-mini-*",  pricing: { input: 1.50,  output: 6.00,  cached: 0.75,  reasoning: 9.00,   cache_creation: 1.50  } },
  { pattern: "*-codex-mini",    pricing: { input: 1.50,  output: 6.00,  cached: 0.75,  reasoning: 9.00,   cache_creation: 1.50  } },
  { pattern: "*-codex-low",     pricing: { input: 1.75,  output: 14.00, cached: 0.175, reasoning: 14.00,  cache_creation: 1.75  } },
  { pattern: "*-codex-none",    pricing: { input: 1.75,  output: 14.00, cached: 0.175, reasoning: 14.00,  cache_creation: 1.75  } },
  { pattern: "*-codex-spark",   pricing: { input: 3.00,  output: 12.00, cached: 0.30,  reasoning: 12.00,  cache_creation: 3.00  } },
  { pattern: "codex-*",         pricing: { input: 1.75,  output: 14.00, cached: 0.175, reasoning: 14.00,  cache_creation: 1.75  } },
  { pattern: "*-codex",         pricing: { input: 1.75,  output: 14.00, cached: 0.175, reasoning: 14.00,  cache_creation: 1.75  } },

  // --- Claude ---
  { pattern: "claude-opus-*",   pricing: { input: 5.00,  output: 25.00, cached: 0.50,  reasoning: 25.00,  cache_creation: 6.25  } },
  { pattern: "claude-sonnet-*", pricing: { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 15.00,  cache_creation: 3.75  } },
  { pattern: "claude-haiku-*",  pricing: { input: 1.00,  output: 5.00,  cached: 0.10,  reasoning: 5.00,   cache_creation: 1.25  } },
  { pattern: "claude-*",        pricing: { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 15.00,  cache_creation: 3.75  } },

  // --- Gemini (specific first, generic last) ---
  { pattern: "gemini-*-flash-lite", pricing: { input: 0.15, output: 1.25, cached: 0.015, reasoning: 1.875, cache_creation: 0.15 } },
  { pattern: "gemini-*-flash",  pricing: { input: 0.30,  output: 2.50,  cached: 0.03,  reasoning: 3.75,   cache_creation: 0.30  } },
  { pattern: "gemini-*-pro",    pricing: { input: 2.00,  output: 12.00, cached: 0.25,  reasoning: 18.00,  cache_creation: 2.00  } },
  { pattern: "gemini-3-*",      pricing: { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  } },
  { pattern: "gemini-2.5-*",    pricing: { input: 0.30,  output: 2.50,  cached: 0.03,  reasoning: 3.75,   cache_creation: 0.30  } },
  { pattern: "gemini-*",        pricing: { input: 0.50,  output: 3.00,  cached: 0.03,  reasoning: 4.50,   cache_creation: 0.50  } },

  // --- GPT (specific first, generic last) ---
  { pattern: "gpt-5.6-*",       pricing: { input: 2.50,  output: 15.00, cached: 0.25,  reasoning: 15.00,  cache_creation: 2.50  } },
  { pattern: "gpt-5.3-*",       pricing: { input: 1.75,  output: 14.00, cached: 0.175, reasoning: 14.00,  cache_creation: 1.75  } },
  { pattern: "gpt-5.2-*",       pricing: { input: 1.75,  output: 14.00, cached: 0.175, reasoning: 14.00,  cache_creation: 1.75  } },
  { pattern: "gpt-5.1-*",       pricing: { input: 1.25,  output: 10.00, cached: 0.625, reasoning: 10.00,  cache_creation: 1.25  } },
  { pattern: "gpt-5-*",         pricing: { input: 1.25,  output: 10.00, cached: 0.625, reasoning: 10.00,  cache_creation: 1.25  } },
  { pattern: "gpt-5*",          pricing: { input: 1.25,  output: 10.00, cached: 0.625, reasoning: 10.00,  cache_creation: 1.25  } },
  { pattern: "gpt-4o-*",        pricing: { input: 0.15,  output: 0.60,  cached: 0.075, reasoning: 0.90,   cache_creation: 0.15  } },
  { pattern: "gpt-4o",          pricing: { input: 2.50,  output: 10.00, cached: 1.25,  reasoning: 15.00,  cache_creation: 2.50  } },
  { pattern: "gpt-4*",          pricing: { input: 2.50,  output: 10.00, cached: 1.25,  reasoning: 15.00,  cache_creation: 2.50  } },

  // --- o1 / o-series ---
  { pattern: "o1-*",            pricing: { input: 3.00,  output: 12.00, cached: 1.50,  reasoning: 18.00,  cache_creation: 3.00  } },
  { pattern: "o1",              pricing: { input: 15.00, output: 60.00, cached: 7.50,  reasoning: 90.00,  cache_creation: 15.00 } },
  { pattern: "o3-*",            pricing: { input: 10.00, output: 40.00, cached: 5.00,  reasoning: 60.00,  cache_creation: 10.00 } },
  { pattern: "o4-*",            pricing: { input: 2.00,  output: 8.00,  cached: 1.00,  reasoning: 12.00,  cache_creation: 2.00  } },

  // --- Qwen ---
  { pattern: "qwen3-coder-*",   pricing: { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  } },
  { pattern: "qwen*-coder-*",   pricing: { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  } },
  { pattern: "qwen*",           pricing: { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  } },

  // --- Kimi ---
  { pattern: "kimi-*-thinking",  pricing: { input: 1.80,  output: 7.20,  cached: 0.90,  reasoning: 10.80,  cache_creation: 1.80  } },
  { pattern: "kimi-k3*",        pricing: { input: 3.00,  output: 15.00, cached: 0.30,  reasoning: 15.00,  cache_creation: 3.00  } },
  { pattern: "kimi-k2*",        pricing: { input: 1.20,  output: 4.80,  cached: 0.60,  reasoning: 7.20,   cache_creation: 1.20  } },
  { pattern: "kimi-*",          pricing: { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  } },

  // --- DeepSeek ---
  { pattern: "deepseek-*reasoner*", pricing: { input: 0.14, output: 0.28, cached: 0.0028, reasoning: 0.28, cache_creation: 0.14 } },
  { pattern: "deepseek-r*",     pricing: { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  } },
  { pattern: "deepseek-v*",     pricing: { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  } },
  { pattern: "deepseek-*",      pricing: { input: 0.14,  output: 0.28,  cached: 0.0028, reasoning: 0.28,   cache_creation: 0.14  } },

  // --- GLM ---
  { pattern: "glm-5*",          pricing: { input: 1.00,  output: 4.00,  cached: 0.50,  reasoning: 6.00,   cache_creation: 1.00  } },
  { pattern: "glm-4*",          pricing: { input: 0.75,  output: 3.00,  cached: 0.375, reasoning: 4.50,   cache_creation: 0.75  } },
  { pattern: "glm-*",           pricing: { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  } },

  // --- MiniMax ---
  { pattern: "MiniMax-*",       pricing: { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  } },
  { pattern: "minimax-*",       pricing: { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  } },

  // --- Grok ---
  { pattern: "grok-code-*",     pricing: { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  } },
  { pattern: "grok-*",          pricing: { input: 0.50,  output: 2.00,  cached: 0.25,  reasoning: 3.00,   cache_creation: 0.50  } },
];

/**
 * Match a model ID against a glob pattern (* = wildcard). Case-insensitive:
 * registry ids mix casing (e.g. "MiniMax-M2.5" vs "minimax-m2.5").
 */
export function matchPattern(pattern, model) {
  const regex = new RegExp("^" + pattern.split("*").map(s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*") + "$", "i");
  return regex.test(model);
}

/**
 * Resolve pricing for a model using the 3-step fallback chain:
 *   1. PROVIDER_PRICING[provider][model]
 *   2. MODEL_PRICING[model]
 *   3. PATTERN_PRICING (glob match)
 *
 * @param {string} provider
 * @param {string} model
 * @returns {object|null}
 */
export function getPricingForModel(provider, model) {
  if (!model) return null;

  // 1. Provider-specific override
  if (provider && PROVIDER_PRICING[provider]?.[model]) {
    return PROVIDER_PRICING[provider][model];
  }

  // 2. Canonical model pricing (strip vendor prefix if needed: "deepseek/deepseek-chat" → "deepseek-chat")
  const baseModel = model.includes("/") ? model.split("/").pop() : model;
  if (MODEL_PRICING[baseModel]) return MODEL_PRICING[baseModel];
  if (MODEL_PRICING[model]) return MODEL_PRICING[model];

  // 3. Pattern match
  for (const { pattern, pricing } of PATTERN_PRICING) {
    if (matchPattern(pattern, baseModel) || matchPattern(pattern, model)) {
      return pricing;
    }
  }

  return null;
}

/**
 * Get all provider pricing (for UI / API).
 * Returns PROVIDER_PRICING — consumers should fall back to MODEL_PRICING for unlisted models.
 */
export function getDefaultPricing() {
  return PROVIDER_PRICING;
}

/**
 * Format cost for display
 * @param {number} cost
 * @returns {string}
 */
export function formatCost(cost) {
  if (cost === null || cost === undefined || isNaN(cost)) return "$0.00";
  return `$${cost.toFixed(2)}`;
}

/**
 * Calculate cost from tokens and pricing
 * @param {object} tokens
 * @param {object} pricing
 * @returns {number} cost in dollars
 */
export function calculateCostFromTokens(tokens, pricing) {
  if (!tokens || !pricing) return 0;

  let cost = 0;

  const inputTokens = tokens.prompt_tokens || tokens.input_tokens || 0;
  const cachedTokens = tokens.cached_tokens || tokens.cache_read_input_tokens || 0;
  const cacheCreationTokens = tokens.cache_creation_input_tokens || 0;
  // prompt_tokens is cache-inclusive (see canonicalizeUsage): cached + cache_creation
  // are subsets, so subtract both to avoid charging them at the full input rate.
  const nonCachedInput = Math.max(0, inputTokens - cachedTokens - cacheCreationTokens);

  cost += nonCachedInput * (pricing.input / 1000000);

  if (cachedTokens > 0) {
    cost += cachedTokens * ((pricing.cached || pricing.input) / 1000000);
  }

  const outputTokens = tokens.completion_tokens || tokens.output_tokens || 0;
  cost += outputTokens * (pricing.output / 1000000);

  const reasoningTokens = tokens.reasoning_tokens || 0;
  if (reasoningTokens > 0) {
    cost += reasoningTokens * ((pricing.reasoning || pricing.output) / 1000000);
  }

  if (cacheCreationTokens > 0) {
    cost += cacheCreationTokens * ((pricing.cache_creation || pricing.input) / 1000000);
  }

  return cost;
}
