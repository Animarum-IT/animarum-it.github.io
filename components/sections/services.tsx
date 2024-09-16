const services = [
  {
    id: 1,
    path: "M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z",
    title: "Marketing Consulting",
    text: "The product aspects of marketing deal with the specifications of the actual relevant products, goods or services, and how it relates to the end-user's needs and wants.",
    categories: [
      "Search Engine Optimization",
      "Marketing Strategy",
      "Partnerships",
    ],
    delay: "0s",
    iconColorClass: "color-3",
  },
  {
    id: 2,
    path: "M18 10.031v-6.423l-6.036-3.608-5.964 3.569v6.499l-6 3.224v7.216l6.136 3.492 5.864-3.393 5.864 3.393 6.136-3.492v-7.177l-6-3.3zm-1.143.036l-4.321 2.384v-4.956l4.321-2.539v5.111zm-4.895-8.71l4.272 2.596-4.268 2.509-4.176-2.554 4.172-2.551zm-10.172 12.274l4.778-2.53 4.237 2.417-4.668 2.667-4.347-2.554zm4.917 3.587l4.722-2.697v5.056l-4.722 2.757v-5.116zm6.512-3.746l4.247-2.39 4.769 2.594-4.367 2.509-4.649-2.713zm9.638 6.323l-4.421 2.539v-5.116l4.421-2.538v5.115z",
    title: "Media Relations",
    text: "The price need not be monetary it can simply be what is exchanged for the product or services energy or any sacrifices consumers make in order to acquire a product or service.",
    categories: ["Seasonal Campaigns", "Digital Marketing", "Sponsorships"],
    delay: "0.15s",
    iconColorClass: "color-2",
  },
  {
    id: 3,
    path: "M6.676 9.18c-1.426-.009-3.217.764-4.583 2.13-.521.521-.979 1.129-1.333 1.812 1.232-.933 2.547-1.225 4.086-.361.453-1.199 1.056-2.418 1.83-3.581zm8.154 8.143c-1.264.826-2.506 1.422-3.581 1.842.863 1.54.571 2.853-.361 4.085.684-.353 1.291-.812 1.812-1.334 1.37-1.369 2.144-3.165 2.13-4.593zm5.127-13.288c-.344-.024-.681-.035-1.011-.035-7.169 0-11.249 5.465-12.733 9.86l3.939 3.94c4.525-1.62 9.848-5.549 9.848-12.642 0-.366-.014-.74-.043-1.123zm-8.24 8.258c-.326-.325-.326-.853 0-1.178.325-.326.853-.326 1.178 0 .326.326.326.853 0 1.178-.326.326-.853.326-1.178 0zm2.356-2.356c-.651-.65-.651-1.706 0-2.357s1.706-.651 2.356 0c.651.651.651 1.706 0 2.357-.65.65-1.704.65-2.356 0zm-12.432 10.378l-.755-.755 4.34-4.323.755.755-4.34 4.323zm4.149 1.547l-.755-.755 3.029-3.054.755.755-3.029 3.054zm-5.035 2.138l-.755-.755 5.373-5.364.756.755-5.374 5.364zm21.083-14.291c-.188.618-.673 1.102-1.291 1.291.618.188 1.103.672 1.291 1.291.189-.619.673-1.103 1.291-1.291-.618-.188-1.102-.672-1.291-1.291zm-14.655-6.504c-.247.81-.881 1.443-1.69 1.69.81.247 1.443.881 1.69 1.69.248-.809.881-1.443 1.69-1.69-.81-.247-1.442-.88-1.69-1.69zm-1.827-3.205c-.199.649-.706 1.157-1.356 1.355.65.199 1.157.707 1.356 1.355.198-.649.706-1.157 1.354-1.355-.648-.198-1.155-.706-1.354-1.355zm5.387 0c-.316 1.035-1.127 1.846-2.163 2.163 1.036.316 1.847 1.126 2.163 2.163.316-1.036 1.127-1.846 2.162-2.163-1.035-.317-1.845-1.128-2.162-2.163zm11.095 13.64c-.316 1.036-1.127 1.846-2.163 2.163 1.036.316 1.847 1.162 2.163 2.197.316-1.036 1.127-1.881 2.162-2.197-1.035-.317-1.846-1.127-2.162-2.163z",
    title: "Online Advertising",
    text: "This refers to how the product gets to the custome and intermediaries such as wholesalers and retailers who enable customers to access products or services in a convenient manner.",
    categories: [
      "Experiential Marketing",
      "Event Marketing",
      "Seasonal Campaigns",
    ],
    delay: "0.3s",
    iconColorClass: "color-1",
  },
  {
    id: 4,
    path: "M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z",
    title: "Social Media",
    text: "In response to environmental and technological changes in marketing, as well as criticisms towards the 4Ps approach, the 4Cs has emerged as a modern marketing mix model.",
    categories: ["Content Generation", "Copywriting", "SMO Strategy"],
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
          <svg
            aria-hidden="true"
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={path} />
          </svg>
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
