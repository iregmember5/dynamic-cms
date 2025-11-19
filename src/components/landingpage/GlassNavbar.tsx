// new
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import type { LandingPageData, FeaturesPageData } from "../../types/landing";
import { fetchAllFeaturesPages } from "../../types/landing";

interface NavigationItem {
  id: number;
  title: string;
  url: string | null;
  link_type: "page" | "url" | "dropdown";
  order: number;
  children?: NavigationItem[];
}

interface GlassNavbarProps {
  data: LandingPageData;
  onShowLogin?: () => void;
}

function GlassNavbar({ data, onShowLogin }: GlassNavbarProps) {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [featuresPages, setFeaturesPages] = useState<FeaturesPageData[]>([]);

  // Get header config
  const headerConfig =
    data.header_config ||
    data.sections?.find((section) => section.type === "header")?.data?.config;

  const { header_cta_primary, color_theme } = data;

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const accentColor = color_theme?.accent_color || "#10B981";
  const textColor = color_theme?.text_color || "#1F2937";

  // Dummy data for testing
  const dummyFeaturesPages: FeaturesPageData[] = [
    {
      id: 1,
      title: "Sales & Marketing Features",
      slug: "sales-marketing",
      url: "/features/sales-marketing",
      seo_title: "Sales & Marketing Features",
      search_description: "Powerful sales and marketing tools",
      live: true,
      locked: false,
      first_published_at: null,
      last_published_at: null,
      header_title: "Sales & Marketing Features",
      header_subtitle: "Boost your sales with powerful tools",
      header_description: "Complete suite of sales and marketing features",
      header_cta_text: "Get Started",
      header_cta_url: "#",
      features_intro_heading: "Sales Tools",
      features_intro_description: "Everything you need to close more deals",
      features: [],
      categories_heading: "",
      categories_description: "",
      key_features_heading: "",
      key_features_description: "",
      comparison_heading: "",
      comparison_description: "",
      integrations_heading: "",
      integrations_description: "",
      specifications_heading: "",
      specifications_description: "",
      use_cases_heading: "",
      use_cases_description: "",
      features_cta_heading: "Ready to boost sales?",
      features_cta_description: "Start using our sales tools today",
      features_cta_button_text: "Get Started",
      features_cta_button_url: "#",
    },
    {
      id: 2,
      title: "Team Collaboration",
      slug: "team-collaboration",
      url: "/features/team-collaboration",
      seo_title: "Team Collaboration Features",
      search_description: "Work better together",
      live: true,
      locked: false,
      first_published_at: null,
      last_published_at: null,
      header_title: "Team Collaboration",
      header_subtitle: "Work together seamlessly",
      header_description: "Collaborate with your team in real-time",
      header_cta_text: "Start Collaborating",
      header_cta_url: "#",
      features_intro_heading: "Collaboration Tools",
      features_intro_description: "Tools designed for team success",
      features: [],
      categories_heading: "",
      categories_description: "",
      key_features_heading: "",
      key_features_description: "",
      comparison_heading: "",
      comparison_description: "",
      integrations_heading: "",
      integrations_description: "",
      specifications_heading: "",
      specifications_description: "",
      use_cases_heading: "",
      use_cases_description: "",
      features_cta_heading: "Ready to collaborate?",
      features_cta_description: "Start working together today",
      features_cta_button_text: "Get Started",
      features_cta_button_url: "#",
    },
    {
      id: 3,
      title: "Analytics & Reporting",
      slug: "analytics-reporting",
      url: "/features/analytics-reporting",
      seo_title: "Analytics & Reporting Features",
      search_description: "Make data-driven decisions",
      live: true,
      locked: false,
      first_published_at: null,
      last_published_at: null,
      header_title: "Analytics & Reporting",
      header_subtitle: "Insights that drive growth",
      header_description: "Comprehensive analytics and reporting tools",
      header_cta_text: "View Analytics",
      header_cta_url: "#",
      features_intro_heading: "Analytics Tools",
      features_intro_description: "Track, measure, and optimize",
      features: [],
      categories_heading: "",
      categories_description: "",
      key_features_heading: "",
      key_features_description: "",
      comparison_heading: "",
      comparison_description: "",
      integrations_heading: "",
      integrations_description: "",
      specifications_heading: "",
      specifications_description: "",
      use_cases_heading: "",
      use_cases_description: "",
      features_cta_heading: "Ready for insights?",
      features_cta_description: "Start analyzing your data today",
      features_cta_button_text: "Get Started",
      features_cta_button_url: "#",
    },
    {
      id: 4,
      title: "Project Management",
      slug: "project-management",
      url: "/features/project-management",
      seo_title: "Project Management Features",
      search_description: "Manage projects efficiently",
      live: true,
      locked: false,
      first_published_at: null,
      last_published_at: null,
      header_title: "Project Management",
      header_subtitle: "Organize and track your projects",
      header_description: "Complete project management solution",
      header_cta_text: "Manage Projects",
      header_cta_url: "#",
      features_intro_heading: "Project Tools",
      features_intro_description: "Everything for project success",
      features: [],
      categories_heading: "",
      categories_description: "",
      key_features_heading: "",
      key_features_description: "",
      comparison_heading: "",
      comparison_description: "",
      integrations_heading: "",
      integrations_description: "",
      specifications_heading: "",
      specifications_description: "",
      use_cases_heading: "",
      use_cases_description: "",
      features_cta_heading: "Ready to manage projects?",
      features_cta_description: "Start organizing today",
      features_cta_button_text: "Get Started",
      features_cta_button_url: "#",
    },
    {
      id: 5,
      title: "Customer Support",
      slug: "customer-support",
      url: "/features/customer-support",
      seo_title: "Customer Support Features",
      search_description: "Excellent customer service tools",
      live: true,
      locked: false,
      first_published_at: null,
      last_published_at: null,
      header_title: "Customer Support",
      header_subtitle: "Support your customers better",
      header_description: "Complete customer support solution",
      header_cta_text: "Support Customers",
      header_cta_url: "#",
      features_intro_heading: "Support Tools",
      features_intro_description: "Tools for customer satisfaction",
      features: [],
      categories_heading: "",
      categories_description: "",
      key_features_heading: "",
      key_features_description: "",
      comparison_heading: "",
      comparison_description: "",
      integrations_heading: "",
      integrations_description: "",
      specifications_heading: "",
      specifications_description: "",
      use_cases_heading: "",
      use_cases_description: "",
      features_cta_heading: "Ready to support?",
      features_cta_description: "Start helping customers today",
      features_cta_button_text: "Get Started",
      features_cta_button_url: "#",
    },
    {
      id: 6,
      title: "Security & Compliance",
      slug: "security-compliance",
      url: "/features/security-compliance",
      seo_title: "Security & Compliance Features",
      search_description: "Secure and compliant operations",
      live: true,
      locked: false,
      first_published_at: null,
      last_published_at: null,
      header_title: "Security & Compliance",
      header_subtitle: "Keep your data safe and compliant",
      header_description: "Enterprise-grade security features",
      header_cta_text: "Learn More",
      header_cta_url: "#",
      features_intro_heading: "Security Tools",
      features_intro_description: "Protection and compliance features",
      features: [],
      categories_heading: "",
      categories_description: "",
      key_features_heading: "",
      key_features_description: "",
      comparison_heading: "",
      comparison_description: "",
      integrations_heading: "",
      integrations_description: "",
      specifications_heading: "",
      specifications_description: "",
      use_cases_heading: "",
      use_cases_description: "",
      features_cta_heading: "Ready to secure?",
      features_cta_description: "Start protecting your data today",
      features_cta_button_text: "Get Started",
      features_cta_button_url: "#",
    },
  ];

  // Load FeaturesPages on mount, fallback to dummy if none
  useEffect(() => {
    const loadFeaturesPages = async () => {
      const pages = await fetchAllFeaturesPages();
      // Use API data if available, otherwise use dummy data
      if (pages && pages.length > 0) {
        setFeaturesPages(pages);
      } else {
        setFeaturesPages(dummyFeaturesPages);
      }
    };
    loadFeaturesPages();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Process navigation items
  const rawNavigationItems = headerConfig?.navigation_items || [];
  const processedLinks: NavigationItem[] = rawNavigationItems.map(
    (item: any) => ({
      ...item,
      link_type: (item.link_type as "page" | "url" | "dropdown") || "url",
      url: getNavigationItemUrl(item),
      children: item.children || [],
    })
  );

  const links: NavigationItem[] =
    processedLinks.length > 0
      ? processedLinks
      : [
          {
            id: 1,
            title: "Home",
            url: "#",
            link_type: "url" as const,
            order: 1,
            children: [],
          },
          {
            id: 2,
            title: "Features",
            url: "#features",
            link_type: "dropdown" as const,
            order: 2,
            children: [],
          },
          {
            id: 3,
            title: "Pricing",
            url: "#pricing",
            link_type: "url" as const,
            order: 3,
            children: [],
          },
          {
            id: 4,
            title: "Contact",
            url: "#contact",
            link_type: "url" as const,
            order: 4,
            children: [],
          },
        ].sort((a, b) => a.order - b.order);

  const getFullImageUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `https://esign-admin.signmary.com${url}`;
  };

  const logo = headerConfig?.logo;
  const siteName = headerConfig?.site_name || data.title || "My Powerly";
  const navbarCTA = headerConfig?.navbar_cta;
  const navbarStyle = headerConfig?.navbar_style || "default";
  const stickyNavbar = headerConfig?.sticky_navbar !== false;
  const transparentOnHome = headerConfig?.transparent_on_home || false;

  function getNavigationItemUrl(item: any): string {
    if (item.link_type === "page" && !item.url) {
      return "#";
    }
    return item.url || "#";
  }

  function isFeatureDropdown(item: NavigationItem): boolean {
    return (
      item.link_type === "dropdown" &&
      (item.title.toLowerCase().includes("feature") ||
        item.title.toLowerCase() === "features")
    );
  }

  function hasDropdownChildren(item: NavigationItem): boolean {
    return (
      item.link_type === "dropdown" ||
      Boolean(item.children && item.children.length > 0)
    );
  }

  const getNavbarStyleClass = () => {
    switch (navbarStyle) {
      case "centered":
        return "justify-center";
      case "with_cta":
        return "justify-between";
      case "transparent":
        return "bg-transparent border-transparent shadow-none";
      default:
        return "justify-between";
    }
  };

  // Gradient styles
  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  return (
    <nav
      className={`${
        stickyNavbar ? "fixed" : "absolute"
      } top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/90 shadow-2xl"
          : transparentOnHome
          ? "bg-transparent"
          : "backdrop-blur-md bg-white/30"
      }`}
      style={{
        borderBottom: scrolled
          ? `2px solid ${primaryColor}30`
          : transparentOnHome
          ? "none"
          : `1px solid ${primaryColor}20`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center ${getNavbarStyleClass()} py-3 ${
            !transparentOnHome && !scrolled && "border-b border-white/10"
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0 group cursor-pointer">
            {logo ? (
              <div className="flex items-center gap-3">
                <div
                  className="relative p-0.5 rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: gradientBg,
                    boxShadow: scrolled
                      ? `0 8px 24px ${primaryColor}30`
                      : "none",
                  }}
                >
                  <div className="bg-white rounded-lg p-1">
                    <img
                      src={getFullImageUrl(logo.url)}
                      alt={logo.title || siteName}
                      className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      style={{
                        maxWidth: logo.width ? `${logo.width}px` : "150px",
                        maxHeight: logo.height ? `${logo.height}px` : "40px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="font-bold text-xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    color: textColor,
                    textShadow: scrolled
                      ? `0 0 20px ${primaryColor}20`
                      : "none",
                  }}
                >
                  {siteName}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 flex items-center justify-center rounded-xl text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: gradientBg,
                    boxShadow: `0 4px 16px ${primaryColor}40`,
                  }}
                >
                  <span className="font-bold text-sm">
                    {siteName.charAt(0)}
                  </span>
                </div>
                <div
                  className="font-bold text-xl transition-all duration-300 group-hover:scale-105"
                  style={{ color: textColor }}
                >
                  {siteName}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          {navbarStyle !== "centered" && (
            <div className="hidden md:flex items-center gap-8 mx-8 flex-1 justify-center">
              {links
                .sort((a, b) => a.order - b.order)
                .map((link) => (
                  <div key={link.id} className="relative">
                    {isFeatureDropdown(link) ? (
                      // Features Dropdown with FeaturesPages - Fixed hover area
                      <div
                        className="relative h-full"
                        onMouseEnter={() => setActiveDropdown(link.id)}
                        onMouseLeave={() => {
                          setActiveDropdown(null);
                          setHoveredItem(null);
                        }}
                      >
                        <div className="h-full flex items-center">
                          <button
                            className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 hover:scale-105 relative group py-2"
                            style={{ color: textColor }}
                          >
                            {link.title}
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                activeDropdown === link.id ? "rotate-180" : ""
                              }`}
                            />
                            <span
                              className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                              style={{ background: gradientBg }}
                            />
                          </button>
                        </div>

                        {/* Features Pages Dropdown - Connected to button with padding */}
                        {activeDropdown === link.id &&
                          featuresPages.length > 0 && (
                            <div
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-[600px] backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl overflow-hidden animate-slideDown border-2"
                              style={{
                                border: `2px solid transparent`,
                                backgroundImage: `linear-gradient(white, white), ${gradientBg}`,
                                backgroundOrigin: "border-box",
                                backgroundClip: "padding-box, border-box",
                                boxShadow: `0 20px 40px ${primaryColor}20`,
                              }}
                            >
                              {/* Invisible hover area above dropdown */}
                              <div
                                className="absolute -top-4 left-0 right-0 h-4 bg-transparent"
                                onMouseEnter={() => setActiveDropdown(link.id)}
                              />

                              <div
                                className="px-6 py-4 font-bold text-lg text-white"
                                style={{ background: gradientBg }}
                              >
                                All Features
                              </div>

                              <div className="p-6">
                                <div className="grid grid-cols-3 gap-4">
                                  {featuresPages.map((page, index) => (
                                    <a
                                      key={page.id}
                                      href={`#features/${page.slug}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block p-4 rounded-xl transition-all duration-300 relative overflow-hidden group hover:shadow-lg border border-gray-100 hover:border-transparent"
                                      style={{
                                        color: textColor,
                                        animationDelay: `${index * 0.03}s`,
                                      }}
                                      onMouseEnter={() =>
                                        setHoveredItem(page.id)
                                      }
                                      onMouseLeave={() => setHoveredItem(null)}
                                      onClick={() => {
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-2">
                                          <div
                                            className="w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0"
                                            style={{
                                              background:
                                                hoveredItem === page.id
                                                  ? gradientBg
                                                  : primaryColor,
                                              transform:
                                                hoveredItem === page.id
                                                  ? "scale(1.2)"
                                                  : "scale(1)",
                                              boxShadow:
                                                hoveredItem === page.id
                                                  ? `0 0 8px ${primaryColor}`
                                                  : "none",
                                            }}
                                          />
                                          <h3 className="font-semibold text-sm leading-tight group-hover:translate-x-1 transition-transform duration-300">
                                            {page.title}
                                          </h3>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                          {page.search_description ||
                                            "Discover powerful features"}
                                        </p>
                                      </div>

                                      {/* Hover background effect */}
                                      <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                        style={{
                                          background: `linear-gradient(135deg, ${primaryColor}08 0%, ${accentColor}08 100%)`,
                                        }}
                                      />

                                      {/* Border animation on hover */}
                                      <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                          background: gradientBg,
                                        }}
                                      >
                                        <div className="absolute inset-[2px] rounded-xl bg-white" />
                                      </div>

                                      {/* External link icon */}
                                      <svg
                                        className="absolute top-3 right-3 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        style={{ color: primaryColor }}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                      </svg>
                                    </a>
                                  ))}
                                </div>
                              </div>

                              {/* Footer with view all link */}
                              <div
                                className="px-6 py-4 border-t border-gray-100 bg-gray-50/50"
                                style={{ borderColor: `${primaryColor}15` }}
                              >
                                <a
                                  href="#all-features"
                                  className="text-sm font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group"
                                  style={{ color: primaryColor }}
                                >
                                  View All Features
                                  <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}
                      </div>
                    ) : hasDropdownChildren(link) ? (
                      // Regular dropdown
                      <div
                        className="relative h-full"
                        onMouseEnter={() => setActiveDropdown(link.id)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="h-full flex items-center">
                          <button
                            className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 hover:scale-105 relative group py-2"
                            style={{ color: textColor }}
                          >
                            {link.title}
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                activeDropdown === link.id ? "rotate-180" : ""
                              }`}
                            />
                            <span
                              className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                              style={{ background: gradientBg }}
                            />
                          </button>
                        </div>

                        {activeDropdown === link.id &&
                          link.children &&
                          link.children.length > 0 && (
                            <div
                              className="absolute top-full left-0 mt-0 w-48 backdrop-blur-md bg-white/95 border rounded-xl shadow-lg py-2 z-50"
                              style={{
                                borderColor: `${primaryColor}30`,
                                boxShadow: `0 10px 30px ${primaryColor}15`,
                              }}
                            >
                              {/* Invisible hover area above dropdown */}
                              <div
                                className="absolute -top-4 left-0 right-0 h-4 bg-transparent"
                                onMouseEnter={() => setActiveDropdown(link.id)}
                              />

                              {link.children.map((child) => (
                                <a
                                  key={child.id}
                                  href={getNavigationItemUrl(child)}
                                  className="block px-4 py-2 text-sm transition-all duration-200 hover:scale-105 relative group"
                                  style={{ color: textColor }}
                                >
                                  {child.title}
                                  <div
                                    className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300"
                                    style={{ background: gradientBg }}
                                  />
                                </a>
                              ))}
                            </div>
                          )}
                      </div>
                    ) : (
                      // Regular link
                      <a
                        href={getNavigationItemUrl(link)}
                        className="text-sm font-semibold transition-all duration-300 hover:scale-105 relative group py-2 inline-block"
                        style={{ color: textColor }}
                      >
                        {link.title}
                        <span
                          className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                          style={{ background: gradientBg }}
                        />
                      </a>
                    )}
                  </div>
                ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            {navbarCTA?.text ? (
              <button
                onClick={onShowLogin}
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                style={{ background: gradientBg }}
              >
                <span className="relative z-10">{navbarCTA.text}</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: gradientHover }}
                />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            ) : header_cta_primary ? (
              <button
                onClick={onShowLogin}
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                style={{ background: gradientBg }}
              >
                <span className="relative z-10">{header_cta_primary}</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: gradientHover }}
                />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            ) : null}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md md:hidden hover:bg-white/20 transition-all duration-300 hover:scale-110"
              style={{ color: textColor }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-500 ${
            open
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div
            className="backdrop-blur-md rounded-xl shadow-lg p-4 flex flex-col gap-3 mt-2 mb-4"
            style={{
              background: `${color_theme?.background_color || "#FFFFFF"}f0`,
              border: `1px solid ${primaryColor}30`,
            }}
          >
            {links
              .sort((a, b) => a.order - b.order)
              .map((link) => (
                <div key={link.id}>
                  {isFeatureDropdown(link) ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.id ? null : link.id
                          )
                        }
                        className="w-full flex items-center justify-between text-base font-semibold py-2 px-2 transition-all duration-300 hover:scale-105 relative"
                        style={{ color: textColor }}
                      >
                        {link.title}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            activeDropdown === link.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === link.id &&
                        featuresPages.length > 0 && (
                          <div className="ml-4 mt-2 space-y-1 max-h-64 overflow-y-auto">
                            {featuresPages.map((page) => (
                              <a
                                key={page.id}
                                href={`/features/${page.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm py-2 px-3 rounded-lg transition-all duration-200 relative overflow-hidden group"
                                style={{ color: textColor }}
                                onClick={() => setOpen(false)}
                              >
                                <div className="relative z-10 flex items-center gap-2">
                                  <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: primaryColor }}
                                  />
                                  {page.title}
                                </div>
                                <div
                                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  style={{
                                    background: `linear-gradient(90deg, ${primaryColor}10 0%, ${accentColor}10 100%)`,
                                  }}
                                />
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  ) : hasDropdownChildren(link) ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.id ? null : link.id
                          )
                        }
                        className="w-full flex items-center justify-between text-base font-medium py-2 px-2 hover:text-blue-600 transition-colors"
                        style={{ color: textColor }}
                      >
                        {link.title}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            activeDropdown === link.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === link.id &&
                        link.children &&
                        link.children.length > 0 && (
                          <div className="ml-4 mt-2 space-y-2">
                            {link.children.map((child) => (
                              <a
                                key={child.id}
                                href={getNavigationItemUrl(child)}
                                className="block text-sm py-2 px-2 rounded transition hover:bg-blue-50 hover:text-blue-600"
                                style={{ color: textColor }}
                                onClick={() => setOpen(false)}
                              >
                                {child.title}
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  ) : (
                    <a
                      href={getNavigationItemUrl(link)}
                      className="block text-base font-medium py-2 px-2 rounded transition hover:text-blue-600"
                      style={{ color: textColor }}
                      onClick={() => setOpen(false)}
                    >
                      {link.title}
                    </a>
                  )}
                </div>
              ))}

            {/* Mobile CTA */}
            {navbarCTA?.text ? (
              <button
                onClick={() => {
                  if (onShowLogin) {
                    onShowLogin();
                    setOpen(false);
                  }
                }}
                className="mt-2 w-full px-4 py-3 rounded-xl text-white font-semibold text-center shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                style={{ background: gradientBg }}
              >
                <span className="relative z-10">{navbarCTA.text}</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: gradientHover }}
                />
              </button>
            ) : header_cta_primary ? (
              <button
                onClick={() => {
                  if (onShowLogin) {
                    onShowLogin();
                    setOpen(false);
                  }
                }}
                className="mt-2 w-full px-4 py-3 rounded-xl text-white font-semibold text-center shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                style={{ background: gradientBg }}
              >
                <span className="relative z-10">{header_cta_primary}</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: gradientHover }}
                />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${color_theme?.background_color || "#F8F9FA"};
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
}

export default GlassNavbar;
