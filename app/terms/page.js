export const metadata = {
  title: "Terms & Conditions | Khushi Stone",
  description: "Terms and Conditions of Khushi Stone Factory.",
};

export default function TermsPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
          Terms & Conditions
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Effective Date: <strong>January 1, 2025</strong> | Last Updated:{" "}
          <strong>October 9, 2025</strong>
        </p>

        <ol className="list-decimal pl-6 space-y-10 text-lg leading-relaxed">
          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Products and Materials
            </h2>
            <p className="text-gray-700 text-justify">
              All products supplied by Khushi Stone — including granite slabs and
              tiles — are natural materials. Variations in color, pattern, and
              texture are inherent. Samples are representative only and may differ
              slightly from the final material.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Quotations and Pricing
            </h2>
            <p className="text-gray-700 text-justify">
              All quotations are valid for <strong>15 days</strong> from the date
              of issue unless otherwise stated. Prices are subject to change based
              on market conditions, transportation costs, or government duties.
              Applicable taxes such as GST will be charged as per prevailing laws.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Orders and Payments
            </h2>
            <p className="text-gray-700 text-justify">
              Orders are confirmed only upon receipt of an advance payment or
              purchase order. The remaining balance must be cleared before
              dispatch. Payments are accepted via bank transfer, UPI, or other
              approved methods.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Delivery and Transportation
            </h2>
            <p className="text-gray-700 text-justify">
              While we ensure safe loading and dispatch, Khushi Stone is not
              responsible for transit damages or delays once goods leave our
              premises. Delivery dates are estimates and may vary due to
              unforeseen logistics or weather conditions.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Returns and Replacements
            </h2>
            <p className="text-gray-700 text-justify">
              Granite is a natural product and returns are not accepted.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Quality and Inspection
            </h2>
            <p className="text-gray-700 text-justify">
              Clients are encouraged to inspect material before dispatch. Once
              installation begins, complaints related to natural variations or
              improper fixing will not be accepted.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Intellectual Property
            </h2>
            <p className="text-gray-700 text-justify">
              All content, designs, and images on our website are the property of
              Khushi Stone and cannot be copied, reproduced, or used without
              written permission.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 text-justify">
              Khushi Stone shall not be liable for indirect or consequential
              damages arising from product use. Our liability is limited to the
              value of goods sold.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">Jurisdiction</h2>
            <p className="text-gray-700 text-justify">
              All disputes are subject to the jurisdiction of{" "}
              <strong>Bangalore, Karnataka (India)</strong> courts only.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-blue-900 mb-2">
              Contact Information
            </h2>
            <div className="text-gray-700 text-justify space-y-1">
              <p>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:khushistone2012@gmail.com"
                  className="text-blue-900 hover:underline"
                >
                  khushistone2012@gmail.com
                </a>
              </p>
              <p>
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+918105979801"
                  className="text-blue-900 hover:underline"
                >
                  +91 81059 79801
                </a>
              </p>
              <p>
                🏭 <strong>Address:</strong> Khushi Stone, Bangalore Rural,
                Karnataka, India
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
