import StaticInfoPage from "./StaticInfoPage";

export default function SupportPage() {
    return (
        <StaticInfoPage title="Support">

            <h5 className="fw-bold mt-4 mb-2">Getting help</h5>
            <p>
                TradeX is built and maintained by KNUST students. If you run into a bug, have a
                suggestion, or need help with your account, reach out to the development team at{" "}
                <a href="mailto:support@tradex.knust.edu.gh">support@tradex.knust.edu.gh</a>.
                We aim to respond within one business day.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Common issues</h5>

            <p>
                <strong>I can't log in.</strong> Make sure you're using your full{" "}
                <strong>@st.knust.edu.gh</strong> email address and the password you registered
                with. If you've forgotten your password, use the{" "}
                <a href="/forgot-password">Forgot Password</a> link on the login page.
            </p>

            <p>
                <strong>My listing isn't showing up.</strong> Listings take effect immediately
                after creation. Check your profile page to confirm the listing was saved. If it
                shows there but not in the Marketplace, make sure its status is set to{" "}
                <em>Active</em>.
            </p>

            <p>
                <strong>I'm not receiving messages.</strong> Messages refresh automatically every
                few seconds. If you're still not seeing them, try reloading the page. Also check
                that you haven't accidentally navigated away from the conversation.
            </p>

            <p>
                <strong>My image upload failed.</strong> TradeX accepts JPEG, PNG, WebP, and GIF
                images up to 5 MB each, with a maximum of 5 images per listing. Make sure your
                files are within these limits and try again.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Reporting abuse</h5>
            <p>
                If you encounter a fraudulent listing, an inappropriate message, or any other
                violation of community standards, use the <strong>Report</strong> button on the
                relevant listing or Lost &amp; Found post. Reports are reviewed by the TradeX
                team, typically within 24 hours.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Privacy &amp; data</h5>
            <p>
                Your account data is stored securely and never shared with third parties. You can
                update your profile information or delete your listings at any time from your
                profile page. For full details, see our{" "}
                <a href="/privacy">Privacy Policy</a>.
            </p>

        </StaticInfoPage>
    );
}
