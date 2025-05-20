const planOverview = [
    {
      title: "Plan Initiation",
      items: [
        {
          subTitle: "Activation Date",
          content:
            "Your plan commences from the day you accept our terms and conditions, initiating our partnership in enhancing your educational offerings.",
        },
      ],
    },
    {
      title: "Annual Billing and Add-Ons",
      items: [
        {
          content:
            "Our model is based on an annual billing cycle. Institutes can also purchase add-ons at any time during this cycle. The Plan will be valid for one year and the add-ons bought will be valid until the current plan is active.",
        },
      ],
    },
    {
      title: "Cancellation and Renewal",
      items: [
        {
          subTitle: "How to Manage Your Plan",
          content: "",
        },
        {
          subTitle: "Plan Management",
          content:
            "You can manage your plan through the provided channels, such as email or a customer portal. However, the plan and any add-ons are non-refundable once purchased.",
        },
        {
          subTitle: "Processing Period",
          content:
            "Changes to your plan, such as the addition of add-ons, are processed immediately.",
        },
      ],
    },
    {
      title: "Annual Renewal",
      items: [
        {
          subTitle: "Renewal Process",
          content:
            "Your plan and any add-ons will not auto-renew. Near the end of your annual cycle, you will have the option to manually renew and purchase additional add-ons.",
        },
        {
          subTitle: "Updated Pricing",
          content:
            "The renewal of plans and add-ons will be subject to the current pricing at the time of renewal.",
        },
      ],
    },
    {
      title: "Refund and Payment Policy",
      items: [
        {
          subTitle: "No Refund Policy",
          content:
            "Please note that once purchased, neither the annual plan nor any add-ons are eligible for a refund under any circumstances.",
        },
      ],
    },
    {
      title: "Termination of Services",
      items: [
        {
          subTitle: "Ending the Plan",
          content:
            "The user – can decide not to renew the plan. The plan remains active until the end of the current annual cycle.",
        },
        {
          subTitle: "Post-Termination",
          content:
            "Upon the completion of the annual cycle without renewal, access to our platform and its features will end.",
        },
      ],
    },
    {
      title: "Additional Information",
      items: [
        {
          subTitle: "Our Dedication",
          content:
            "We are dedicated to offering high-quality software. Our policies are customized to support continuous service improvement.",
        },
      ],
    },
    {
      title: "Open Communication",
      items: [
        {
          subTitle: "Valued Feedback",
          content:
            "We welcome your queries and feedback about our platform or policies to enhance our services.",
        },
      ],
    },
    {
      title: "Conclusion",
      items: [
        {
          content:
            "Thank you for choosing Nrich Learning. Our policy aims to be transparent and fair, ensuring a smooth and beneficial experience with our platform. If you have any questions or require assistance, our team is always ready to help.",
        },
      ],
    },
  ];
  const Refund = () => {
    return (
      <div className="container max-w-8xl mb-10 mx-auto px-4 sm:px-6 lg:px-10 ">
      <h1 className="text-xl font-semibold text-[#007EF3]">Annual Plan Overview</h1>
        {planOverview.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold text-gray-800 px-2 py-2">{section.title}</h2>
            <ul className="pl-4 list-disc space-y-2 mb-4">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {item.subTitle && (
                    <strong className="text-gray-700">{item.subTitle}: </strong>
                  )}
                  <span className="text-gray-600">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Refund  