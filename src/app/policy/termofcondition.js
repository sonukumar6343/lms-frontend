const termsOfUseInfo = [
  {
    title: "Terms of Use",
    description: `The day you accept and begin using Nrich Learning services or technology is the effective date of this agreement, which is referred to as the Terms of Service or Software Services Agreement. Normally, it is addressed to you personally or to the organization, you are serving, and it is with Nrich Learning.

The underlying agreement explains the legal and non-legal responsibilities that arise between Nrich Learning and You, the Client, or the Entity, as the case may be. When clicking the I Agree to button as well as using Nrich Learning services, you are formally consenting to the ToS or Terms of Service.

Nrich Learning retains the ability to add new terms or alter any existing clauses. When something happens, you will also be notified via the mode of communication that you prefer within a good amount of time after the new clause takes effect. Your subsequent use of Nrich Learning services following the introduction of a change in policy on the website and communication to you by a broadcast of the same changes is considered as your consent to the change(s)`,
  },
  {
    title: "Terms of the Agreement",
    description: `You could represent The Client; The Individual or The Entity and Nrich Learning represent The Company. Nrich Learning retains the ability to add new terms or alter any existing clauses. When something happens, you will be notified via the mode of communication that you prefer within a good amount of time after the new clause takes effect. .`,
  },
  {
    title: "License",
    description: `You are hereby granted a limited license to use Nrich Learning software. This right is not assignable and cannot be sublicensed or sold without the Company's express written consent. When you use the service for trial purposes, you also consent to the company's right to revoke its provision of the software to you at any time, including after the trial period has ended.

The company may instantly stop you from using the services or the software with or without formal notice if it discovers at any time that the user has used them in an unauthorized way or misrepresented the company or its services. The use of the services thereafter is done so with express consent, on an "As Is Basis," and relieves the provider from any responsibilities that would be prohibited. Additionally, you hold the business harmless from any material text or display that uses that you enter or save using the offered services. Also, you are considered the real owner of any information you enter or store by using services. By agreeing to the terms, you confirm that the firm provides its services or subscriptions "as is" and that your use of the service may depend on other platforms or mediums, such as your broadband internet, wifi, and/or mobile data from other service providers. Any interruption of these channels is not in any way considered a defect of the company's services, and the company retains the right to charge you the applicable and accepted cost during any such disruptions.`,
  },
  {
    title: "Service Tax & Fee",
    description: `The cost of Nrich Learning services is open to change at any time in the future...`,
  },
  {
    title: "Data",
    description: `To provide the finest services falling under the scope of this agreement...`,
  },
  {
    title: "Confidentiality",
    description: `Any and or all data exchanged between the parties is considered as data and is governed by the existing confidentiality policy...`,
  },
  {
    title: "Inferring Information",
    description: `The company does not recognize any of the information that you may otherwise derive or decipher...`,
  },
  {
    title: "Rights",
    description: `The company owns all ownership rights to all trademarks, intellectual property, and patents...`,
    contact: {
      email: "support@nrichlearning.com",
    },
  },
];

const TermOfCondition = () => {
  return (
    <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 ">
      <h2 className=" text-xl font-semibold text-[#007EF3]">
        Terms & Conditions
      </h2>
      {termsOfUseInfo.map((info, index) => (
        <div key={index} className="p-4 border-b border-gray-200">
          {info.title && (
            <h2 className="text-xl font-semibold mb-2 text-black">
              {info.title}
            </h2>
          )}
          {info.description && (
            <p className="text-[#545353] mb-2">{info.description}</p>
          )}

          {info.contact && (
            <div className="text-gray-700 mt-2">
              <p>
                <strong>Email:</strong> {info.contact.email}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermOfCondition;
