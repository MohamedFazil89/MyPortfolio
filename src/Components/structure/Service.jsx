import SpotlightCard from "./Spotlight";
import "../styles/Service.css"; // Import the CSS file
import ShinyText from "./ShinyText";
import AnimatedContent from "./AnimatedContent ";

export default function Service() {
  const services = [
    {
      title: "Website Development",
      description:
        "We create responsive and modern websites to bring your business online.",
      icon: (
        <svg
          className="service-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Desktop/monitor icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4h18M4 8h16v10H4V8z"
          />
        </svg>
      ),
    },
    {
      title: "App Development",
      description:
        "Our mobile apps provide seamless user experiences on both Android and iOS platforms.",
      icon: (
        <svg
          className="service-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Mobile phone icon */}
          <rect
            x="7"
            y="4"
            width="10"
            height="16"
            rx="2"
            ry="2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 18h2" />
        </svg>
      ),
    },
    {
      title: "Video Editing",
      description:
        "We edit your videos to perfection, making your content engaging and dynamic.",
      icon: (
        <svg
          className="service-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Film/Video icon */}
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            ry="2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16" />
        </svg>
      ),
    },
  ];

  return (
    <div className="service-cards-container">
<ShinyText text="What I Offer!" disabled={false} speed={3} className='shiny-class' />

      <section className="card-section">
      {services.map((service, index) => (
        <AnimatedContent
        key={index}
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={`0.${index}`}
      >
        <SpotlightCard >
          
          <div className="service-card">
            <div className="service-card-header">
              {service.icon}
              <h2 className="service-card-title">{service.title}</h2>
            </div>
            <p className="service-card-text">{service.description}</p>
          </div>

        </SpotlightCard>
        </AnimatedContent>

      ))}
      </section>
    </div>
  );
}
