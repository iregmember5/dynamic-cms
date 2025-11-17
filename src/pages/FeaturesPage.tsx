// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import type { FeaturesPageData } from "../types/landing";
// import { fetchFeaturesPageById } from "../types/landing";
// import EasyIcon from "../components/IconRenderer";

// interface FeaturesPageProps {
//   pageId: number;
// }

// const FeaturesPage: React.FC<FeaturesPageProps> = ({ pageId }) => {
//   const { slug } = useParams<{ slug: string }>();
//   const [data, setData] = useState<FeaturesPageData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         // In a real app, you'd fetch by slug, but for now we'll use ID
//         // You may need to modify your API to support slug-based lookup
//         const pageData = await fetchFeaturesPageById(pageId);
//         setData(pageData);

//         // Set meta tags
//         if (pageData.seo_title || pageData.title) {
//           document.title = pageData.seo_title || pageData.title;
//         }

//         setError(null);
//       } catch (err) {
//         console.error("Failed to load features page:", err);
//         setError(
//           err instanceof Error ? err.message : "Failed to load page data"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [slug, pageId]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-solid border-blue-500 border-t-transparent mb-4"></div>
//           <p className="text-gray-600 text-xl font-medium">
//             Loading features...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50">
//         <div className="text-center max-w-md mx-auto px-4">
//           <div className="text-red-500 mb-6">
//             <svg
//               className="w-20 h-20 mx-auto"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-3">
//             Unable to Load Page
//           </h2>
//           <p className="text-gray-600 mb-8 text-lg">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const primaryColor = data.color_theme?.primary_color || "#3B82F6";
//   const accentColor = data.color_theme?.accent_color || "#10B981";
//   const textColor = data.color_theme?.text_color || "#1F2937";
//   const neutralColor = data.color_theme?.neutral_color || "#6B7280";
//   const bgColor =
//     data.color_theme?.background_color === "#6B7280"
//       ? "#FFFFFF"
//       : data.color_theme?.background_color || "#FFFFFF";

//   const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
//   const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

//   const getFullImageUrl = (url: string) => {
//     if (!url) return "";
//     if (url.startsWith("http")) return url;
//     return `https://esign-admin.signmary.com${url}`;
//   };

//   return (
//     <div className="features-page" style={{ backgroundColor: bgColor }}>
//       {/* Apply color theme */}
//       <style>{`
//         :root {
//           --primary-color: ${primaryColor};
//           --secondary-color: ${data.color_theme?.secondary_color || "#1E40AF"};
//           --accent-color: ${accentColor};
//           --neutral-color: ${neutralColor};
//           --background-color: ${bgColor};
//           --text-color: ${textColor};
//         }

//         body {
//           background-color: var(--background-color) !important;
//           color: var(--text-color);
//         }

//         .features-page {
//           background-color: var(--background-color);
//           min-height: 100vh;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }
//       `}</style>

//       {/* Header Section */}
//       <section
//         className="relative py-20 sm:py-32 overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}10 100%)`,
//         }}
//       >
//         {/* Background decoration */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div
//             className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
//             style={{ background: gradientBg }}
//           />
//           <div
//             className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
//             style={{ background: gradientHover }}
//           />
//         </div>

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp"
//               style={{ color: textColor }}
//             >
//               {data.header_title}
//             </h1>
//             <p
//               className="text-xl sm:text-2xl mb-8 animate-fadeInUp animation-delay-200"
//               style={{ color: neutralColor }}
//             >
//               {data.header_subtitle}
//             </p>
//             {data.header_description && (
//               <p
//                 className="text-lg mb-10 max-w-3xl mx-auto animate-fadeInUp"
//                 style={{ color: neutralColor, animationDelay: "0.3s" }}
//               >
//                 {data.header_description}
//               </p>
//             )}
//             {data.header_cta_text && (
//               <a
//                 href={data.header_cta_url}
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group animate-fadeInUp"
//                 style={{
//                   background: gradientBg,
//                   animationDelay: "0.4s",
//                 }}
//               >
//                 <span className="relative z-10">{data.header_cta_text}</span>
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ background: gradientHover }}
//                 />
//               </a>
//             )}
//           </div>

//           {data.header_image && (
//             <div
//               className="mt-16 max-w-5xl mx-auto animate-fadeInUp"
//               style={{ animationDelay: "0.5s" }}
//             >
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src={getFullImageUrl(data.header_image.url)}
//                   alt={data.header_image.title}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Features Overview Section */}
//       {data.features && data.features.length > 0 && (
//         <section
//           className="py-16 sm:py-24"
//           style={{ backgroundColor: bgColor }}
//         >
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16 max-w-3xl mx-auto">
//               {data.features_intro_heading && (
//                 <div className="relative inline-block mb-6">
//                   <h2
//                     className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10"
//                     style={{ color: textColor }}
//                   >
//                     {data.features_intro_heading}
//                   </h2>
//                   <div
//                     className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
//                     style={{
//                       background: gradientBg,
//                       width: "80%",
//                       boxShadow: `0 4px 12px ${primaryColor}40`,
//                     }}
//                   />
//                 </div>
//               )}
//               {data.features_intro_description && (
//                 <p
//                   className="text-lg sm:text-xl leading-relaxed"
//                   style={{ color: neutralColor }}
//                 >
//                   {data.features_intro_description}
//                 </p>
//               )}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {data.features.map((feature, index) => (
//                 <div
//                   key={feature.id}
//                   className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden"
//                   style={{
//                     animationDelay: `${index * 0.1}s`,
//                     border: `2px solid transparent`,
//                     backgroundImage: `linear-gradient(white, white), ${gradientBg}`,
//                     backgroundOrigin: "border-box",
//                     backgroundClip: "padding-box, border-box",
//                   }}
//                 >
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
//                     style={{ background: gradientBg }}
//                   />

//                   {feature.icon && (
//                     <div className="relative mb-6">
//                       <div
//                         className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden"
//                         style={{
//                           background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
//                         }}
//                       >
//                         <EasyIcon
//                           icon={feature.icon}
//                           size={28}
//                           color={primaryColor}
//                           className="relative z-10 transition-all duration-500 group-hover:scale-110"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   <h3
//                     className="text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 relative group-hover:scale-105"
//                     style={{ color: textColor }}
//                   >
//                     {feature.title}
//                   </h3>

//                   <p
//                     className="leading-relaxed relative z-10"
//                     style={{ color: neutralColor }}
//                   >
//                     {feature.description}
//                   </p>

