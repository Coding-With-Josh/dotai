// src/components/landing/AIFeaturesGrid.tsx
export function AIFeaturesGrid() {
    const features = [
      {
        title: "Wallet Optimization",
        description: "AI-powered transaction insights and fraud detection",
        icon: "🔒"
      },
      {
        title: "Ecosystem Guide",
        description: "Real-time updates and trend analysis",
        icon: "🌐"
      },
      {
        title: "DAO Management",
        description: "Intelligent governance and treasury insights",
        icon: "🤝"
      },
      // Add more features
    ]
  
    return (
      <section className="py-24 bg-[#0a0a1a] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-green-400 to-blue-500">
            AI-Powered Solana Capabilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#1a1a2e] p-6 rounded-2xl 
                  border border-blue-900/30 
                  hover:border-blue-500/50 
                  transition-all duration-300 
                  hover:scale-105 
                  hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }