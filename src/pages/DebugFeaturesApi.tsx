import { useEffect, useState } from "react";

const DebugFeaturesAPI = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

        console.log("🔍 Testing API...");
        console.log("Frontend URL:", frontendUrl);
        console.log("API URL:", `${baseApiUrl}/features-pages/`);

        const response = await fetch(`${baseApiUrl}/features-pages/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Frontend-Url": frontendUrl,
          },
        });

        console.log("📡 Response Status:", response.status);
        console.log("📡 Response OK:", response.ok);

        if (!response.ok) {
          throw new Error(
            `API Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("✅ API Response:", data);

        setApiData(data);
        setError(null);
      } catch (err) {
        console.error("❌ API Error:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 bg-white shadow-2xl rounded-xl p-6 max-w-md border-2 border-blue-500 z-50">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
          <div>
            <h3 className="font-bold text-lg">Testing Features API...</h3>
            <p className="text-sm text-gray-600">Please wait...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-2xl rounded-xl p-6 w-[90vw] max-w-5xl border-2 border-blue-500 z-50 max-h-[85vh] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <span className={error ? "text-red-500" : "text-green-600"}>
            {error ? "❌" : "✅"}
          </span>
          Features API Debug
        </h3>

        <button
          onClick={() => window.location.reload()}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>

      {/* Content */}
      {error ? (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
          <h4 className="font-bold text-red-700 mb-2">❌ Error:</h4>
          <p className="text-red-600 text-sm font-mono">{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LEFT CARD — API Summary */}
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 overflow-y-auto max-h-[65vh]">
            <h4 className="font-bold text-green-700 mb-3">📄 API Summary</h4>

            {apiData && (
              <>
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <span className="text-gray-600">Total Count:</span>
                    <span className="font-bold ml-2">
                      {apiData.meta?.total_count || 0}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Items Found:</span>
                    <span className="font-bold ml-2">
                      {apiData.items?.length || 0}
                    </span>
                  </div>
                </div>

                {apiData.items?.length > 0 ? (
                  <div className="space-y-3">
                    {apiData.items.map((page: any, index: number) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-3 border border-green-200"
                      >
                        <div className="font-bold text-green-700 mb-1">
                          {index + 1}. {page.title}
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div>
                            ID: <span className="font-mono">{page.id}</span>
                          </div>
                          <div>
                            Slug: <span className="font-mono">{page.slug}</span>
                          </div>
                          <div>
                            Live:{" "}
                            <span
                              className={
                                page.live
                                  ? "text-green-600 font-bold"
                                  : "text-red-600 font-bold"
                              }
                            >
                              {page.live ? "Yes" : "No"}
                            </span>
                          </div>
                          <div>
                            Features Count:{" "}
                            <span className="font-bold">
                              {page.features?.length || 0}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mt-3">
                    <p className="text-yellow-800 text-sm font-bold">
                      ⚠️ No pages found
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* RIGHT CARD — FULL JSON */}
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 overflow-y-auto max-h-[65vh]">
            <h4 className="font-bold text-blue-900 mb-3">
              🧩 Full JSON Response
            </h4>

            <pre className="text-xs bg-white p-2 rounded border border-blue-200 overflow-x-auto">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-4 border-t text-xs text-gray-500">
        <p>💡 Drag the panel or resize to view more content.</p>
      </div>
    </div>
  );
};

export default DebugFeaturesAPI;