//                   <div className="relative mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
//                     <div
//                       className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 rounded-full"
//                       style={{
//                         background: gradientBg,
//                         boxShadow: `0 0 12px ${primaryColor}60`,
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       {data.features_cta_heading && (
//         <section
//           className="py-20 relative overflow-hidden"
//           style={{
//             background: `linear-gradient(135deg, ${primaryColor}95 0%, ${accentColor}95 100%)`,
//           }}
//         >
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
//                 {data.features_cta_heading}
//               </h2>
//               {data.features_cta_description && (
//                 <p className="text-xl text-white/90 mb-10">
//                   {data.features_cta_description}
//                 </p>
//               )}
//               {data.features_cta_button_text && (
//                 <a
//                   href={data.features_cta_button_url}
//                   className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                   style={{ color: primaryColor }}
//                 >
//                   {data.features_cta_button_text}
//                 </a>
//               )}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default FeaturesPage;

// new
// import React, { useEffect, useState } from "react";
// import type { FeaturesPageData } from "../types/landing";
// import { fetchFeaturesPageById } from "../types/landing";
// import EasyIcon from "../components/IconRenderer";

// interface FeaturesPageProps {
//   pageId?: number;
//   slug?: string;
// }

// const FeaturesPage: React.FC<FeaturesPageProps> = ({ pageId, slug }) => {
//   const [data, setData] = useState<FeaturesPageData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Dummy data for testing (will be replaced when API has data)
//   const getDummyData = (slug?: string): FeaturesPageData => {
//     const dummyPages: { [key: string]: FeaturesPageData } = {
//       "sales-marketing": {
//         id: 1,
//         title: "Sales & Marketing Features",
//         slug: "sales-marketing",
//         url: "/features/sales-marketing",
//         seo_title: "Sales & Marketing Features - Boost Your Revenue",
//         search_description:
//           "Powerful sales and marketing tools to drive growth",
//         live: true,
//         locked: false,
//         first_published_at: null,
//         last_published_at: null,
//         header_title: "Sales & Marketing Features",
//         header_subtitle: "Boost your sales with powerful tools",
//         header_description:
//           "Complete suite of sales and marketing features designed to help you close more deals and grow your business faster.",
//         header_cta_text: "Get Started Free",
//         header_cta_url: "#signup",
//         features_intro_heading: "Everything You Need to Win",
//         features_intro_description:
//           "Our comprehensive sales toolkit helps you manage leads, track opportunities, and close deals faster than ever before.",
//         features: [
//           {
//             id: 1,
//             title: "Lead Management",
//             description:
//               "Capture, organize, and nurture leads with intelligent automation and scoring.",
//             icon: "FiUsers",
//             order: 1,
//           },
//           {
//             id: 2,
//             title: "Email Campaigns",
//             description:
//               "Create beautiful email campaigns with drag-and-drop builder and advanced segmentation.",
//             icon: "FiMail",
//             order: 2,
//           },
//           {
//             id: 3,
//             title: "Sales Pipeline",
//             description:
//               "Visualize your entire sales process and track deals through every stage.",
//             icon: "FiTrendingUp",
//             order: 3,
//           },
//           {
//             id: 4,
//             title: "Analytics Dashboard",
//             description:
//               "Get real-time insights into your sales performance with customizable dashboards.",
//             icon: "FiBarChart2",
//             order: 4,
//           },
//           {
//             id: 5,
//             title: "CRM Integration",
//             description:
//               "Seamlessly integrate with popular CRM systems to streamline your workflow.",
//             icon: "FiLink",
//             order: 5,
//           },
//           {
//             id: 6,
//             title: "Team Collaboration",
//             description:
//               "Work together with your team with shared pipelines and communication tools.",
//             icon: "FiMessageSquare",
//             order: 6,
//           },
//         ],
//         categories_heading: "",
//         categories_description: "",
//         key_features_heading: "",
//         key_features_description: "",
//         comparison_heading: "",
//         comparison_description: "",
//         integrations_heading: "",
//         integrations_description: "",
//         specifications_heading: "",
//         specifications_description: "",
//         use_cases_heading: "",
//         use_cases_description: "",
//         features_cta_heading: "Ready to Boost Your Sales?",
//         features_cta_description:
//           "Join thousands of sales teams who are closing more deals with our platform",
//         features_cta_button_text: "Start Free Trial",
//         features_cta_button_url: "#signup",
//         color_theme: {
//           id: 1,
//           name: "Sales Theme",
//           primary_color: "#3B82F6",
//           secondary_color: "#1E40AF",
//           accent_color: "#10B981",
//           neutral_color: "#6B7280",
//           background_color: "#FFFFFF",
//           text_color: "#1F2937",
//         },
//       },
//       "team-collaboration": {
//         id: 2,
//         title: "Team Collaboration Features",
//         slug: "team-collaboration",
//         url: "/features/team-collaboration",
//         seo_title: "Team Collaboration Features - Work Better Together",
//         search_description:
//           "Powerful collaboration tools for remote and distributed teams",
//         live: true,
//         locked: false,
//         first_published_at: null,
//         last_published_at: null,
//         header_title: "Team Collaboration",
//         header_subtitle: "Work together seamlessly",
//         header_description:
//           "Collaborate with your team in real-time, no matter where they are. Share ideas, track progress, and achieve more together.",
//         header_cta_text: "Start Collaborating",
//         header_cta_url: "#signup",
//         features_intro_heading: "Built for Modern Teams",
//         features_intro_description:
//           "Everything your team needs to communicate, collaborate, and succeed in today's remote-first world.",
//         features: [
//           {
//             id: 1,
//             title: "Real-time Chat",
//             description:
//               "Instant messaging with channels, threads, and direct messages for seamless communication.",
//             icon: "FiMessageCircle",
//             order: 1,
//           },
//           {
//             id: 2,
//             title: "Video Conferencing",
//             description:
//               "HD video calls with screen sharing, recording, and up to 100 participants.",
//             icon: "FiVideo",
//             order: 2,
//           },
//           {
//             id: 3,
//             title: "Task Management",
//             description:
//               "Assign tasks, set deadlines, and track progress with kanban boards and lists.",
//             icon: "FiCheckSquare",
//             order: 3,
//           },
//           {
//             id: 4,
//             title: "File Sharing",
//             description:
//               "Share and collaborate on documents with version control and real-time editing.",
//             icon: "FiFile",
//             order: 4,
//           },
//           {
//             id: 5,
//             title: "Calendar Integration",
//             description:
//               "Sync meetings and deadlines across all your calendars automatically.",
//             icon: "FiCalendar",
//             order: 5,
//           },
//           {
//             id: 6,
//             title: "Team Analytics",
//             description:
//               "Track team productivity and collaboration metrics with detailed reports.",
//             icon: "FiActivity",
//             order: 6,
//           },
//         ],
//         categories_heading: "",
//         categories_description: "",
//         key_features_heading: "",
//         key_features_description: "",
//         comparison_heading: "",
//         comparison_description: "",
//         integrations_heading: "",
//         integrations_description: "",
//         specifications_heading: "",
//         specifications_description: "",
//         use_cases_heading: "",
//         use_cases_description: "",
//         features_cta_heading: "Ready to Transform Your Team?",
//         features_cta_description:
//           "Join over 10,000 teams using our platform to work better together",
//         features_cta_button_text: "Get Started Free",
//         features_cta_button_url: "#signup",
//         color_theme: {
//           id: 2,
//           name: "Collaboration Theme",
//           primary_color: "#8B5CF6",
//           secondary_color: "#6D28D9",
//           accent_color: "#EC4899",
//           neutral_color: "#6B7280",
//           background_color: "#FFFFFF",
//           text_color: "#1F2937",
//         },
//       },
//       "analytics-reporting": {
//         id: 3,
//         title: "Analytics & Reporting",
//         slug: "analytics-reporting",
//         url: "/features/analytics-reporting",
//         seo_title: "Analytics & Reporting - Data-Driven Decisions",
//         search_description:
//           "Powerful analytics and reporting to understand your business",
//         live: true,
//         locked: false,
//         first_published_at: null,
//         last_published_at: null,
//         header_title: "Analytics & Reporting",
//         header_subtitle: "Insights that drive growth",
//         header_description:
//           "Transform your data into actionable insights with powerful analytics and beautiful, customizable reports.",
//         header_cta_text: "View Demo",
//         header_cta_url: "#demo",
//         features_intro_heading: "Make Smarter Decisions",
//         features_intro_description:
//           "Track, measure, and optimize every aspect of your business with comprehensive analytics and reporting tools.",
//         features: [
//           {
//             id: 1,
//             title: "Custom Dashboards",
//             description:
//               "Build personalized dashboards with drag-and-drop widgets and real-time data.",
//             icon: "FiLayout",
//             order: 1,
//           },
//           {
//             id: 2,
//             title: "Advanced Reports",
//             description:
//               "Create detailed reports with filters, segments, and multiple data sources.",
//             icon: "FiPieChart",
//             order: 2,
//           },
//           {
//             id: 3,
//             title: "Data Visualization",
//             description:
//               "Beautiful charts and graphs that make complex data easy to understand.",
//             icon: "FiBarChart",
//             order: 3,
//           },
//           {
//             id: 4,
//             title: "Predictive Analytics",
//             description:
//               "AI-powered forecasting and trend analysis to predict future outcomes.",
//             icon: "FiZap",
//             order: 4,
//           },
//           {
//             id: 5,
//             title: "Export & Share",
//             description:
//               "Export reports in multiple formats and share with stakeholders instantly.",
//             icon: "FiShare2",
//             order: 5,
//           },
//           {
//             id: 6,
//             title: "Automated Insights",
//             description:
//               "Get automatic alerts and insights about important changes in your data.",
//             icon: "FiBell",
//             order: 6,
//           },
//         ],
//         categories_heading: "",
//         categories_description: "",
//         key_features_heading: "",
//         key_features_description: "",
//         comparison_heading: "",
//         comparison_description: "",
//         integrations_heading: "",
//         integrations_description: "",
//         specifications_heading: "",
//         specifications_description: "",
//         use_cases_heading: "",
//         use_cases_description: "",
//         features_cta_heading: "Ready for Better Insights?",
//         features_cta_description:
//           "Start making data-driven decisions that grow your business",
//         features_cta_button_text: "Try Analytics Free",
//         features_cta_button_url: "#signup",
//         color_theme: {
//           id: 3,
//           name: "Analytics Theme",
//           primary_color: "#F59E0B",
//           secondary_color: "#D97706",
//           accent_color: "#10B981",
//           neutral_color: "#6B7280",
//           background_color: "#FFFFFF",
//           text_color: "#1F2937",
//         },
//       },
//     };

//     return slug && dummyPages[slug]
//       ? dummyPages[slug]
//       : dummyPages["sales-marketing"]; // Default fallback
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);

//         // Try to fetch from API first
//         if (pageId) {
//           try {
//             const pageData = await fetchFeaturesPageById(pageId);
//             setData(pageData);

//             // Set meta tags
//             if (pageData.seo_title || pageData.title) {
//               document.title = pageData.seo_title || pageData.title;
//             }

//             setError(null);
//             return;
//           } catch (apiError) {
//             console.log("API data not available, using dummy data");
//           }
//         }

//         // If API fails or no pageId, use dummy data
//         const dummyData = getDummyData(slug);
//         setData(dummyData);

//         // Set meta tags
//         if (dummyData.seo_title || dummyData.title) {
//           document.title = dummyData.seo_title || dummyData.title;
//         }

//         setError(null);
//       } catch (err) {
//         console.error("Failed to load features page:", err);
//         setError(
//           err instanceof Error ? err.message : "Failed to load page data"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [pageId, slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-solid border-blue-500 border-t-transparent mb-4"></div>
//           <p className="text-gray-600 text-xl font-medium">
//             Loading features...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50">
//         <div className="text-center max-w-md mx-auto px-4">
//           <div className="text-red-500 mb-6">
//             <svg
//               className="w-20 h-20 mx-auto"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-3">
//             Unable to Load Page
//           </h2>
//           <p className="text-gray-600 mb-8 text-lg">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const primaryColor = data.color_theme?.primary_color || "#3B82F6";
//   const accentColor = data.color_theme?.accent_color || "#10B981";
//   const textColor = data.color_theme?.text_color || "#1F2937";
//   const neutralColor = data.color_theme?.neutral_color || "#6B7280";
//   const bgColor =
//     data.color_theme?.background_color === "#6B7280"
//       ? "#FFFFFF"
//       : data.color_theme?.background_color || "#FFFFFF";

//   const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
//   const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

//   const getFullImageUrl = (url: string) => {
//     if (!url) return "";
//     if (url.startsWith("http")) return url;
//     return `https://esign-admin.signmary.com${url}`;
//   };

//   return (
//     <div className="features-page" style={{ backgroundColor: bgColor }}>
//       {/* Apply color theme */}
//       <style>{`
//         :root {
//           --primary-color: ${primaryColor};
//           --secondary-color: ${data.color_theme?.secondary_color || "#1E40AF"};
//           --accent-color: ${accentColor};
//           --neutral-color: ${neutralColor};
//           --background-color: ${bgColor};
//           --text-color: ${textColor};
//         }

//         body {
//           background-color: var(--background-color) !important;
//           color: var(--text-color);
//         }

//         .features-page {
//           background-color: var(--background-color);
//           min-height: 100vh;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(20px, -20px);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Header Section */}
//       <section
//         className="relative py-20 sm:py-32 overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}10 100%)`,
//         }}
//       >
//         {/* Background decoration */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div
//             className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
//             style={{ background: gradientBg }}
//           />
//           <div
//             className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
//             style={{ background: gradientHover, animationDelay: "3s" }}
//           />
//         </div>

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp"
//               style={{ color: textColor }}
//             >
//               {data.header_title}
//             </h1>
//             <p
//               className="text-xl sm:text-2xl mb-8 animate-fadeInUp animation-delay-200"
//               style={{ color: neutralColor }}
//             >
//               {data.header_subtitle}
//             </p>
//             {data.header_description && (
//               <p
//                 className="text-lg mb-10 max-w-3xl mx-auto animate-fadeInUp"
//                 style={{ color: neutralColor, animationDelay: "0.3s" }}
//               >
//                 {data.header_description}
//               </p>
//             )}
//             {data.header_cta_text && (
//               <a
//                 href={data.header_cta_url}
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group animate-fadeInUp"
//                 style={{
//                   background: gradientBg,
//                   animationDelay: "0.4s",
//                 }}
//               >
//                 <span className="relative z-10">{data.header_cta_text}</span>
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ background: gradientHover }}
//                 />
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//               </a>
//             )}
//           </div>

//           {data.header_image && (
//             <div
//               className="mt-16 max-w-5xl mx-auto animate-fadeInUp"
//               style={{ animationDelay: "0.5s" }}
//             >
//               <div
//                 className="relative rounded-2xl overflow-hidden shadow-2xl"
//                 style={{
//                   boxShadow: `0 20px 60px ${primaryColor}30`,
//                 }}
//               >
//                 <img
//                   src={getFullImageUrl(data.header_image.url)}
//                   alt={data.header_image.title}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Features Overview Section */}
//       {data.features && data.features.length > 0 && (
//         <section
//           className="py-16 sm:py-24 relative"
//           style={{ backgroundColor: bgColor }}
//         >
//           {/* Background elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div
//               className="absolute top-1/4 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
//               style={{ background: gradientBg }}
//             />
//             <div
//               className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
//               style={{ background: gradientHover }}
//             />
//           </div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="text-center mb-16 max-w-3xl mx-auto">
//               {data.features_intro_heading && (
//                 <div className="relative inline-block mb-6">
//                   <h2
//                     className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10"
//                     style={{ color: textColor }}
//                   >
//                     {data.features_intro_heading}
//                   </h2>
//                   <div
//                     className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
//                     style={{
//                       background: gradientBg,
//                       width: "80%",
//                       boxShadow: `0 4px 12px ${primaryColor}40`,
//                     }}
//                   />
//                 </div>
//               )}
//               {data.features_intro_description && (
//                 <p
//                   className="text-lg sm:text-xl leading-relaxed"
//                   style={{ color: neutralColor }}
//                 >
//                   {data.features_intro_description}
//                 </p>
//               )}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {data.features.map((feature, index) => (
//                 <div
//                   key={feature.id}
//                   className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden"
//                   style={{
//                     animationDelay: `${index * 0.1}s`,
//                     border: `2px solid transparent`,
//                     backgroundImage: `linear-gradient(white, white), ${gradientBg}`,
//                     backgroundOrigin: "border-box",
//                     backgroundClip: "padding-box, border-box",
//                   }}
//                 >
//                   {/* Gradient overlay */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
//                     style={{ background: gradientBg }}
//                   />

