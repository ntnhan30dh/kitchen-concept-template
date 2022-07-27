import React from "react"
//import Header from "../components/header"
//import Footer from "../components/footer"

import "../styles/index.scss"
import 'semantic-ui-css/semantic.min.css'

import {MenuProvider} from "../components/context/menuContext"
import {StyleProvider} from "../components/context/styleContext"

export default function Home() {
 
    
  return (
    <div className="pageWrapper">
    <head>
      <title>Kitchen Concept</title>
      </head>
      <StyleProvider>
      < MenuProvider> 
    {/* <Header  />  */}
  </MenuProvider>
      </StyleProvider>
    <div className="legalInfo-div">
        <h1>Privacy Policy</h1>

        <h2>Privacy Notice</h2>
        <p>
          We want to give you an amazing browsing experience on our website. For
          us, an amazing experience means at the same time, to protect your
          personal data in the best way we can. In order to achieve that, we
          want to be as transparent as possible and give you the chance to see
          how, why and where we process your data. This policy gives you an
          overview of: what information we keep on file, how long we intend to
          keep your information, why we are keeping your information, what your
          rights are as a data subject, who the data controller is, where you
          can file a complaint and if we share your information with third
          parties.
        </p>
        <p>
          All information will be processed by the Data Controller: <br />
          Delivery Hero SE <br />
          Oranienburger Straße 70 <br />
          10117 Berlin <br />
          If you require additional information or have any concerns about the
          processing of your personal data please contact us by email at:
          dpo@deliveryhero.com
        </p>
        <h2>Categories of personal data:</h2>
        <p>
          When you browse our website, we also automatically receive your
          computer’s internet protocol (IP) address in order to provide us with
          information that helps us learn about your browser and operating
          system. We also use cookies or similar technologies to collect extra
          data, including:
        </p>
        <ul>
          <li>
            your IP address - a numerical code to identify your device, together
            with the country, region or city where you are based
          </li>
          <li>
            your geolocation data - your IP address can be used to find
            information about the latitude, longitude, altitude of your device,
            its direction of travel, your GPS data and data about connection
            with local Wi-Fi equipment
          </li>
          <li>information on how you interact with our services</li>
          <li>
            your browsing history of the content you have visited on our sites,
            including how you were referred to our sites via other websites
          </li>
          <li>
            details of your computer, unique vendor or advertising ID and
            browsers used to access our content
          </li>
        </ul>

        <h2>Legal basis</h2>
        <p>
          Our legitimate interest: where it is necessary for us to understand
          our visitors and operate our sites efficiently. Examples of when we
          rely on legitimate interests to use your personal data include:
        </p>
        <ul>
          <li>
            to collect and log IP addresses to improve the website and monitor
            website usage
          </li>
          <li>
            for security and fraud prevention, and to ensure that our sites and
            apps are safe and secure and used in line with our terms of use
          </li>
        </ul>
        <h2>Service providers</h2>
        <p>
          We use different data processors in our daily processing. These
          process your personal data in accordance with the requirements of Art.
          28 GDPR only according to our instructions and have no claims
          whatsoever on these data. We also monitor our processors and include
          only those who meet our high standards.
        </p>
        <p>
          Because we use different data processors and change them from time to
          time, it is not appropriate to identify specific recipients of
          personal information. However, if you are interested, we will be happy
          to disclose the name of the processor(s) in use at that time upon
          request.
        </p>
        <h2>Processing in third countries</h2>
        <p>
          We process your data mainly within the European Union (EU) and the
          European Economic Area (EEA). However, some of our service providers
          mentioned above are based outside the EU and the EEA.
        </p>
        <p>
          Before we transfer your personal data to any third parties, we
          carefully assess if these companies have adequate security measures in
          place and if they meet the requirements outlined by GDPR.
        </p>
        <p>
          Only if they can demonstrate an adequate level of data protection will
          they be shortlisted for service providers.
        </p>
        <p>
          Regardless of whether our service providers are located within the
          EU/EEA or in third countries, each service provider must sign a data
          processing agreement with us. Service providers outside the EU/EEA
          must meet additional requirements. According to Art. 44 ff. GDPR
          personal data may be transferred to service providers that meet at
          least one of the following requirements:
        </p>
        <ol>
          <li>
            Commission has decided that the third country ensures an adequate
            level of protection (e.g. Israel and Canada)
          </li>
          <li>Standard data protection clauses adopted.</li>
        </ol>
        <p>
          These are contractual clauses which cannot be modified by the
          contracting parties and in which they undertake to ensure an adequate
          level of data protection.
        </p>

        <h1>Retention Period</h1>
        <p>
          In order to be able to reply to enquiries made through our website, we
          will need to store your data. We will not keep your data for a longer
          period that is needed for the purpose of processing and to comply with
          applicable law.
        </p>
        <h2>Data subjects’ rights</h2>
        <h3>Right to access</h3>
        <p>
          You have the right to be informed which data we store about you and
          how we process this data.
        </p>
        <h3>Right to rectification</h3>
        <p>
          If you notice that stored data is incorrect, you can always ask us to
          correct it.
        </p>
        <h3>Right to erasure</h3>
        <p>
          You can ask us at any time to delete the data we have stored about
          you.
        </p>
        <h3>Right to object to the processing of your data</h3>
        <p>
          You can revoke your consent at any time or object to the further
          processing of your data. This also includes objecting to our
          processing, which we process without your consent but based on our
          legitimate interest.
        </p>
        <p>
          If you do not agree with one of our processing purposes based on our
          legitimate interest or wish to object to it, you may object to the
          processing at any time on grounds relating to the particular
          situation. Please fill in the contact form on our website stating your
          concerns in the comments. In this case we will review the processing
          activity again and either stop processing your data for this purpose
          or explain to you our reasons worth protecting and why we will
          continue with the processing.
        </p>
        <h3>Right of complaint</h3>

        <p>
          If you believe that we have done something wrong with your personal
          data or your rights, you can complain to the appropriate supervisory
          authority at any time.
        </p>
        <p>
          To exercise your rights, you can contact dpo@deliveryhero.com at any
          time.
        </p>
        <p>
          The responsible supervisory authority for Delivery Hero is: <br />
          Berliner Beauftragte für Datenschutz und Informationsfreiheit <br />
          Friedrichstr. 219 <br />
          10969 Berlin <br />
          E-Mail: mailbox@datenschutz-berlin.de
        </p>

        <p>
          You can also send your complaint to the supervisory authority in your
          habitual residence or place of work.
        </p>
        <p>
          If you would like to exercise your rights as a data subject, please do
          not hesitate to contact us under the contact information provided
          above.
        </p>
        <h3>Automated decision-making</h3>
        <p>
          We do not have any processes where decisions are made in an automated
          way having a legal effect or similar effects on you.
        </p>
        <h2>Cookie Information</h2>
        <p>
          In order for your visit to Kitchen Concept website to be attractive and to enable
          the use of certain functions, we use the so-called cookies on various
          pages. Cookies are small text files that are stored in your browser.
          Some of the cookies we use are deleted after the end of the operation
          period of your browser, eg. after the closing of the browser. Other
          cookies remain in your browser and allow us to identify your browser
          on your next visit (permanent cookies). You can configure your browser
          so that you are informed about the setting of cookies and decide
          individually on their acceptance or deviation for specific cases or in
          general. Non-acceptance of cookies may limit the functionality of our
          website.
        </p>
        <p>We classify the cookies in three categories:</p>
        <ul>
          <li>Necessary</li>
          <li>Functionality</li>
          <li>Personalization</li>
        </ul>
        <p>
          We are only using Necessary cookies that are required to navigate our
          site and use its features. Without the use of these cookies, the
          proper functioning of our website is not guaranteed (eg entering text)
          while browsing the pages of the website. In addition, they are cookies
          that collect information about how visitors use our site, for example,
          which pages they visit most often and if they receive error messages.
          They also let our site remember your choices, such as language or
          region, to provide enhanced features. They are also used to store
          information about the consent option where required. No action is
          required from you to activate them.
        </p>
        <h2>Changes to this Privacy Notice</h2>
        <p>
          We reserve the right to modify this privacy notice at any time, so
          please review it frequently. Changes and clarifications will take
          effect immediately upon their posting on the website. If we make
          material changes to this policy, we will notify you here that it has
          been updated, so that you are aware of what information we collect,
          how we use it, and under what circumstances, if any, we use and/or
          disclose it.
        </p>
        <h2>Questions and Contact Information</h2>
        <p>
          If you would like to: access, correct, amend or delete any personal
          information we have about you, register a complaint, or simply want
          more information, please contact us by email at: hello@kitchen-concept.com.
        </p>
      </div>
      < StyleProvider> 
    {/* <Footer/>   */}
  </StyleProvider>
    </div>
  )
}
