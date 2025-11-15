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
        console.log("API URL:", `${baseApiUrl}/mypages/`);

        const response = await fetch(`${baseApiUrl}/mypages/`, {
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
    <div className="fixed bottom-4 right-4 bg-white shadow-2xl rounded-xl p-6 max-w-2xl border-2 border-blue-500 z-50 max-h-[80vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <span className={error ? "🔴" : "🟢"}>{error ? "❌" : "✅"}</span>
          Features API Debug
        </h3>
        <button
          onClick={() => window.location.reload()}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>

      {error ? (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
          <h4 className="font-bold text-red-700 mb-2">❌ Error:</h4>
          <p className="text-red-600 text-sm font-mono">{error}</p>

          <div className="mt-4 p-3 bg-white rounded border border-red-200">
            <h5 className="font-bold text-sm mb-2">
              🔧 Troubleshooting Steps:
            </h5>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>
                Check if FeaturesPage is <strong>published</strong> (not draft)
              </li>
              <li>Verify "Allowed frontends" includes your frontend</li>
              <li>Check CORS settings on Django backend</li>
              <li>
                Verify API endpoint exists:{" "}
                <code className="bg-gray-100 px-1 rounded">
                  /blogs/api/v2/features-pages/
                </code>
              </li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
            <h4 className="font-bold text-green-700 mb-2">✅ API Response:</h4>

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

                {apiData.items && apiData.items.length > 0 ? (
                  <div className="space-y-3">
                    <h5 className="font-bold text-sm">📄 Found Pages:</h5>
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
                              {page.live ? "✅ Yes" : "❌ No"}
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
                      ⚠️ No FeaturesPages found!
                    </p>
                    <p className="text-yellow-700 text-xs mt-1">
                      The API is working but returned 0 pages.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-lg p-3">
            <h5 className="font-bold text-sm text-blue-900 mb-2">
              🔍 Full Response:
            </h5>
            <pre className="text-xs bg-white p-2 rounded border border-blue-200 overflow-x-auto max-h-48">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </div>
        </div>
      )}

      <div className="mt-4 pt-4 border-t text-xs text-gray-500">
        <p>💡 This component will auto-hide once you close dev tools</p>
      </div>
    </div>
  );
};

export default DebugFeaturesAPI;