//                   {/* Corner accents */}
//                   <div
//                     className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-12 transition-all duration-500"
//                     style={{ background: gradientBg }}
//                   />
//                   <div
//                     className="absolute top-0 left-0 w-0.5 h-0 group-hover:h-12 transition-all duration-500"
//                     style={{ background: gradientBg }}
//                   />

//                   {feature.icon && (
//                     <div className="relative mb-6">
//                       <div
//                         className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden"
//                         style={{
//                           background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
//                         }}
//                       >
//                         <EasyIcon
//                           icon={feature.icon}
//                           size={28}
//                           color={primaryColor}
//                           className="relative z-10 transition-all duration-500 group-hover:scale-110"
//                         />

//                         {/* Shine effect */}
//                         <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//                       </div>

//                       {/* Pulsing ring */}
//                       <div
//                         className="absolute inset-0 w-16 h-16 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"
//                         style={{
//                           background: `radial-gradient(circle, ${primaryColor}20 0%, transparent 70%)`,
//                         }}
//                       />
//                     </div>
//                   )}

//                   <h3
//                     className="text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 relative"
//                     style={{ color: textColor }}
//                   >
//                     {feature.title}
//                     {/* Gradient text on hover */}
//                     <span
//                       className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                       style={{
//                         background: gradientBg,
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}
//                     >
//                       {feature.title}
//                     </span>
//                   </h3>

//                   <p
//                     className="leading-relaxed relative z-10"
//                     style={{ color: neutralColor }}
//                   >
//                     {feature.description}
//                   </p>

//                   {/* Progress bar */}
//                   <div className="relative mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
//                     <div
//                       className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 rounded-full"
//                       style={{
//                         background: gradientBg,
//                         boxShadow: `0 0 12px ${primaryColor}60`,
//                       }}
//                     />
//                   </div>

//                   {/* Number badge */}
//                   <div
//                     className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
//                     style={{
//                       background: gradientBg,
//                       boxShadow: `0 4px 12px ${primaryColor}40`,
//                     }}
//                   >
//                     {index + 1}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       {data.features_cta_heading && (
//         <section
//           className="py-20 relative overflow-hidden"
//           style={{
//             background: `linear-gradient(135deg, ${primaryColor}95 0%, ${accentColor}95 100%)`,
//           }}
//         >
//           {/* Animated background shapes */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
//             <div
//               className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
//               style={{ animationDelay: "2s" }}
//             />
//           </div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeInUp">
//                 {data.features_cta_heading}
//               </h2>
//               {data.features_cta_description && (
//                 <p className="text-xl text-white/90 mb-10 animate-fadeInUp animation-delay-200">
//                   {data.features_cta_description}
//                 </p>
//               )}
//               {data.features_cta_button_text && (
//                 <a
//                   href={data.features_cta_button_url}
//                   className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
//                   style={{ color: primaryColor }}
//                 >
//                   <span className="relative z-10">
//                     {data.features_cta_button_text}
//                   </span>
//                   {/* Gradient on hover */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//                     style={{ background: gradientBg }}
//                   />
//                 </a>
//               )}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default FeaturesPage;

// import React, { useEffect, useState } from "react";
// import type { FeaturesPageData } from "../types/landing";
// import { fetchAllFeaturesPages } from "../types/landing";
// import EasyIcon from "../components/IconRenderer";

// interface FeaturesPageProps {
//   pageId?: number;
//   slug?: string;
// }

