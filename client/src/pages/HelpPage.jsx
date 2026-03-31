import StaticInfoPage from "./StaticInfoPage";
import { Link } from "react-router-dom";

export default function HelpPage() {
    return (
        <StaticInfoPage title="Help & Getting Started">

            <h5 className="fw-bold mt-4 mb-2">Creating an account</h5>
            <p>
                Sign up with your <strong>@st.knust.edu.gh</strong> email address. Only verified KNUST
                students can access TradeX — this keeps the community safe and trusted.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Buying an item</h5>
            <p>
                Browse the <Link to="/marketplace">Marketplace</Link> and click any listing to see
                details. Hit <strong>Contact Seller</strong> to open a direct message thread, then
                agree on a pickup time and location with the seller. Once you've received the item,
                mark the transaction as complete inside{" "}
                <Link to="/transactions">My Transactions</Link>.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Selling an item</h5>
            <p>
                Click <strong>Sell Item</strong> from the Marketplace or your profile page. Fill in
                a title, description, price, and up to 5 photos. Your listing goes live immediately
                and can be edited or removed at any time from your profile.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Lost &amp; Found</h5>
            <p>
                If you've lost something on campus, post a report on the{" "}
                <Link to="/lostfound">Lost &amp; Found</Link> board. If you've found an item, post
                it there too. Mark your post as <em>Resolved</em> once the item has been returned.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Messaging</h5>
            <p>
                All conversations are private between the two parties. You'll see a notification
                badge on the Messages icon when you have unread messages. Messages refresh
                automatically every few seconds — no need to reload the page.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Reporting a listing</h5>
            <p>
                If a listing looks fraudulent or violates community standards, open it and click
                the <strong>Report</strong> button. The TradeX team will review it.
            </p>
        </StaticInfoPage>
    );
}
