"use client";
import React from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Page = () => {
  const router = useRouter()
  const navigateToTutorPage = () => {
    window.open('https://tutor.edukoya.com/', '_self')
  }
  return (
    <>
      <section style={{ backgroundColor: '#112BF4' }} className='p-20 px-10 md:px-40 space-y-20'>
        <div className='flex justify-between items-center'>
          <div>
          <Image width={100} height={100} alt="edukoya logo" className='cursor-pointer' onClick={() => router.push('/')} src='/icons/logo.svg' />
          </div>
          <div className='flex items-center space-x-16'>
            <button onClick={navigateToTutorPage} className='font-bold text-white'>Login</button>
            <button onClick={navigateToTutorPage} className='text-blue-700 font-semibold bg-white px-10 py-4 rounded-lg'>Sign up</button>
          </div>

        </div>
        <h1 className='text-white font-semibold text-6xl'>Our Privacy Policy.</h1>
      </section>
      <main className='w-10/12 mx-auto mt-10 text-3xl space-y-10 pb-10 leading-relaxed'>
        <p className="">Last updated: June 4th, 2023</p>
        <div className="space-y-6">
          <h3>Data protection declaration</h3>
          <ul className="list-disc space-y-3 text-3xl pl-10">
            <li>for the use of the website</li>
            <li>for the newsletter subscription</li>
            <li>for pupils and their the legal guardian(s) regarding our services and our tutors’ services, including telephone contact and accounting</li>
            <li>for tutors, including their acceptance test</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h1 className="font-semibold">1. Who is responsible for data processing?</h1>
          <div className="pl-6">
            <p>The body responsible for data processing is Edukoya Nigeria Limited</p>
            <p>Business address: 374 Borno way, Alagomeji, Yaba, Lagos State.</p>
            <p>CAC register No: 1781641</p>
            <p>Email: dataprivacy @edukoya.com</p>
            <p>The language used in this data protection declaration is intended to be gender neutral.</p>
          </div>
        </div>


        <div className="space-y-10">
          <h1 className="font-semibold">2. If you use our website as a user, in particular when making requests or enquiries or using the community area</h1>
          <div className="pl-10">
            <p>This data protection declaration applies to our websites at the following domains:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>edukoya.com</li>
              <li>tutor.edukoya.com</li>
            </ul>

          </div>
          <div className="space-y-6">
            <h3 className="font-semibold">2.1. What data is processed and where does it come from?</h3>
            <div className="pl-10">
              <p>We process the personal data you provide to us when using the website. You are required to provide us with this data to process your requests or enquiries or to use the community area (contractually). If you do not provide us with the personal data in question, we will not be able to process your enquiry or allow use of the community area.</p>
              <p>In addition, as part of the purposes given above, we process data that we generate for you as a user of our website and/or community, namely:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>Date, employee and contents of the enquiry response</li>
                <li>Date, person asking the question and responder and metadata and contents required for use of the community area</li>
              </ul>
              <small>Please note that information about any cookies we use on the website is provided as part of our cookie tool <span><a href="https://www.cookiebot.com/">https://www.cookiebot.com</a></span></small>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold">2.2. What is the legal basis for data processing?</h3>
            <p className="pl-14">To fulfill contractual obligations (Article 6 (1)(b) GDPR) Personal data is processed in order to fulfill our contractual obligations as part of the use of the community area.</p>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold">2.3. With whom is your data shared?</h3>
            <div className="pl-9">
              <p>We transmit personal data to authorized data processors if this is necessary within the scope of the above purposes. All data processors are contractually obliged to treat your data confidentiality and to process it only within the scope of the above-mentioned purposes:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>Amazon AWS: South Dublin Data Center (Ireland): hosting</li>
                <li>Google Ireland Limited (Ireland): traffic analysis</li>
                <li>Pipedrive Inc.(USA; standard contractual clauses concluded): customer relationship management (CRM)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold">2.4. For how long will your data be processed and stored?</h3>
            <div className="pl-12">
              <p >We store your data for:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>the purpose of responding to enquiries for any claims for damages for three years after the completion of the response;</li>
                <li>the purpose of using the community area for as long as you are a community member and beyond that for any claims for damages for three years.</li>
              </ul>
            </div>
          </div>

        </div>


        <div className="space-y-10">
          <h3 className="font-semibold">3. If you subscribe to our pupil or tutor e-newsletter</h3>

          <div>
            <h3 className="font-semibold">3.1. What data is processed and where does it come from?</h3>
            <div className="pl-10">
              <p>We process the personal data you provide to us when subscribing/consenting to the newsletter in question. You are required to provide us with this data to receive the newsletter. If you do not provide us with the personal data in question, we will not be able to send you either newsletter. In addition, as part of the purposes given above, we process data that we generate for you as a user of our newsletters, namely</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>data on consent or possible revocation (“unsubscribe”)</li>
                <li>data for sending the respective newsletter</li>
                <li>your use of the respective newsletter (opening or click behavior)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">3.2. What is the legal basis for data processing?</h3>
            <div className="space-6 pl-14">
              <p>On the basis of your express consent, which can be revoked at any time (Article 6 (1) (a) GDPR)</p>
              <p>Personal data is processed on the legal basis of your consent, which can be revoked at any time. The revocation can be made as follows (at least as easily as giving consent): via an unsubscribe link in each newsletter.</p>
            </div>
          </div>

          <div className="space-y3">
            <h3 className="font-semibold">3.3. With whom is your data shared?</h3>
            <div className="pl-14 space-y-3">
              <p>We transmit personal data to authorized data processors if this is necessary within the scope of the above purposes. All data processors are contractually obliged to treat your data confidentiality and to process it only within the scope of the above-mentioned purposes:</p>
              <ul className="list-disc pl-6">
                <li>Rocket Science Group Inc. (USA, standard contractual clauses concluded): email dispatch</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">3.4. For how long will your data be processed and stored?</h3>
            <p className="pl-10">We store/process your data - until your newsletter subscription is canceled - for the purpose of revocation management or for any claims for damages for three years from revocation</p>
          </div>

        </div>



        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="font-semibold">4. If you as a pupil (and as their legal guardian) make use of our services or the services of the tutors</h3>
            <div className="space-y-6 pl-10">
              <p>We operate a platform for pupils (or their legal guardians) who are looking for support and for tutors. Therefore, on the one hand, platform contracts with pupils (or possibly their legal guardians) and agency contracts with tutors are concluded via our platform; pupils (or possibly their legal guardians) and tutors also conclude teacher contracts directly.</p>
              <p>The tutoring sessions take place on the basis of the teacher contracts between tutors and pupils via whereby online video conferences (the whereby service provider sends automated meeting links and automatically collects data on participation in the conferences).</p>
              <p>To ensure transparency, this data protection information also includes information regarding the processing of the pupil’s personal data (or possibly that of their legal guardians) by the tutors with regard to their fulfillment of the teacher contract with the pupils. </p>
              <p>Since this processing is largely carried out via our platform, we act as a data processor for the tutors. Insofar as Edukoya has to process data in order to fulfill Edukoya’s contractual obligations, Edukoya acts on its own responsibility. Unless explicitly otherwise distinguished below, the information applies both to the processing by us as the body responsible for data protection and to the processing by the tutors as the person(s) responsible under data protection law.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold">4.1. What data do we process (including tutors, unless otherwise stated) and where does it come from?</h3>
            <div className="space-y-3 pl-10">
              <p>We process the personal data that you provide to us as a pupil or their legal guardian about the pupil or yourself for the provision of services. You providing this information is on the one hand contractually necessary to conclude the agreements between you (as a pupil or legal guardian) and us and between you and the tutor for the agreed provision of services and on the other hand legally necessary, in particular to fulfil our accounting obligations. This also includes any data in connection with the payment of our services (see below for our payment service provider, Stripe). If you do not provide us with your relevant personal data, we cannot enter into or fulfil a contract with you.</p>
              <p>In addition, we process personal data that we generate for you as part of our provision of services or from the sources mentioned, namely: - Service provision data for billing purposes (generated by us or meeting participation data generated by whereby) - Invoice data to fulfil our accounting obligations (generated by us or payment confirmations from Stripe) - Any correspondence and telephone contact (support requests) related to the provision of Edukoya services</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">4.2. What is the legal basis for data processing?</h3>
            <div className="space-y-6 pl-10">
              <p>We process your personal data to fulfil our contractual obligations, including support requests, and to comply with any other associated legal obligations, in particular under any corporate and tax law:</p>
              <p>To fulfil contractual obligations (Article 6 (1)(b) GDPR) <br /> Personal data is processed to fulfil our contractual obligations, in particular to fulfil our contracts with you. The purpose of data processing for the fulfilment of the contract is primarily to process the learning service we offer.</p>
              <p>To fulfil legal obligations (Article 6 (1)(c ) GDPR) <br /> We also process your personal data for the purpose of complying with various legal obligations to which we are subject, in particular under corporate and tax law.</p>
              <p>To protect legitimate interests (Article 6 (1)(f) GDPR) <br /> We process personal data to protect our legitimate interests, unless your interests in confidentiality override these. In the following cases, data processing is carried out to safeguard legitimate interests: - Advertising and marketing to existing contractual partners</p>
              <p>You can object to the processing of personal data on the basis of legitimate interests — see below on data subject rights.</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">4.3. With whom is your data shared?</h3>
            <div className="pl-10">
              <p>Edukoya transmits your personal data to the respective tutor as part of the mediation of the tutor agreement.</p>
              <p>In addition, we engage data processors if this is necessary to fulfill the service in question. All data processors are contractually obliged to treat your data confidentiality and to process it only within the scope of our assignment. We engage the following data processors:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Amazon Web Services (Germany): hosting</li>
                <li>Videonor AS (Norway ; standard contractual clauses (SCC) concluded): holding the video sessions</li>
                <li>If you use WhatsApp outside the EEA: Whatsapp LLC (USA, Standard Contractual Clauses (SCC) concluded): communication channel between tutors on the one hand and between tutors and parents or students on the other hand</li>
                <li>If you use WhatsApp in the EEA: WhatsApp Ireland Limited: communication channel between tutors on the one hand and between tutors and parents or students on the other hand</li>
                <li>TERMII INC. Pty Ltd. (USA, standard contractual clauses (SCC) concluded): SMS dispatch for login codes</li>
                <li>Pipedrive Inc.. (USA; standard contractual clauses (SCC) concluded): customer relationship management (CRM)</li>
                <li>CloudTalk (Slovakia, standard contractual clauses (SCC) concluded): VOIP (voice over IP) telecommunications</li>
              </ul>
            </div>
          </div>


          <div className="space-y-6">
            <h3 className="font-bold">4.4. Payment service provider</h3>
            <p className="pl-10">We use Stripe Payments Europe Limited (‘Stripe’) as a payment service provider, which receives the credit card data entered by you and the billing data from us to process the payment services. The processing of this data for payment processing then takes place under Stripe’s own data protection responsibility (see their data protection information: <a href="https://stripe.com/at/privacy">https://stripe.com/at/privacy</a>). We do not store your credit card data, only a Stripe ID, which we can use to initiate further payments with Stripe.</p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-bold">5. If you use our services as a tutor or provide your services to students through us as a tutor</h3>
            <p className="pl-10">Insofar as Edukoya processes data to fulfil Edukoya’s contractual obligations with the tutor, Edukoya acts on its own responsibility. In addition, as an intermediary platform, we process the tutor’s data on our own responsibility:</p>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold">5.1 What data is processed and where does it come from?</h3>
            <div className="space-y-3 pl-10">
              <p>We process the personal data that you provide to us as a tutor. You providing this information is on the one hand contractually necessary to conclude the agreements between you as a tutor and us and between you as a tutor and the pupil for the agreed provision of services and on the other hand legally necessary, in particular to fulfil our accounting obligations. This also includes any data in connection with the payment of the services (see below for our payment service provider). If you do not provide us with your relevant personal data, we cannot enter into or fulfil a contract with you</p>
              <p>In addition, we process personal data that we generate for you as part of our provision of services or from the sources mentioned, namely:</p>
              <ul className="list-disc space-y-6 pl-6">
                <li>Quiz data to test tutor suitability (entered by you and partly generated by us, always subject to human review and assessment)</li>
                <li>For tutors we collect an equivalent identity card, national certificate from the tutor’s country of residence — with an English translation where possible). The tutors must send the current certificate together with the corresponding form and a photo ID. The documents are checked to ensure they are up to date and valid, and then released</li>
                <li>Service provision data for billing purposes (generated by us or meeting participation data generated by whereby)</li>
                <li>Invoice data to fulfil our accounting obligations (generated by us or payment confirmations from our payment service provider)</li>
                <li>Any correspondence and telephone enquiries (support requests) related to the tutors’ provision of services</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold">5.2 What is the legal basis for data processing?</h3>
            <div className="space-y-6 pl-10">
              <p>We process your personal data to fulfil our contractual obligations, including support requests, and to comply with any other associated legal obligations, in particular under corporate and tax law:</p>
              <p>To fulfil contractual obligations (Article 6 (1)(b) GDPR) <br /> Personal data is processed to fulfil our contractual obligations, in particular to fulfil our contracts with you. The purpose of data processing for the fulfilment of the contract is primarily to process the learning service we offer.</p>
              <p>To fulfil legal obligations (Article 6 (1)(c ) GDPR) <br /> We also process your personal data for the purpose of complying with various legal obligations to which we are subject, in particular under corporate and tax law.</p>
              <p>To protect legitimate interests (Article 6 (1)(f) GDPR) <br /> We process personal data to protect our legitimate interests, unless your interests in confidentiality override these.</p>
              <p>In the following cases, data processing is carried out to safeguard legitimate interests:</p>
              <ul className="list-disc pl-10">
                <li>Advertising and marketing to existing contractual partners (tutors)</li>
              </ul>
              <p>You can object to the processing of personal data on the basis of legitimate interests — see below on data subject rights.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold">5.3. With whom is your data shared?</h3>
            <div className="space-y-6 pl-10">
              <p>Edukoya transmits your personal data to the respective pupil (i.e. your contractual partner) as part of the mediation of the tutor agreement.</p>
              <p>In addition, we engage data processors if this is necessary to fulfil the service in question. All data processors are contractually obliged to treat your data confidentially and to process it only within the scope of our assignment. We engage the following data processors:</p>
              <ul className="list-disc pl-6 space-y-6">
                <li>Amazon Web Services (Germany): hosting</li>
                <li>Videonor AS (Norway ; standard contractual clauses (SCC) concluded): holding the video sessions</li>
                <li>If you use WhatsApp outside the EEA: Whatsapp LLC (USA, Standard Contractual Clauses (SCC) concluded): communication channel between tutors on the one hand and between tutors and parents or students on the other hand</li>
                <li>If you use WhatsApp in the EEA: WhatsApp Ireland Limited: communication channel between tutors on the one hand and between tutors and parents or students on the other hand</li>
                <li>TERMII INC. Pty Ltd. (USA, standard contractual clauses (SCC) concluded): SMS dispatch for login codes</li>
                <li>Pipedrive Inc.. (USA; standard contractual clauses (SCC) concluded): customer relationship management (CRM)</li>
                <li>CloudTalk (Slovakia, standard contractual clauses (SCC) concluded): VOIP (voice over IP) telecommunications</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold">5.4. Payment service provider</h3>
            <p className="pl-10">We use Access Bank PLC  Victoria Island, Lagos; Lagos State, Nigeria as a payment service provider, which receives the bank details entered by you and the billing data from us to process the payment services. The processing of this data for payment processing then takes place under Access bank PLC Nigeria own data protection responsibility (see their data protection information:</p>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold">5.5. For how long will your data be processed and stored?</h3>
            <p className="pl-10">We store the personal data (including the quiz and identity data) necessary for the fulfilment of the contract at least for the duration of the entire business relationship as a tutor as well as in accordance with the statutory retention and documentation obligations (e.g. in accordance with the  Nigerian Commercial Code or the Federal Fiscal Code), as a rule for seven years.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold">6. If you are a Edukoya applicant or employee</h3>
            <p className="pl-10">We process the data you provide to us as part of the application process for employment with Edukoya. We also process personal data related to employment with Edukoya.</p>
          </div>

          <div>
            <h3 className="font-bold">6.1. What data is processed and where does it come from?</h3>
            <div className="pl-10 space-y-6">
              <p>If you apply for a vacancy at Edukoya, we will process the application documents you send us.</p>
              <p>In the context of your employment with Edukoya, we process all data that you provide to us as an employee or that is generated in the course of the employment relationship. You providing this information is on the one hand necessary for fulfilment of the contract and on the other hand legally necessary, in particular to fulfil our accounting obligations and tax and social security obligations.</p>
            </div>
          </div>


          <div>
            <h3 className="font-bold">6.2. What is the legal basis for data processing?</h3>
            <div className="space-y-6 pl-10">
              <p>On the basis of your express consent, which can be revoked at any time (Article 6 (1)(a) GDPR) Application documents are processed on the basis of your consent in accordance with Article 6 (1)(a) GDPR. The same applies to data that you provide in the employment relationship based on your voluntary consent.</p>
              <p>To fulfil contractual obligations (Article 6 (1)(b) GDPR) <br /> Personal data is processed to fulfil our contractual obligations, in particular to fulfil our contracts with you. The purpose of data processing for the fulfilment of the contract is primarily the payment of remuneration and the provision of other contractual services as well as the associated personnel management</p>
              <p>To fulfil legal obligations (Article 6 (1)(c ) GDPR) <br /> We also process your personal data for the purpose of complying with various legal obligations to which we are subject, in particular under corporate, social security and tax law.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold">6.3. With whom is your data shared?</h3>
            <div className="space-y-6 pl-10">
              <p>Edukoya transmits the processed data to the respective employees. Within the scope of legal obligations, the data will be transmitted to the competent tax authorities, social security institutions and other authorities, insofar as this is legally required.</p>
              <p>In addition, we engage data processors if this is necessary to fulfil the service in question. All data processors are contractually obliged to treat your data confidentially and to process it only within the scope of our assignment. We engage the following data processors:</p>
              <ul className="list-disc space-y-4 pl-6">
                <li>DocuSign, Inc. (USA, standard contractual clauses concluded): signatures</li>
                <li>Bento HR (Africa): personnel information and payment system (admin tool for all employees)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3>6.4. For how long will your data be processed and stored?</h3>
            <p className="pl-10">We store the personal data necessary for the fulfillment of the contract at least for the duration of the entire employment relationship as well as in accordance with the statutory retention and documentation obligations (e.g. in accordance with the Nigerian data protection laws or the Federal Fiscal Code), as a rule for seven years.</p>
          </div>
        </div>

        <div className="space-y-10">
          <h3 className="font-bold">7. What are your rights?</h3>
          <div className="space-y-6 pl-10">
            <p>In this context, it should be noted that Edukoya operates an intermediary platform between pupils (and possibly their legal guardians) and tutors. In order to ensure transparency, this data protection information also includes information regarding the processing of the personal data of the pupil (and possibly their legal guardians) by the tutors as the responsible persons. The rights of the data subject described below can be asserted against the person responsible for processing the personal data, i.e. Edukoya or the respective tutor.</p>


            <p><b>Right of withdrawal</b> <br />If we process your personal data on the basis of your consent, you have the right to withdraw your consent at any time. Revoking your consent does not affect the legality of the processing carried out on the basis of the consent up to the revocation. You will be informed of this before giving your consent. The withdrawal of consent must be as easy as giving consent.</p>
            <p><b>Right to information</b> <br />If we process your personal data, you have the right to information about the purposes of the processing, the categories of personal data processed, the recipients of this personal data, the storage period, the rights to which you are entitled, the origin of the personal data and the possible existence of automated decision-making.</p>
            <p><b>Correction and erasure</b> <br /> You have the right to request the correction of incorrect or incomplete personal data concerning you. You are entitled to request the erasure of personal data concerning you, provided that the processing of the data is not lawful and there are no legal obligations on our part to prevent the erasure.</p>
            <p><b>Restriction of processing</b> <br /> You are entitled to demand that the processing of your data be restricted in certain cases.</p>
            <p><b>Data portability</b> <br /> You have the right to request the transfer of the data that you have provided to us in a structured, common and machine-readable format. You have the right to have the personal data transferred by us directly to a responsible person named by you, insofar as this is technically feasible.</p>
            <p><b>Objection</b> <br /> You have the right to object to the processing of personal data concerning you at any time on grounds relating to your particular situation. If you object, we will no longer continue to process personal data relating to you unless we can demonstrate that our reasons for processing outweigh your interests. You can object to the use of your personal data for advertising purposes at any time, in which case we will stop processing your data for advertising purposes. To exercise your rights with regard to your data processed by us, please contact hello@edukoya.com</p>
            <p><b>Complaint</b> <br />You have the right to lodge a complaint to the data protection supervisory authorities Information Commissioner’s Office</p>
            <p>Great Britain <br />
              +44 303 123 1113 or<br />
              +44 162 554 5860<br />
              E-mail: icocasework@ico.org.uk<br />
              if you believe that your data protection rights are being violated.
            </p>
          </div>
        </div>

      </main>
    </>
  );
};

export default Page;