// const FeaturesPage: React.FC<FeaturesPageProps> = ({ pageId, slug }) => {
//   const [data, setData] = useState<FeaturesPageData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Dummy data for testing (will be replaced when API has data)
//   const getDummyData = (slug?: string): FeaturesPageData => {
//     const dummyPages: { [key: string]: FeaturesPageData } = {
//       "sales-marketing": {
//         id: 1,
//         title: "Sales & Marketing Features",
//         slug: "sales-marketing",
//         url: "/features/sales-marketing",
//         seo_title: "Sales & Marketing Features - Boost Your Revenue",
//         search_description:
//           "Powerful sales and marketing tools to drive growth",
//         live: true,
//         locked: false,
//         first_published_at: null,
//         last_published_at: null,
//         header_title: "Sales & Marketing Features",
//         header_subtitle: "Boost your sales with powerful tools",
//         header_description:
//           "Complete suite of sales and marketing features designed to help you close more deals and grow your business faster.",
//         header_cta_text: "Get Started Free",
//         header_cta_url: "#signup",
//         features_intro_heading: "Everything You Need to Win",
//         features_intro_description:
//           "Our comprehensive sales toolkit helps you manage leads, track opportunities, and close deals faster than ever before.",
//         features: [
//           {
//             id: 1,
//             title: "Lead Management",
//             description:
//               "Capture, organize, and nurture leads with intelligent automation and scoring.",
//             icon: "FiUsers",
//             order: 1,
//           },
//           {
//             id: 2,
//             title: "Email Campaigns",
//             description:
//               "Create beautiful email campaigns with drag-and-drop builder and advanced segmentation.",
//             icon: "FiMail",
//             order: 2,
//           },
//           {
//             id: 3,
//             title: "Sales Pipeline",
//             description:
//               "Visualize your entire sales process and track deals through every stage.",
//             icon: "FiTrendingUp",
//             order: 3,
//           },
//           {
//             id: 4,
//             title: "Analytics Dashboard",
//             description:
//               "Get real-time insights into your sales performance with customizable dashboards.",
//             icon: "FiBarChart2",
//             order: 4,
//           },
//           {
//             id: 5,
//             title: "CRM Integration",
//             description:
//               "Seamlessly integrate with popular CRM systems to streamline your workflow.",
//             icon: "FiLink",
//             order: 5,
//           },
//           {
//             id: 6,
//             title: "Team Collaboration",
//             description:
//               "Work together with your team with shared pipelines and communication tools.",
//             icon: "FiMessageSquare",
//             order: 6,
//           },
//         ],
//         categories_heading: "",
//         categories_description: "",
//         key_features_heading: "",
//         key_features_description: "",
//         comparison_heading: "",
//         comparison_description: "",
//         integrations_heading: "",
//         integrations_description: "",
//         specifications_heading: "",
//         specifications_description: "",
//         use_cases_heading: "",
//         use_cases_description: "",
//         features_cta_heading: "Ready to Boost Your Sales?",
//         features_cta_description:
//           "Join thousands of sales teams who are closing more deals with our platform",
//         features_cta_button_text: "Start Free Trial",
//         features_cta_button_url: "#signup",
//         color_theme: {
//           id: 1,
//           name: "Sales Theme",
//           primary_color: "#3B82F6",
//           secondary_color: "#1E40AF",
//           accent_color: "#10B981",
//           neutral_color: "#6B7280",
//           background_color: "#FFFFFF",
//           text_color: "#1F2937",
//         },
//       },
//       "team-collaboration": {
//         id: 2,
//         title: "Team Collaboration Features",
//         slug: "team-collaboration",
//         url: "/features/team-collaboration",
//         seo_title: "Team Collaboration Features - Work Better Together",
//         search_description:
//           "Powerful collaboration tools for remote and distributed teams",
//         live: true,
//         locked: false,
//         first_published_at: null,
//         last_published_at: null,
//         header_title: "Team Collaboration",
//         header_subtitle: "Work together seamlessly",
//         header_description:
//           "Collaborate with your team in real-time, no matter where they are. Share ideas, track progress, and achieve more together.",
//         header_cta_text: "Start Collaborating",
//         header_cta_url: "#signup",
//         features_intro_heading: "Built for Modern Teams",
//         features_intro_description:
//           "Everything your team needs to communicate, collaborate, and succeed in today's remote-first world.",
//         features: [
//           {
//             id: 1,
//             title: "Real-time Chat",
//             description:
//               "Instant messaging with channels, threads, and direct messages for seamless communication.",
//             icon: "FiMessageCircle",
//             order: 1,
//           },
//           {
//             id: 2,
//             title: "Video Conferencing",
//             description:
//               "HD video calls with screen sharing, recording, and up to 100 participants.",
//             icon: "FiVideo",
//             order: 2,
//           },
//           {
//             id: 3,
//             title: "Task Management",
//             description:
//               "Assign tasks, set deadlines, and track progress with kanban boards and lists.",
//             icon: "FiCheckSquare",
//             order: 3,
//           },
//           {
//             id: 4,
//             title: "File Sharing",
//             description:
//               "Share and collaborate on documents with version control and real-time editing.",
//             icon: "FiFile",
//             order: 4,
//           },
//           {
//             id: 5,
//             title: "Calendar Integration",
//             description:
//               "Sync meetings and deadlines across all your calendars automatically.",
//             icon: "FiCalendar",
//             order: 5,
//           },
//           {
//             id: 6,
//             title: "Team Analytics",
//             description:
//               "Track team productivity and collaboration metrics with detailed reports.",
//             icon: "FiActivity",
//             order: 6,
//           },
//         ],
//         categories_heading: "",
//         categories_description: "",
//         key_features_heading: "",
//         key_features_description: "",
//         comparison_heading: "",
//         comparison_description: "",
//         integrations_heading: "",
//         integrations_description: "",
//         specifications_heading: "",
//         specifications_description: "",
//         use_cases_heading: "",
//         use_cases_description: "",
//         features_cta_heading: "Ready to Transform Your Team?",
//         features_cta_description:
//           "Join over 10,000 teams using our platform to work better together",
//         features_cta_button_text: "Get Started Free",
//         features_cta_button_url: "#signup",
//         color_theme: {
//           id: 2,
//           name: "Collaboration Theme",
//           primary_color: "#8B5CF6",
//           secondary_color: "#6D28D9",
//           accent_color: "#EC4899",
//           neutral_color: "#6B7280",
//           background_color: "#FFFFFF",
//           text_color: "#1F2937",
//         },
//       },
//       "analytics-reporting": {
//         id: 3,
//         title: "Analytics & Reporting",
//         slug: "analytics-reporting",
//         url: "/features/analytics-reporting",
//         seo_title: "Analytics & Reporting - Data-Driven Decisions",
//         search_description:
//           "Powerful analytics and reporting to understand your business",
//         live: true,
//         locked: false,
//         first_published_at: null,
//         last_published_at: null,
//         header_title: "Analytics & Reporting",
//         header_subtitle: "Insights that drive growth",
//         header_description:
//           "Transform your data into actionable insights with powerful analytics and beautiful, customizable reports.",
//         header_cta_text: "View Demo",
//         header_cta_url: "#demo",
//         features_intro_heading: "Make Smarter Decisions",
//         features_intro_description:
//           "Track, measure, and optimize every aspect of your business with comprehensive analytics and reporting tools.",
//         features: [
//           {
//             id: 1,
//             title: "Custom Dashboards",
//             description:
//               "Build personalized dashboards with drag-and-drop widgets and real-time data.",
//             icon: "FiLayout",
//             order: 1,
//           },
//           {
//             id: 2,
//             title: "Advanced Reports",
//             description:
//               "Create detailed reports with filters, segments, and multiple data sources.",
//             icon: "FiPieChart",
//             order: 2,
//           },
//           {
//             id: 3,
//             title: "Data Visualization",
//             description:
//               "Beautiful charts and graphs that make complex data easy to understand.",
//             icon: "FiBarChart",
//             order: 3,
//           },
//           {
//             id: 4,
//             title: "Predictive Analytics",
//             description:
//               "AI-powered forecasting and trend analysis to predict future outcomes.",
//             icon: "FiZap",
//             order: 4,
//           },
//           {
//             id: 5,
//             title: "Export & Share",
//             description:
//               "Export reports in multiple formats and share with stakeholders instantly.",
//             icon: "FiShare2",
//             order: 5,
//           },
//           {
//             id: 6,
//             title: "Automated Insights",
//             description:
//               "Get automatic alerts and insights about important changes in your data.",
//             icon: "FiBell",
//             order: 6,
//           },
//         ],
//         categories_heading: "",
//         categories_description: "",
//         key_features_heading: "",
//         key_features_description: "",
//         comparison_heading: "",
//         comparison_description: "",
//         integrations_heading: "",
//         integrations_description: "",
//         specifications_heading: "",
//         specifications_description: "",
//         use_cases_heading: "",
//         use_cases_description: "",
//         features_cta_heading: "Ready for Better Insights?",
//         features_cta_description:
//           "Start making data-driven decisions that grow your business",
//         features_cta_button_text: "Try Analytics Free",
//         features_cta_button_url: "#signup",
//         color_theme: {
//           id: 3,
//           name: "Analytics Theme",
//           primary_color: "#F59E0B",
//           secondary_color: "#D97706",
//           accent_color: "#10B981",
//           neutral_color: "#6B7280",
//           background_color: "#FFFFFF",
//           text_color: "#1F2937",
//         },
//       },
//     };

//     return slug && dummyPages[slug]
//       ? dummyPages[slug]
//       : dummyPages["sales-marketing"]; // Default fallback
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);

//         // Fetch all features pages from API
//         const allPages = await fetchAllFeaturesPages();

//         console.log("🔍 All Features Pages:", allPages);
//         console.log("🔍 Looking for slug:", slug);

//         // Find the page matching the current slug
//         const matchingPage = allPages.find(
//           (page: FeaturesPageData) => page.slug === slug
//         );

//         if (matchingPage) {
//           console.log("✅ Found matching page:", matchingPage.title);
//           setData(matchingPage);

//           // Set meta tags
//           if (matchingPage.seo_title || matchingPage.title) {
//             document.title = matchingPage.seo_title || matchingPage.title;
//           }

//           setError(null);
//         } else {
//           // Fallback to dummy data if no match found
//           console.log("⚠️ No matching page found, using dummy data");
//           const dummyData = getDummyData(slug);
//           setData(dummyData);

//           if (dummyData.seo_title || dummyData.title) {
//             document.title = dummyData.seo_title || dummyData.title;
//           }

//           setError(null);
//         }
//       } catch (err) {
//         console.error("Failed to load features page:", err);

//         // If API fails completely, use dummy data
//         console.log("❌ API failed, using dummy data");
//         const dummyData = getDummyData(slug);
//         setData(dummyData);

//         if (dummyData.seo_title || dummyData.title) {
//           document.title = dummyData.seo_title || dummyData.title;
//         }

