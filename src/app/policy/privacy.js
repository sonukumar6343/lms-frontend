const cookiesInfo = [
    {
      title: "What are Cookies?",
      description:
        "This site uses cookies, which are little files downloaded to your computer, as is customary with almost all professional websites, to enhance your experience. This page explains the data they collect, how we use it, and why we occasionally need to keep certain cookies. We'll also explain how to stop these cookies from being saved, but doing so may degrade or 'break' some aspects of the website's operation. Visit the HTTP Cookies page on Wikipedia for more information about cookies in general.",
    },
    {
      title: "How we use Cookies?",
      description:
        "We employ cookies for several reasons listed below. Sadly, there are typically no industry-standard methods for blocking cookies without also blocking the functionality and benefits they give our site. If you're unsure if you need a particular cookie—one that is used to provide a service you use—it is advised that you leave it on.",
    },
    {
      title: "Disabling Cookies",
      description:
        "You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Therefore, it is recommended that you do not disable cookies.",
    },
    {
      title: "The Cookies We Set",
      description:
        "We use cookies for various features such as account and login management, subscription status, e-commerce functionality, surveys/quizzes, forms, and site preferences.",
      examples: [
        
        "Account Management: Used for signup process and basic administration.",
        "Login Management: Keeps you logged in; reset after logout.",
        "Subscriptions: Remembers newsletter or alert preferences.",
        "E-commerce: Helps remember your order and manage payments.",
        "Surveys and Quizzes: Tracks participation and result accuracy.",
        "Forms: Saves your form input for future interactions.",
        "Site Preferences: Remembers preferences to enhance your experience.",
      ],
    },
    {
      title: "Third-Party Cookies",
      description:
        "We occasionally use third-party cookies from trusted sources to enhance functionality and analytics.",
      examples: [
        "Google Analytics: Understands how users interact with the site.",
        "Google AdSense: Shows relevant ads and caps repetition.",
        "Behavioral Advertising: Delivers personalized ads based on browsing.",
        "Affiliate Tracking: Tracks referrals from partner sites.",
        "Social Media Plugins: Enables social sharing and login features.",
      ],
    },
    {
      title: "Google User Data Use",
      description:
        "We use Google user data in compliance with Google's policies to support features like live streaming and integration with Google services.",
      details: [
        {
          heading: "What Google User Data We Access",
          content:
            "We access data for YouTube Live streaming and Google Partner app integration.",
        },
        {
          heading: "How We Use Google User Data",
          content:
            "To enable live classes via YouTube Live and enhance LMS features with Google integration.",
        },
        {
          heading: "Who We Share Google User Data With",
          content:
            "We do not share Google user data with third parties, unless required by law or for integration purposes.",
        },
        {
          heading: "Data Protection Mechanisms",
          content:
            "All data is encrypted and stored securely using industry-standard practices.",
        },
        {
          heading: "Data Retention and Deletion",
          content:
            "Data is retained only as needed and can be deleted upon user request.",
        },
      ],
    },
    {
      title: "More Information",
      description:
        "It is generally safer to leave cookies enabled for a better user experience. If you'd like more information or need help with disabling cookies, feel free to contact us.",
    },
    {
      title: "Like to Connect with us?",
      contact: {
        email: "support@nrichlearning.com",
        phone: "+91 7009076561",
      },
    },
  ];
  
const Policy = () => {
    return (
        <div className="bg-[#F8F9FA] ">
  <div className="container max-w-8xl mb-10 mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
    <h2 className="text-xl font-semibold text-[#007EF3]">Nrich Learning Cookies Policy</h2>

    {cookiesInfo.map((info, index) => (
      <div key={index} className="p-2 ">
        {/* Custom Layout for "The Cookies We Set" title */}
        {info.title === "The Cookies We Set" ? (
          <>
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-black">{info.title}</h2>
              <p className="text-[#545353] mt-1 xl:w-[90em]">{info.description}</p>
            </div>
          </>
        ) : (
          <>
            {info.title && (
              <h2 className="text-xl font-semibold mb-2 text-black">{info.title}</h2>
            )}

            {info.description && (
              <p className="text-[#545353] mb-2 xl:w-[90em]">{info.description}</p>
            )}
          </>
        )}

        {Array.isArray(info.examples) && (
  <ul className="list-disc space-y-3 list-inside text-gray-600">
    {info.examples.map((example, i) => {
      const [boldTitle, ...rest] = example.split(':');
      return (
        <li key={i}>
          <strong>{boldTitle}:</strong>{rest.join(':')}
        </li>
      );
    })}
  </ul>
)}


        {info.details && (
          <div className="space-y-2 mt-2">
            {info.details.map((detail, j) => (
              <div key={j}>
                <h3 className="font-medium text-gray-800">{detail.heading}</h3>
                <p className="text-gray-600">{detail.content}</p>
              </div>
            ))}
          </div>
        )}

        {info.contact && (
          <div className="text-gray-700 mt-2">
            <p><strong>Email:</strong> {info.contact.email}</p>
            <p><strong>Phone:</strong> {info.contact.phone}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

    )      
  };
  
  export default Policy;
  