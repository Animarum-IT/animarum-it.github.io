import Image from "next/image";

const services = [
  {
    id: 1,
    // path: "M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z",
    title: "AIOps",
    path: "/images/services/ai.png",
    text: "Achieve greater efficiency, reduce downtime, and enhance customer satisfaction. Transform your operations with cutting-edge automation and intelligent decision-making. Let's optimize your digital journey!",
    categories: [],
    delay: "0s",
    iconColorClass: "color-3",
  },
  {
    id: 2,
    path: "/images/services/devops.png",
    title: "Cloud Engineering",
    text: "Transform your IT landscape with a future-proof, cloud-first approach. Let’s build your path to success in the cloud!",
    categories: [],
    delay: "0.15s",
    iconColorClass: "color-2",
  },
  {
    id: 3,
    path: "/images/services/k8s.png",
    title: "System Design",
    text: "Whether you're building a new system from scratch or enhancing an existing one, our design solutions prioritize scalability, security, and flexibility. Let's design systems that empower your business to grow and succeed!",
    categories: [],
    delay: "0.3s",
    iconColorClass: "color-1",
  },
  {
    id: 4,
    path: "M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z",
    title: "Solution Discovery",
    text: "Whether you're looking to streamline operations, enhance customer experiences, or scale your business, our solution discovery process uncovers the ideal roadmap to achieve your goals. Let’s discover the solutions that will transform your business!",
    categories: [],
    delay: "0.3s",
    iconColorClass: "color-4",
  },
];

const ServiceItem = ({
  iconColorClass,
  path,
  title,
  text,
  categories,
  delay,
}: {
  iconColorClass: string;
  path: string;
  title: string;
  text: string;
  categories: string[];
  delay: string;
}) => {
  return (
    <div className="col-md-6 col-xl-3 d-flex">
      <div
        className="services-8-item p-4 p-sm-5 wow fadeIn"
        data-wow-delay={delay}
        data-wow-duration="1.2s"
      >
        <div className={`services-8-icon ${iconColorClass}`}>
          <Image src={path} alt="alt" width={60} height={60} />
        </div>
        <h3 className="services-8-title">{title}</h3>
        <p className="services-8-text">{text}</p>
        {categories.map((category, index) => (
          <div key={index} className="pb-1">
            <div className="services-8-category">{category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Service() {
  return (
    <>
      <>
        {/* Services Grid */}
        <div className="row g-0 mb-70 mb-sm-50">
          {/* Services Item */}
          {services.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
          {/* End Services Item */}
        </div>
      </>
    </>
  );
}