//         setError(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [pageId, slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-solid border-blue-500 border-t-transparent mb-4"></div>
//           <p className="text-gray-600 text-xl font-medium">
//             Loading features...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50">
//         <div className="text-center max-w-md mx-auto px-4">
//           <div className="text-red-500 mb-6">
//             <svg
//               className="w-20 h-20 mx-auto"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-3">
//             Unable to Load Page
//           </h2>
//           <p className="text-gray-600 mb-8 text-lg">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const primaryColor = data.color_theme?.primary_color || "#3B82F6";
//   const accentColor = data.color_theme?.accent_color || "#10B981";
//   const textColor = data.color_theme?.text_color || "#1F2937";
//   const neutralColor = data.color_theme?.neutral_color || "#6B7280";
//   const bgColor =
//     data.color_theme?.background_color === "#6B7280"
//       ? "#FFFFFF"
//       : data.color_theme?.background_color || "#FFFFFF";

//   const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
//   const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

//   const getFullImageUrl = (url: string) => {
//     if (!url) return "";
//     if (url.startsWith("http")) return url;
//     return `https://esign-admin.signmary.com${url}`;
//   };

//   return (
//     <div className="features-page" style={{ backgroundColor: bgColor }}>
//       {/* Apply color theme */}
//       <style>{`
//         :root {
//           --primary-color: ${primaryColor};
//           --secondary-color: ${data.color_theme?.secondary_color || "#1E40AF"};
//           --accent-color: ${accentColor};
//           --neutral-color: ${neutralColor};
//           --background-color: ${bgColor};
//           --text-color: ${textColor};
//         }

//         body {
//           background-color: var(--background-color) !important;
//           color: var(--text-color);
//         }

//         .features-page {
//           background-color: var(--background-color);
//           min-height: 100vh;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(20px, -20px);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Header Section */}
//       <section
//         className="relative py-20 sm:py-32 overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}10 100%)`,
//         }}
//       >
//         {/* Background decoration */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div
//             className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
//             style={{ background: gradientBg }}
//           />
//           <div
//             className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
//             style={{ background: gradientHover, animationDelay: "3s" }}
//           />
//         </div>

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp"
//               style={{ color: textColor }}
//             >
//               {data.header_title}
//             </h1>
//             <p
//               className="text-xl sm:text-2xl mb-8 animate-fadeInUp animation-delay-200"
//               style={{ color: neutralColor }}
//             >
//               {data.header_subtitle}
//             </p>
//             {data.header_description && (
//               <p
//                 className="text-lg mb-10 max-w-3xl mx-auto animate-fadeInUp"
//                 style={{ color: neutralColor, animationDelay: "0.3s" }}
//               >
//                 {data.header_description}
//               </p>
//             )}
//             {data.header_cta_text && (
//               <a
//                 href={data.header_cta_url}
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group animate-fadeInUp"
//                 style={{
//                   background: gradientBg,
//                   animationDelay: "0.4s",
//                 }}
//               >
//                 <span className="relative z-10">{data.header_cta_text}</span>
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ background: gradientHover }}
//                 />
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//               </a>
//             )}
//           </div>

//           {data.header_image && (
//             <div
//               className="mt-16 max-w-5xl mx-auto animate-fadeInUp"
//               style={{ animationDelay: "0.5s" }}
//             >
//               <div
//                 className="relative rounded-2xl overflow-hidden shadow-2xl"
//                 style={{
//                   boxShadow: `0 20px 60px ${primaryColor}30`,
//                 }}
//               >
//                 <img
//                   src={getFullImageUrl(data.header_image.url)}
//                   alt={data.header_image.title}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Features Overview Section */}
//       {data.features && data.features.length > 0 && (
//         <section
//           className="py-16 sm:py-24 relative"
//           style={{ backgroundColor: bgColor }}
//         >
//           {/* Background elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div
//               className="absolute top-1/4 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
//               style={{ background: gradientBg }}
//             />
//             <div
//               className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
//               style={{ background: gradientHover }}
//             />
//           </div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="text-center mb-16 max-w-3xl mx-auto">
//               {data.features_intro_heading && (
//                 <div className="relative inline-block mb-6">
//                   <h2
//                     className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10"
//                     style={{ color: textColor }}
//                   >
//                     {data.features_intro_heading}
//                   </h2>
//                   <div
//                     className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
//                     style={{
//                       background: gradientBg,
//                       width: "80%",
//                       boxShadow: `0 4px 12px ${primaryColor}40`,
//                     }}
//                   />
//                 </div>
//               )}
//               {data.features_intro_description && (
//                 <p
//                   className="text-lg sm:text-xl leading-relaxed"
//                   style={{ color: neutralColor }}
//                 >
//                   {data.features_intro_description}
//                 </p>
//               )}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {data.features.map((feature, index) => (
//                 <div
//                   key={feature.id}
//                   className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden"
//                   style={{
//                     animationDelay: `${index * 0.1}s`,
//                     border: `2px solid transparent`,
//                     backgroundImage: `linear-gradient(white, white), ${gradientBg}`,
//                     backgroundOrigin: "border-box",
//                     backgroundClip: "padding-box, border-box",
//                   }}
//                 >
//                   {/* Gradient overlay */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
//                     style={{ background: gradientBg }}
//                   />

//                   {/* Corner accents */}
//                   <div
//                     className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-12 transition-all duration-500"
//                     style={{ background: gradientBg }}
//                   />
//                   <div
//                     className="absolute top-0 left-0 w-0.5 h-0 group-hover:h-12 transition-all duration-500"
//                     style={{ background: gradientBg }}
//                   />

//                   {feature.icon && (
//                     <div className="relative mb-6">
//                       <div
//                         className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden"
//                         style={{
//                           background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
//                         }}
//                       >
//                         <EasyIcon
//                           icon={feature.icon}
//                           size={28}
//                           color={primaryColor}
//                           className="relative z-10 transition-all duration-500 group-hover:scale-110"
//                         />

//                         {/* Shine effect */}
//                         <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//                       </div>

//                       {/* Pulsing ring */}
//                       <div
//                         className="absolute inset-0 w-16 h-16 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"
//                         style={{
//                           background: `radial-gradient(circle, ${primaryColor}20 0%, transparent 70%)`,
//                         }}
//                       />
//                     </div>
//                   )}

//                   <h3
//                     className="text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 relative"
//                     style={{ color: textColor }}
//                   >
//                     {feature.title}
//                     {/* Gradient text on hover */}
//                     <span
//                       className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                       style={{
//                         background: gradientBg,
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}
//                     >
//                       {feature.title}
//                     </span>
//                   </h3>

//                   <p
//                     className="leading-relaxed relative z-10"
//                     style={{ color: neutralColor }}
//                   >
//                     {feature.description}
//                   </p>

//                   {/* Progress bar */}
//                   <div className="relative mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
//                     <div
//                       className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 rounded-full"
//                       style={{
//                         background: gradientBg,
//                         boxShadow: `0 0 12px ${primaryColor}60`,
//                       }}
//                     />
//                   </div>

//                   {/* Number badge */}
//                   <div
//                     className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
//                     style={{
//                       background: gradientBg,
//                       boxShadow: `0 4px 12px ${primaryColor}40`,
//                     }}
//                   >
//                     {index + 1}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       {data.features_cta_heading && (
//         <section
//           className="py-20 relative overflow-hidden"
//           style={{
//             background: `linear-gradient(135deg, ${primaryColor}95 0%, ${accentColor}95 100%)`,
//           }}
//         >
//           {/* Animated background shapes */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
//             <div
//               className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
//               style={{ animationDelay: "2s" }}
//             />
//           </div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeInUp">
//                 {data.features_cta_heading}
//               </h2>
//               {data.features_cta_description && (
//                 <p className="text-xl text-white/90 mb-10 animate-fadeInUp animation-delay-200">
//                   {data.features_cta_description}
//                 </p>
//               )}
//               {data.features_cta_button_text && (
//                 <a
//                   href={data.features_cta_button_url}
//                   className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
//                   style={{ color: primaryColor }}
//                 >
//                   <span className="relative z-10">
//                     {data.features_cta_button_text}
//                   </span>
//                   {/* Gradient on hover */}
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//                     style={{ background: gradientBg }}
//                   />
//                 </a>
//               )}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default FeaturesPage;

