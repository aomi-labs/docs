"use client";

import { useMemo, useState } from "react";

export function WidgetPlayground() {
const PRESETS = {
  Default: { background: "#ffffff", foreground: "#09090b", muted: "#71717a", panel: "#f4f4f5", sidebar: "#fafafa", primary: "#5288c2", border: "#e4e4e7", radius: 16 },
  "Modern Minimal": { background: "#ffffff", foreground: "#171717", muted: "#737373", panel: "#f7f7f7", sidebar: "#ffffff", primary: "#171717", radius: 6 },
  "Violet Bloom": { background: "#fbfaff", foreground: "#241b35", muted: "#756b83", panel: "#f1ecfa", sidebar: "#f6f2fc", primary: "#7557d6", radius: 22 },
  "Ocean Breeze": { background: "#f8fcfd", foreground: "#12323b", muted: "#647d84", panel: "#e8f5f7", sidebar: "#eff9fa", primary: "#16869a", radius: 14 },
  Claude: { background: "#faf8f5", foreground: "#2d2926", muted: "#766f69", panel: "#eee9e3", sidebar: "#f4f0eb", primary: "#d97757", radius: 12 },
  Cyberpunk: { background: "#090912", foreground: "#f5f3ff", muted: "#9d96ba", panel: "#171429", sidebar: "#100d20", primary: "#e939ff", radius: 4 },
  "Midnight Bloom": { background: "#101018", foreground: "#f6f3ff", muted: "#9c96ae", panel: "#1d1929", sidebar: "#161321", primary: "#a78bfa", radius: 18 },
  Catppuccin: { background: "#1e1e2e", foreground: "#cdd6f4", muted: "#a6adc8", panel: "#313244", sidebar: "#181825", primary: "#cba6f7", radius: 12 },
  Nature: { background: "#fbfcf7", foreground: "#243126", muted: "#738075", panel: "#edf2e5", sidebar: "#f3f6ed", primary: "#557a46", radius: 16 },
  "Amber Minimal": { background: "#fffdf8", foreground: "#29241d", muted: "#7e7569", panel: "#f8f0df", sidebar: "#fbf5e9", primary: "#d18b20", radius: 8 },
  Supabase: { background: "#ffffff", foreground: "#1f1f1f", muted: "#707070", panel: "#f3f5f4", sidebar: "#f8faf9", primary: "#3ecf8e", radius: 8 },
  Mono: { background: "#ffffff", foreground: "#111111", muted: "#737373", panel: "#eeeeee", sidebar: "#f8f8f8", primary: "#111111", radius: 0 },
};

const CONTROL_OPTIONS = ["Model", "App", "API Key", "Wallet", "Network"];

const controlLabel = {
  Model: "Auto",
  App: "Basic Apps",
  "API Key": "API key",
  Wallet: "Wallet",
  Network: "Base",
};

function withMode(theme, mode) {
  if (mode === "light") return theme;
  return {
    ...theme,
    background: "#0f0f12",
    foreground: "#f5f5f5",
    muted: "#a1a1aa",
    panel: "#1a1a20",
    sidebar: "#141419",
    border: "#3f3f46",
    primary: "#7facd6",
  };
}

function aomiMark(size) {
  return (
    <svg width={size} height={size} viewBox="0 0 362 362" fill="none" aria-hidden="true">
      <path d="M321.778 94.2349C321.778 64.4045 297.595 40.2222 267.765 40.2222C237.935 40.2222 213.752 64.4045 213.752 94.2349C213.752 124.065 237.935 148.248 267.765 148.248C297.595 148.248 321.778 124.065 321.778 94.2349ZM362 94.2349C362 146.279 319.81 188.47 267.765 188.47C215.721 188.47 173.53 146.279 173.53 94.2349C173.53 42.1904 215.721 1.33271e-06 267.765 0C319.81 0 362 42.1904 362 94.2349Z" fill="currentColor" />
      <path d="M181 0C184.792 0 188.556 0.116399 192.289 0.346221C189.506 2.74481 186.833 5.26892 184.28 7.90977C170.997 20.759 160.669 36.6452 154.42 54.4509C95.7682 66.7078 51.7143 118.709 51.7143 181C51.7143 252.403 109.597 310.286 181 310.286C243.292 310.286 295.291 266.231 307.547 207.58C325.364 201.327 341.259 190.99 354.113 177.695C356.745 175.149 359.261 172.486 361.653 169.71C361.883 173.444 362 177.208 362 181C362 280.964 280.964 362 181 362C81.0365 362 0 280.964 0 181C0 81.0365 81.0365 0 181 0Z" fill="currentColor" />
    </svg>
  );
}

/** Preset card: bordered option; active takes the accent-subtle tint. */
function smallButton({ active, children, onClick, style }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: `1px solid ${active ? "var(--pg-accent-strong)" : "var(--pg-border)"}`,
        borderRadius: 10,
        background: active ? "var(--pg-accent-subtle)" : "transparent",
        color: "inherit",
        padding: "6px 10px",
        fontSize: 12,
        fontWeight: active ? 600 : 500,
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/** Segmented control (inventory №04): joined single-select on a bordered,
    sunken surface-2 track; the active segment is an accent pill. */
function segmented({ options, value, onChange }) {
  return (
    <div style={{ display: "inline-flex", border: "1px solid var(--pg-border)", borderRadius: 999, padding: 3, background: "var(--pg-surface-2)" }}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          style={{
            border: 0,
            borderRadius: 999,
            padding: "5px 14px",
            fontSize: 12,
            cursor: "pointer",
            background: value === o.value ? "var(--pg-accent-strong)" : "transparent",
            color: value === o.value ? "var(--pg-on-accent)" : "var(--pg-muted)",
            fontWeight: value === o.value ? 500 : 400,
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Filter/toggle chip (inventory №05): unjoined pill, same 12px object as a
    segment; selected takes the accent-strong fill. */
function chip({ checked, children, onChange }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      onClick={onChange}
      style={{
        border: `1px solid ${checked ? "transparent" : "var(--pg-border)"}`,
        borderRadius: 999,
        padding: "5px 14px",
        fontSize: 12,
        cursor: "pointer",
        background: checked ? "var(--pg-accent-strong)" : "var(--pg-surface-2)",
        color: checked ? "var(--pg-on-accent)" : "var(--pg-muted)",
        fontWeight: checked ? 500 : 400,
      }}
    >
      {children}
    </button>
  );
}

function copyToClipboard(text) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  if (typeof document === "undefined") return Promise.reject(new Error("Clipboard unavailable"));
  const field = document.createElement("textarea");
  field.value = text;
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(field);
  return copied ? Promise.resolve() : Promise.reject(new Error("Copy failed"));
}

  const [panel, setPanel] = useState("layout");
  const [presetName, setPresetName] = useState("Default");
  const [previewMode, setPreviewMode] = useState("light");
  const [radius, setRadius] = useState(PRESETS.Default.radius);
  const [showSidebar, setShowSidebar] = useState(true);
  const [walletPosition, setWalletPosition] = useState("footer");
  const [controlPlacement, setControlPlacement] = useState("composer");
  const [controls, setControls] = useState({ Model: true, App: true, "API Key": false, Wallet: false, Network: true });
  const [codeTab, setCodeTab] = useState("jsx");
  const [copied, setCopied] = useState(false);

  const theme = useMemo(
    () => ({ ...withMode(PRESETS[presetName], previewMode), radius }),
    [presetName, previewMode, radius]
  );

  const visibleControls = CONTROL_OPTIONS.filter((name) => controls[name]);
  const rootProps = [
    'height="640px"',
    `showSidebar={${showSidebar}}`,
    walletPosition === "hidden" ? "walletPosition={null}" : `walletPosition="${walletPosition}"`,
  ].join(" ");
  const generatedJsx = `<AomiFrame.Root ${rootProps}>\n  <AomiFrame.Header showSidebarTrigger={${showSidebar}}${controlPlacement === "header" ? " withControl" : ""} />\n  <AomiFrame.Composer${controlPlacement === "composer" ? " withControl" : ""} />\n</AomiFrame.Root>`;
  const generatedCss = `:root {\n  --aomi-bg: ${theme.background};\n  --aomi-fg: ${theme.foreground};\n  --aomi-muted: ${theme.muted};\n  --aomi-surface: ${theme.sidebar};\n  --aomi-surface-2: ${theme.panel};\n  --aomi-border: ${theme.border ?? "#e4e4e7"};\n  --aomi-accent: ${theme.primary};\n  --radius: ${theme.radius / 16}rem;\n}`;
  const generatedCode = codeTab === "jsx" ? generatedJsx : generatedCss;

  function selectPreset(name) {
    setPresetName(name);
    setRadius(PRESETS[name].radius);
  }

  function toggleControl(name) {
    setControls((current) => ({ ...current, [name]: !current[name] }));
  }

  async function handleCopy() {
    try {
      await copyToClipboard(generatedCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  const border = theme.border ?? "rgba(128,128,128,.28)";

  return (
    <div className="aomi-widget-playground" style={{ color: "var(--foreground, inherit)" }}>
      <style>{`
        .aomi-widget-playground { padding: 16px 32px; box-sizing: border-box; }
        /* Aomi brand roles (aomi-design inventory) for the playground chrome.
           Light defaults; dark values follow Mintlify's theme class. */
        .aomi-widget-playground {
          --pg-surface-2: #f4f4f5; --pg-border: #e4e4e7; --pg-muted: #71717a;
          --pg-accent-strong: #416cac; --pg-accent-subtle: #e2eef8; --pg-on-accent: #ffffff;
        }
        html.dark .aomi-widget-playground, .dark .aomi-widget-playground,
        [data-theme="dark"] .aomi-widget-playground {
          --pg-surface-2: #2e2e33; --pg-border: #3f3f46; --pg-muted: #a1a1aa;
          --pg-accent-strong: #5288c2; --pg-accent-subtle: #28354a; --pg-on-accent: #09090b;
        }
        .aomi-playground-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 12px; }
        .aomi-playground-preview { min-width: 0; height: 640px; }
        .aomi-playground-settings { height: 640px; overflow: auto; }
        .aomi-playground-code { margin-top: 12px; }
        @media (max-width: 900px) {
          .aomi-widget-playground { padding: 16px; }
          .aomi-playground-grid { grid-template-columns: 1fr; }
          .aomi-playground-settings { height: auto; max-height: none; }
        }
        @media (max-width: 620px) {
          .aomi-widget-playground { padding: 10px; }
          .aomi-playground-preview { height: 520px; }
        }
      `}</style>

      <div className="aomi-playground-grid">
        <section
          className="aomi-playground-preview"
          aria-label="Widget preview"
          style={{
            display: "flex",
            overflow: "hidden",
            border: `1px solid ${border}`,
            borderRadius: theme.radius,
            background: theme.background,
            color: theme.foreground,
          }}
        >
          {showSidebar && (
            <aside style={{ width: 210, flexShrink: 0, padding: "14px 12px 12px", background: theme.sidebar, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 4px" }}>
                {aomiMark(17)}
                <span style={{ fontFamily: '"Source Serif 4", ui-serif, Georgia, Cambria, serif', fontSize: 17, fontWeight: 600, lineHeight: 1, letterSpacing: "-.025em" }}>aomi</span>
                <span style={{ display: "flex", height: 17, alignItems: "center", padding: "0 6px", borderRadius: 6, background: theme.panel, fontSize: 9, fontWeight: 600, lineHeight: 1 }}>CHAT</span>
                <span style={{ color: theme.muted, fontSize: 11 }}>⌄</span>
              </div>
              {walletPosition === "header" && (
                <button type="button" style={{ marginTop: 12, border: `1px solid ${border}`, borderRadius: 999, padding: "8px 10px", background: theme.panel, color: theme.foreground, textAlign: "left", fontSize: 11 }}>Connect wallet⌄</button>
              )}
              <button type="button" style={{ marginTop: 18, border: `1px solid ${border}`, borderRadius: Math.max(8, theme.radius - 5), padding: "10px 12px", background: theme.panel, color: theme.foreground, textAlign: "left", fontSize: 13, fontWeight: 550 }}>＋&nbsp;&nbsp;New chat</button>
              <div style={{ margin: "22px 4px 10px", fontSize: 11, fontWeight: 550, color: theme.muted }}>Recent</div>
              <div style={{ display: "grid", gap: 13, padding: "0 4px" }}>
                {[82, 68, 88, 72, 78].map((width, index) => (
                  <span key={index} style={{ width: `${width}%`, height: 8, borderRadius: 999, background: theme.panel, opacity: 0.72 }} />
                ))}
              </div>
              <div style={{ flex: 1 }} />
              {walletPosition === "footer" && (
                <div style={{ borderTop: `1px solid ${border}`, paddingTop: 12 }}>
                  <button type="button" style={{ width: "100%", display: "flex", justifyContent: "space-between", border: `1px solid ${border}`, borderRadius: 999, padding: "10px 12px", background: theme.panel, color: theme.foreground, fontSize: 12, fontWeight: 550 }}>
                    <span>Connect wallet</span><span style={{ color: theme.muted }}>⌃⌄</span>
                  </button>
                </div>
              )}
            </aside>
          )}

          <main style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column" }}>
            <header style={{ minHeight: 54, display: "flex", alignItems: "center", gap: 10, padding: "0 14px", borderBottom: `1px solid ${border}` }}>
              {showSidebar && <span aria-label="Toggle sidebar" style={{ color: theme.muted }}>◧</span>}
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                {controls.Network && (
                  <span style={{ padding: "6px 10px", border: `1px solid ${border}`, borderRadius: 999, color: theme.muted, fontSize: 10 }}>♦&nbsp; Ethereum&nbsp; / &nbsp;≋ Solana&nbsp;⌄</span>
                )}
                {controlPlacement === "header" && visibleControls.filter((name) => name !== "Network").map((name) => (
                  <span key={name} style={{ padding: "5px 8px", borderRadius: 999, background: theme.panel, color: theme.muted, fontSize: 10 }}>
                    {controlLabel[name]}
                  </span>
                ))}
                <span aria-label="Packages" style={{ color: theme.muted, fontSize: 16 }}>◇</span>
                <span aria-label="Settings" style={{ color: theme.muted, fontSize: 15 }}>⚙</span>
                <span aria-label="Theme" style={{ display: "grid", placeItems: "center", width: 27, height: 22, borderRadius: 999, background: theme.panel, color: theme.foreground, fontSize: 12 }}>☼</span>
              </div>
            </header>
            <div style={{ flex: 1, minHeight: 0, padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
              <div style={{ display: "grid", placeItems: "center" }}>{aomiMark(48)}</div>
              <h2 style={{ margin: "14px 0 18px", fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 400, letterSpacing: "-.02em", textAlign: "center" }}>What should happen on-chain?</h2>
              <div style={{ width: "min(100%, 720px)", display: "grid", gap: 7, marginBottom: 16, overflow: "hidden" }}>
                {[
                  ["↔", "Swap 0.5 ETH to USDC"],
                  ["⌁", "Bridge USDC to Base"],
                  ["◎", "Check my portfolio"],
                  ["◇", "Deploy an ERC-20 token"],
                  ["↗", "Find the best ETH yield"],
                ].reduce((rows, item, index) => {
                  const row = index < 3 ? 0 : 1;
                  rows[row].push(item);
                  return rows;
                }, [[], []]).map((row, rowIndex) => (
                  <div key={rowIndex} style={{ display: "flex", justifyContent: "center", gap: 7, whiteSpace: "nowrap" }}>
                    {row.map(([icon, label]) => (
                      <span key={label} style={{ border: `1px solid ${border}`, borderRadius: 999, padding: "7px 10px", background: theme.sidebar, fontSize: 10 }}>
                        <span style={{ color: theme.primary }}>{icon}</span>&nbsp;&nbsp;{label}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ width: "min(100%, 680px)", border: `1px solid ${border}`, borderRadius: Math.max(14, theme.radius), background: theme.sidebar, padding: "12px 13px 10px" }}>
                <div style={{ minHeight: 36, color: theme.muted, fontSize: 12 }}>Ask Aomi to swap, bridge, send, or deploy…</div>
                {controlPlacement === "composer" && (
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 6 }}>
                    {visibleControls.filter((name) => name !== "Network").map((name) => <span key={name} style={{ padding: "4px 7px", borderRadius: 999, color: theme.muted, fontSize: 9 }}>{controlLabel[name]}⌄</span>)}
                    <span aria-label="Send" style={{ marginLeft: "auto", display: "grid", placeItems: "center", width: 25, height: 25, borderRadius: "50%", background: theme.muted, color: theme.background, fontSize: 15 }}>↑</span>
                  </div>
                )}
              </div>
            </div>
          </main>
        </section>

        <aside className="aomi-playground-settings" aria-label="Playground settings" style={{ border: `1px solid ${border}`, borderRadius: 12, background: "rgba(128,128,128,.04)" }}>
          <div style={{ display: "flex", gap: 6, padding: 12, borderBottom: `1px solid ${border}` }}>
            {segmented({
              options: [
                { value: "layout", label: "Layout" },
                { value: "theme", label: "Theme" },
              ],
              value: panel,
              onChange: setPanel,
            })}
          </div>
          <div style={{ padding: 15 }}>
            {panel === "layout" ? (
              <div style={{ display: "grid", gap: 20 }}>
                <fieldset style={{ display: "grid", gap: 10, border: 0, padding: 0, margin: 0 }}>
                  <legend style={{ marginBottom: 10, fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Sidebar</legend>
                  <div>{chip({ checked: showSidebar, onChange: () => setShowSidebar(!showSidebar), children: "Shown" })}</div>
                  {showSidebar && (
                    <div style={{ display: "grid", gap: 6 }}>
                      <span style={{ fontSize: 10, letterSpacing: ".07em", textTransform: "uppercase", color: "var(--pg-muted)" }}>Wallet position</span>
                      {segmented({
                        options: [
                          { value: "header", label: "Header" },
                          { value: "footer", label: "Footer" },
                          { value: "hidden", label: "Hidden" },
                        ],
                        value: walletPosition,
                        onChange: setWalletPosition,
                      })}
                    </div>
                  )}
                </fieldset>
                <fieldset style={{ display: "grid", gap: 12, border: 0, padding: 0, margin: 0 }}>
                  <legend style={{ marginBottom: 10, fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Control panel</legend>
                  {segmented({
                    options: [
                      { value: "header", label: "Header" },
                      { value: "composer", label: "Composer" },
                    ],
                    value: controlPlacement,
                    onChange: setControlPlacement,
                  })}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {CONTROL_OPTIONS.map((name) => (
                      <span key={name}>{chip({ checked: controls[name], onChange: () => toggleControl(name), children: name })}</span>
                    ))}
                  </div>
                </fieldset>
              </div>
            ) : (
              <div style={{ display: "grid", gap: 18 }}>
                <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
                  <legend style={{ marginBottom: 10, fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Presets</legend>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
                    {Object.keys(PRESETS).map((name) => (
                      <span key={name}>{smallButton({ active: presetName === name, onClick: () => selectPreset(name), style: { textAlign: "left", width: "100%" }, children: name })}</span>
                    ))}
                  </div>
                </fieldset>
                <fieldset style={{ display: "grid", gap: 10, border: 0, padding: 0, margin: 0 }}>
                  <legend style={{ marginBottom: 8, fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Preview mode</legend>
                  {segmented({
                    options: [
                      { value: "light", label: "Light" },
                      { value: "dark", label: "Dark" },
                    ],
                    value: previewMode,
                    onChange: setPreviewMode,
                  })}
                </fieldset>
                <label style={{ display: "grid", gap: 8, fontSize: 11 }}>
                  Radius: {radius / 16}rem
                  <input type="range" min="0" max="28" value={radius} onChange={(event) => setRadius(Number(event.target.value))} style={{ accentColor: "var(--pg-accent-strong)" }} />
                </label>
              </div>
            )}
          </div>
        </aside>
      </div>

      <section className="aomi-playground-code" aria-label="Generated code" style={{ border: `1px solid ${border}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 12px", borderBottom: `1px solid ${border}` }}>
          {segmented({
            options: [
              { value: "jsx", label: "JSX" },
              { value: "css", label: "Theme CSS" },
            ],
            value: codeTab,
            onChange: setCodeTab,
          })}
          <button type="button" onClick={handleCopy} style={{ marginLeft: "auto", border: 0, background: "transparent", color: "inherit", fontSize: 12, cursor: "pointer" }}>
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
        <pre style={{ margin: 0, padding: 14, maxHeight: 180, overflow: "auto", background: "rgba(128,128,128,.04)", fontSize: 11, lineHeight: 1.6 }}>
          <code>{generatedCode}</code>
        </pre>
      </section>
    </div>
  );
}
