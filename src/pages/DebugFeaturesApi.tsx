import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";

const DebugFeaturesAPI = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // === Panel UI State ===
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // === Saved window position/size ===
  const [panelState, setPanelState] = useState(() => {
    const stored = localStorage.getItem("debugPanelState");
    return stored
      ? JSON.parse(stored)
      : {
          x: window.innerWidth - 600,
          y: window.innerHeight - 500,
          width: 600,
          height: 450,
        };
  });

  // Auto detect dark mode for initial load
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  // Save panel state in localStorage
  const savePanelState = (newState: any) => {
    setPanelState(newState);
    localStorage.setItem("debugPanelState", JSON.stringify(newState));
  };

  // Save collapsed state
  useEffect(() => {
    localStorage.setItem("debugPanelCollapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  // Load collapsed state
  useEffect(() => {
    const saved = localStorage.getItem("debugPanelCollapsed");
    if (saved === "1") setCollapsed(true);
  }, []);

  // === API CALL ===
  useEffect(() => {
    const testAPI = async () => {
      try {
        setLoading(true);

        const isDevelopment = import.meta.env.DEV;
        const frontendUrl = isDevelopment
          ? "http://localhost:5173"
          : "https://dynamic-cms-zeta.vercel.app";

        const baseApiUrl = isDevelopment
          ? "/blogs/api/v2"
          : "https://esign-admin.signmary.com/blogs/api/v2";

        const response = await fetch(`${baseApiUrl}/features-pages/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Frontend-Url": frontendUrl,
          },
        });

        if (!response.ok) {
          throw new Error(
            `API Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  // === THEMING ===
  const bg = darkMode ? "bg-gray-900" : "bg-white";
  const text = darkMode ? "text-gray-200" : "text-gray-800";
  const border = darkMode ? "border-gray-700" : "border-gray-300";

  return (
    <Rnd
      size={{ width: panelState.width, height: panelState.height }}
      position={{ x: panelState.x, y: panelState.y }}
      minWidth={400}
      minHeight={120}
      bounds="window"
      dragHandleClassName="drag-header"
      onDragStop={(e, d) => {
        savePanelState({ ...panelState, x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, pos) => {
        savePanelState({
          ...panelState,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...pos,
        });
      }}
      className="z-50"
    >
      <div
        className={`${bg} ${text} shadow-2xl rounded-xl border-2 ${border} w-full h-full flex flex-col`}
      >
        {/* HEADER */}
        <div
          className={`drag-header px-4 py-3 flex items-center justify-between ${
            darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"
          } cursor-move`}
        >
          <div className="flex items-center gap-2">
            <span>{error ? "❌" : "🛠"}</span>
            <span className="font-semibold">Features API Debug</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-sm"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            <button
              onClick={() => window.location.reload()}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-sm"
            >
              Refresh
            </button>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-sm"
            >
              {collapsed ? "➕ Expand" : "➖ Collapse"}
            </button>
          </div>
        </div>

        {/* COLLAPSED MODE */}
        {collapsed && (
          <div className="p-3 text-center text-sm opacity-80">
            Debug panel collapsed.
            <br />
            Click "Expand" to view details.
          </div>
        )}

        {/* EXPANDED MODE */}
        {!collapsed && (
          <div className="flex-1 p-4 overflow-hidden">
            {loading ? (
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-4 border-blue-500 border-t-transparent"></div>
                <p>Testing API...</p>
              </div>
            ) : error ? (
              <div className="bg-red-500/10 border border-red-500 p-4 rounded-lg">
                <h4 className="font-bold text-red-400 mb-2">❌ Error</h4>
                <p className="text-sm font-mono">{error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                {/* LEFT – SUMMARY */}
                <div
                  className={`rounded-lg p-4 overflow-y-auto border ${border}`}
                >
                  <h4 className="font-bold mb-3">📄 API Summary</h4>

                  {apiData?.items?.map((page: any, i: number) => (
                    <div
                      key={i}
                      className={`p-3 rounded border mb-3 ${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <div className="font-bold mb-1">
                        {i + 1}. {page.title}
                      </div>
                      <div className="text-xs opacity-80 space-y-1">
                        <div>ID: {page.id}</div>
                        <div>Slug: {page.slug}</div>
                        <div>
                          Live:{" "}
                          <span
                            className={
                              page.live ? "text-green-400" : "text-red-400"
                            }
                          >
                            {page.live ? "Yes" : "No"}
                          </span>
                        </div>
                        <div>Features: {page.features?.length || 0}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RIGHT – FULL JSON */}
                <div
                  className={`rounded-lg p-4 overflow-y-auto border ${border}`}
                >
                  <h4 className="font-bold mb-3">🧩 Full JSON Response</h4>
                  <pre
                    className={`text-xs p-3 rounded overflow-x-auto ${
                      darkMode
                        ? "bg-gray-800 text-gray-100"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {JSON.stringify(apiData, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Rnd>
  );
};

export default DebugFeaturesAPI;