import React, { useEffect, useState } from "react";
import EasyIcon from "../components/IconRenderer";

// ===== TYPE DEFINITIONS =====
interface ImageData {
  id: number;
  title: string;
  url: string;
  width?: number;
  height?: number;
}

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

interface Benefit {
  id: number;
  title: string;
  description: string;
  stats: string;
  icon: string;
  order: number;
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  photo: ImageData | null;
  order: number;
}

interface ColorTheme {
  id: number;
  name: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  neutral_color: string;
  background_color: string;
  text_color: string;
}

interface CardContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  card_style: "basic" | "feature" | "testimonial" | "pricing" | "team";
  card_image?: ImageData;
  background_image?: ImageData;
  button_text: string;
  button_url: string;
  price: string;
  price_period: string;
  features: string[];
  rating: number;
  order: number;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
  order: number;
}

interface HowItWorksStep {
  step_number: string;
  title: string;
  description: string;
  icon?: string;
  image?: ImageData;
}

interface DynamicContentBlock {
  type: string;
  value: any;
  id: string;
}

interface FeaturesPageData {
  id: number;
  title: string;
  slug: string;
  url: string;
  seo_title: string;
  search_description: string;
  live: boolean;
  locked: boolean;
  first_published_at: string | null;
  last_published_at: string | null;

  // Header Section
  header_title: string;
  header_subtitle: string;
  header_description: string;
  header_image?: ImageData;
  header_cta_text: string;
  header_cta_url: string;

  // Problem/Solution Section
  problem_solution_heading?: string;
  problem_description?: string;
  solution_description?: string;
  problem_solution_image?: ImageData;

  // How It Works Section
  how_it_works_heading?: string;
  how_it_works_description?: string;
  how_it_works_steps?: HowItWorksStep[];

  // Benefits Section
  benefits_heading?: string;
  benefits_description?: string;
  benefits_style?: "cards" | "list" | "mixed";
  benefits?: Benefit[];

  // Card Sections
  card_sections_heading?: string;
  card_sections_description?: string;
  card_sections?: CardContent[];

  // FAQ Section
  faq_section_heading?: string;
  faq_section_description?: string;
  faqs?: FAQItem[];

  // Pricing Section
  pricing_heading?: string;
  pricing_description?: string;
  pricing_widget_code?: string;
  show_pricing_cta?: boolean;
  pricing_cta_text?: string;
  pricing_cta_url?: string;

  // Testimonials Section
  testimonials_heading?: string;
  testimonials_description?: string;
  testimonials?: Testimonial[];

  // Primary CTA Section
  primary_cta_heading?: string;
  primary_cta_description?: string;
  primary_cta_button_text?: string;
  primary_cta_button_url?: string;
  primary_cta_background_image?: ImageData;

  // Secondary CTA Section
  secondary_cta_heading?: string;
  secondary_cta_description?: string;
  secondary_cta_button_text?: string;
  secondary_cta_button_url?: string;

  // Features Overview
  features_intro_heading?: string;
  features_intro_description?: string;
  features?: Feature[];

  // Feature Categories
  categories_heading?: string;
  categories_description?: string;

  // Technical Specifications
  specifications_heading?: string;
  specifications_description?: string;

  // Dynamic Content
  dynamic_content?: DynamicContentBlock[];

  // Theme
  color_theme?: ColorTheme;

  // Meta
  meta_title?: string;
  meta_description?: string;
  og_image?: ImageData;

  // Frontend Configuration
  allowed_frontends?: Array<{
    id: number;
    name: string;
    url: string;
    is_active: boolean;
  }>;
}

// ===== API SERVICE =====
const isDevelopment = import.meta.env.DEV;
const frontendUrl = isDevelopment
  ? "http://localhost:5173"
  : "https://dynamic-cms-zeta.vercel.app";

const baseApiUrl = isDevelopment
  ? "/blogs/api/v2"
  : "https://esign-admin.signmary.com/blogs/api/v2";

const fetchAllFeaturesPages = async (): Promise<FeaturesPageData[]> => {
  try {
    const apiUrl = `${baseApiUrl}/features-pages/`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Frontend-Url": frontendUrl,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch features pages: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data || !data.items) {
      return [];
    }

    return data.items;
  } catch (error) {
    console.error("Error fetching features pages:", error);
    return [];
  }
};

