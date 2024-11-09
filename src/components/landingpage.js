// landingpage.js
import React, { useState } from "react";
import {
  Wallet,
  TrendingUp,
  RefreshCw,
  Lock,
  Bug,
  Twitter,
  Youtube,
  MessageSquare,
  Globe,
  Zap,
  Menu,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nftCards = [
    {
      id: 1,
      name: "Digital Collectible #1",
      price: "0.0222",
      endingTime: "18:34:08",
      currentPrice: "0.0222",
      likes: "1.3K",
      edition: "150/230",
      image: "/1.jpeg",
    },
    {
      id: 2,
      name: "Digital Collectible #2",
      endingTime: "18:34:08",
      currentPrice: "0.0222",
      price: "0.0221",
      likes: "1.3K",
      edition: "48/110",
      image: "/2.jpeg",
    },
    {
      id: 3,
      name: "Digital Collectible #3",
      endingTime: "18:34:08",
      currentPrice: "0.0222",
      price: "0.033",
      likes: "1.3K",
      edition: "38/111",
      image: "/3.jpeg",
    },
  ];

  const images = ["/4.jpeg", "/6.jpeg", "/7.jpeg", "/2.jpeg", "/1.jpeg", "/3.jpeg"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-4 md:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                PEEL MARKET
              </h1>

              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="text-white" />
              </button>

              <nav className="hidden md:flex gap-8">
                {["Borrow", "Lend", "Loans", "Sweepmax", "Stake"].map((item) => (
                  <button
                    key={item}
                    className="relative group px-4 py-2 hover:text-purple-400 transition-colors"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </nav>
            </div>

            <nav className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col gap-4 mt-4`}>
              {["Borrow", "Lend", "Loans", "Sweepmax", "Stake"].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-2 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-2/3">
              <div className="flex gap-6 mb-12 flex-wrap">
                {[
                  { label: "BUY", value: "$54,501" },
                  { label: "SELL", value: "$54,501" }
                ].map((metric) => (
                  <div key={metric.label} className="flex-1 min-w-[200px]">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
                      <div className="relative bg-black border border-white/10 rounded-lg p-6">
                        <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-4xl font-bold">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-4xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                YOUR GATEWAY TO
              </h2>
              <h3 className="text-4xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                NFT FINANCE
              </h3>
              <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                Step Into a Fresh Marketplace for NFTs. Find What Speaks to You and Make It Yours.
              </p>
            </div>

            {/* Launch App Button */}
            <a href="/dashboard" className="w-full md:w-auto">
              <button className="relative w-full md:w-auto group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative px-8 py-4 bg-black rounded-2xl border border-white/10 flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    LAUNCH APP
                  </span>
                  <Zap className="w-6 h-6 text-pink-500 animate-pulse" />
                </div>
              </button>
            </a>
          </div>
        </section>

        {/* NFT Cards Section */}
        <section className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nftCards.map((card) => (
              <div key={card.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black rounded-xl border border-white/10 p-4 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="rounded-lg p-3">
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-400">Ending</span>
                        <span className="text-purple-400">{card.endingTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Price</span>
                        <span className="ml-2 text-purple-400">{card.currentPrice} ETH</span>
                      </div>
                    </div>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-sm text-gray-400">{card.edition}</span>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400">{card.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            OUR BENEFITS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "LOANS",
                icon: <Wallet className="text-purple-400" />,
                description: "Secure loans with your NFTs as collateral. Competitive rates and flexible terms.",
                number: "01"
              },
              {
                title: "TRADING",
                icon: <TrendingUp className="text-pink-400" />,
                description: "Trade NFTs with up to 2x leverage. Maximize your trading potential.",
                number: "02"
              },
              {
                title: "REFINANCING",
                icon: <RefreshCw className="text-red-400" />,
                description: "Refinance existing loans with better rates and flexible payment schedules.",
                number: "03"
              }
            ].map((benefit) => (
              <div key={benefit.title} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black border border-white/10 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    {benefit.icon}
                  </div>
                  <p className="text-gray-400">{benefit.description}</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                      {benefit.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collection Section */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              POPULAR COLLECTION
            </h2>
            <button className="px-6 py-3 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <span className="relative text-white group-hover:text-purple-400 transition-colors">
                EXPLORE NOW
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <img
                    src={image}
                    alt={`Collection ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Edition 150/230</span>
                      <span className="text-sm text-purple-400">0.0222 ETH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400">1.3K</span>
                      </span>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                        Place Bid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
{/* Features Section */}
<section className="container mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8 text-white" />,
                title: "SECURITY",
                description:
                  "Drops Protocol Is Built On Battle-Tested Foundations. Price Feeds Are Secured By Chainlink And Lending Protocol.",
                number: "01",
              },
              {
                icon: <Bug className="w-8 h-8 text-white" />,
                title: "BUG BOUNTY",
                description:
                  "Security Is Always Top-Of-Mind - Help Us To Find Bugs And Vulnerabilities Through Our Bug Bounty Program.",
                number: "02",
              },
            ].map((feature) => (
              <div key={feature.title} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black border border-white/10 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                      {feature.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <button className="text-purple-400 hover:text-pink-400 transition-colors">
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            OUR PARTNERS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "DAO Maker",
              "Chainlink",
              "PeckShield",
              "CRYPTO DAILY",
              "ICODROPS",
            ].map((partner, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black border border-white/10 rounded-xl p-6 flex items-center justify-center hover:transform hover:scale-105 transition-all duration-300">
                  <span className="text-gray-400 font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Governance Section */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75"></div>
            <div className="relative bg-black border border-white/10 rounded-2xl p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  COMMUNITY GOVERNANCE
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="w-12 h-12 rounded-full border-2 border-purple-500 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500"
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={`/nft${item}.jpg`}
                          alt={`NFT ${item}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-gray-400">
                    Our Protocol Is Decentralized And Community-Driven, Governed
                    By PeelMarket Token Holders. Members Of The DAO Can Vote On
                    New NFT Lending Pools Fund Ecosystem.
                  </p>
                </div>
                <button className="relative group px-6 py-3 w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <span className="relative text-white group-hover:text-purple-400 transition-colors block text-center">
                    GOVERNANCE FORUM
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="container mx-auto px-4 md:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                {["Home", "Stats", "Dune", "Docs", "Audit", "Github"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
              <div className="flex gap-4">
                {[
                  { icon: <Twitter size={20} />, label: "Twitter" },
                  { icon: <MessageSquare size={20} />, label: "Discord" },
                  { icon: <Youtube size={20} />, label: "YouTube" },
                ].map((social, index) => (
                  <button
                    key={index}
                    className="relative group w-10 h-10"
                    aria-label={social.label}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-full h-full border border-white/10 rounded-lg flex items-center justify-center text-purple-400 group-hover:text-pink-400 transition-colors">
                      {social.icon}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center text-gray-500 mt-8">
              © 2024 PeelMarket. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;