interface FeaturesPageProps {
  pageId?: number;
  slug?: string;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ pageId, slug }) => {
  const [data, setData] = useState<FeaturesPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const allPages = await fetchAllFeaturesPages();

        console.log("🔍 All Features Pages:", allPages);
        console.log("🔍 Looking for slug:", slug);

        const matchingPage = allPages.find(
          (page: FeaturesPageData) => page.slug === slug
        );

        if (matchingPage) {
          console.log("✅ Found matching page:", matchingPage);
          setData(matchingPage);

          if (matchingPage.seo_title || matchingPage.title) {
            document.title = matchingPage.seo_title || matchingPage.title;
          }

          setError(null);
        } else {
          setError("Features page not found");
        }
      } catch (err) {
        console.error("Failed to load features page:", err);
        setError("Failed to load features page");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [pageId, slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-solid border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-gray-600 text-xl font-medium">
            Loading features...
          </p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 mb-6">
            <svg
              className="w-20 h-20 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Unable to Load Page
          </h2>
          <p className="text-gray-600 mb-8 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Get color theme from data - fallback to default blue theme
  const primaryColor = data.color_theme?.primary_color || "#3B82F6";
  const secondaryColor = data.color_theme?.secondary_color || "#1E40AF";
  const accentColor = data.color_theme?.accent_color || "#10B981";
  const textColor = data.color_theme?.text_color || "#1F2937";
  const neutralColor = data.color_theme?.neutral_color || "#6B7280";
  const bgColor = data.color_theme?.background_color || "#FFFFFF";

  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  const getFullImageUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `https://esign-admin.signmary.com${url}`;
  };

  return (
    <div className="features-page" style={{ backgroundColor: bgColor }}>
      {/* Apply color theme */}
      <style>{`
        :root {
          --primary-color: ${primaryColor};
          --secondary-color: ${secondaryColor};
          --accent-color: ${accentColor};
          --neutral-color: ${neutralColor};
          --background-color: ${bgColor};
          --text-color: ${textColor};
        }
        
        body {
          background-color: var(--background-color) !important;
          color: var(--text-color);
        }
        
        .features-page {
          background-color: var(--background-color);
          min-height: 100vh;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Header Section */}
      <section
        className="relative py-20 sm:py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}10 100%)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
            style={{ background: gradientBg }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: gradientHover, animationDelay: "3s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp"
              style={{ color: textColor }}
            >
              {data.header_title}
            </h1>
            <p
              className="text-xl sm:text-2xl mb-8 animate-fadeInUp animation-delay-200"
              style={{ color: neutralColor }}
            >
              {data.header_subtitle}
            </p>
            {data.header_description && (
              <p
                className="text-lg mb-10 max-w-3xl mx-auto animate-fadeInUp"
                style={{ color: neutralColor, animationDelay: "0.3s" }}
              >
                {data.header_description}
              </p>
            )}
            {data.header_cta_text && (
              <a
                href={data.header_cta_url}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group animate-fadeInUp"
                style={{
                  background: gradientBg,
                  animationDelay: "0.4s",
                }}
              >
                <span className="relative z-10">{data.header_cta_text}</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: gradientHover }}
                />
              </a>
            )}
          </div>

          {data.header_image && (
            <div
              className="mt-16 max-w-5xl mx-auto animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: `0 20px 60px ${primaryColor}30`,
                }}
              >
                <img
                  src={getFullImageUrl(data.header_image.url)}
                  alt={data.header_image.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Problem/Solution Section */}
      {(data.problem_description || data.solution_description) && (
        <section
          className="py-16 sm:py-24"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: textColor }}
              >
                {data.problem_solution_heading}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {data.problem_description && (
                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-2xl">❌</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      The Problem
                    </h3>
                  </div>
                  <div
                    className="prose prose-lg"
                    style={{ color: neutralColor }}
                    dangerouslySetInnerHTML={{
                      __html: data.problem_description,
                    }}
                  />
                </div>
              )}

              {data.solution_description && (
                <div
                  className="bg-white p-8 rounded-2xl shadow-lg border-2"
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Our Solution
                    </h3>
                  </div>
                  <div
                    className="prose prose-lg"
                    style={{ color: neutralColor }}
                    dangerouslySetInnerHTML={{
                      __html: data.solution_description,
                    }}
                  />
                </div>
              )}
            </div>

            {data.problem_solution_image && (
              <div className="mt-12 max-w-4xl mx-auto">
                <img
                  src={getFullImageUrl(data.problem_solution_image.url)}
                  alt={data.problem_solution_image.title}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
        <section
          className="py-16 sm:py-24"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}05 0%, ${accentColor}05 100%)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: textColor }}
              >
                {data.how_it_works_heading}
              </h2>
              {data.how_it_works_description && (
                <p
                  className="text-xl max-w-3xl mx-auto"
                  style={{ color: neutralColor }}
                >
                  {data.how_it_works_description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.how_it_works_steps.map((step: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                      style={{ background: gradientBg }}
                    >
                      {step.step_number}
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: textColor }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  {step.image && (
                    <img
                      src={getFullImageUrl(step.image.url)}
                      alt={step.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  )}
                  <p style={{ color: neutralColor }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Overview Section */}
      {data.features && data.features.length > 0 && (
        <section
          className="py-16 sm:py-24"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              {data.features_intro_heading && (
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                  style={{ color: textColor }}
                >
                  {data.features_intro_heading}
                </h2>
              )}
              {data.features_intro_description && (
                <p
                  className="text-lg sm:text-xl"
                  style={{ color: neutralColor }}
                >
                  {data.features_intro_description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: gradientBg }}
                  />

                  {feature.icon && (
                    <div className="relative mb-6">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
                        }}
                      >
                        <EasyIcon
                          icon={feature.icon}
                          size={28}
                          color={primaryColor}
                        />
                      </div>
                    </div>
                  )}

                  <h3
                    className="text-xl sm:text-2xl font-bold mb-4"
                    style={{ color: textColor }}
                  >
                    {feature.title}
                  </h3>

                  <p style={{ color: neutralColor }}>{feature.description}</p>

                  <div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: gradientBg }}
                  >
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {data.benefits && data.benefits.length > 0 && (
        <section
          className="py-16 sm:py-24"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}05 0%, ${accentColor}05 100%)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: textColor }}
              >
                {data.benefits_heading}
              </h2>
              {data.benefits_description && (
                <p
                  className="text-xl max-w-3xl mx-auto"
                  style={{ color: neutralColor }}
                >
                  {data.benefits_description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {benefit.icon && (
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                  )}
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: textColor }}
                  >
                    {benefit.title}
                  </h3>
                  {benefit.stats && (
                    <div
                      className="text-3xl font-bold mb-4"
                      style={{ color: primaryColor }}
                    >
                      {benefit.stats}
                    </div>
                  )}
                  <p style={{ color: neutralColor }}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Card Sections */}
      {data.card_sections && data.card_sections.length > 0 && (
        <section
          className="py-16 sm:py-24"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: textColor }}
              >
                {data.card_sections_heading}
              </h2>
              {data.card_sections_description && (
                <p
                  className="text-xl max-w-3xl mx-auto"
                  style={{ color: neutralColor }}
                >
                  {data.card_sections_description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.card_sections.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {card.card_image && (
                    <img
                      src={getFullImageUrl(card.card_image.url)}
                      alt={card.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: textColor }}
                    >
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p
                        className="text-lg mb-3"
                        style={{ color: primaryColor }}
                      >
                        {card.subtitle}
                      </p>
                    )}
                    <p className="mb-4" style={{ color: neutralColor }}>
                      {card.description}
                    </p>
                    {card.button_text && (
                      <a
                        href={card.button_url}
                        className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
                        style={{ background: gradientBg }}
                      >
                        {card.button_text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section
          className="py-16 sm:py-24"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: textColor }}
              >
                {data.faq_section_heading}
              </h2>
              {data.faq_section_description && (
                <p className="text-xl" style={{ color: neutralColor }}>
                  {data.faq_section_description}
                </p>
              )}
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <details
                  key={faq.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden group"
                >
                  <summary
                    className="px-6 py-4 cursor-pointer font-semibold text-lg flex justify-between items-center hover:bg-gray-50 transition-colors"
                    style={{ color: textColor }}
                  >
                    {faq.question}
                    <span
                      className="text-2xl group-open:rotate-180 transition-transform"
                      style={{ color: primaryColor }}
                    >
                      ▼
                    </span>
                  </summary>
                  <div
                    className="px-6 py-4 border-t"
                    style={{ color: neutralColor }}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section
          className="py-16 sm:py-24"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}05 0%, ${accentColor}05 100%)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: textColor }}
              >
                {data.testimonials_heading}
              </h2>
              {data.testimonials_description && (
                <p
                  className="text-xl max-w-3xl mx-auto"
                  style={{ color: neutralColor }}
                >
                  {data.testimonials_description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {testimonial.photo && (
                      <img
                        src={getFullImageUrl(testimonial.photo.url)}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h4
                        className="font-bold text-lg"
                        style={{ color: textColor }}
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-sm" style={{ color: neutralColor }}>
                        {testimonial.title}
                      </p>
                      <p className="text-sm" style={{ color: primaryColor }}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="italic" style={{ color: neutralColor }}>
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Primary CTA Section */}
      {data.primary_cta_heading && (
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: data.primary_cta_background_image
              ? `url(${getFullImageUrl(data.primary_cta_background_image.url)})`
              : gradientBg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}95 0%, ${accentColor}95 100%)`,
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {data.primary_cta_heading}
              </h2>
              {data.primary_cta_description && (
                <p className="text-xl text-white/90 mb-10">
                  {data.primary_cta_description}
                </p>
              )}
              {data.primary_cta_button_text && (
                <a
                  href={data.primary_cta_button_url}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ color: primaryColor }}
                >
                  {data.primary_cta_button_text}
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Secondary CTA Section */}
      {data.secondary_cta_heading && (
        <section
          className="py-16 sm:py-24"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: textColor }}
              >
                {data.secondary_cta_heading}
              </h2>
              {data.secondary_cta_description && (
                <p className="text-xl mb-10" style={{ color: neutralColor }}>
                  {data.secondary_cta_description}
                </p>
              )}
              {data.secondary_cta_button_text && (
                <a
                  href={data.secondary_cta_button_url}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
                  style={{ background: gradientBg }}
                >
                  {data.secondary_cta_button_text}
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FeaturesPage;
