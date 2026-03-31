import StaticInfoPage from "./StaticInfoPage";

export default function CampusSafetyPage() {
    return (
        <StaticInfoPage title="Campus Safety Tips">

            <h5 className="fw-bold mt-4 mb-2">Meet in public places</h5>
            <p>
                Always arrange exchanges in busy, well-lit areas on campus — the Main Library
                foyer, the Student Representative Council (SRC) building, or the central canteen
                are good choices. Avoid secluded spots, especially after dark.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Inspect before you pay</h5>
            <p>
                Check the item carefully before handing over any money. Test electronics, verify
                book editions, and confirm the item matches the listing photos. You are not
                obligated to complete a purchase if the item is misrepresented.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Never pay in advance</h5>
            <p>
                TradeX does not process payments — all transactions are cash-on-delivery between
                students. Never send money via mobile money or bank transfer before receiving the
                item in person. If a seller insists on advance payment, treat it as a red flag.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Bring a friend</h5>
            <p>
                For high-value items (laptops, phones, cameras), consider bringing a friend along
                to the exchange. There is safety in numbers.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Report suspicious listings</h5>
            <p>
                If a listing price seems too good to be true, or if a seller is pressuring you,
                use the <strong>Report</strong> button on the listing page. Our team reviews every
                report and will remove fraudulent listings promptly.
            </p>

            <h5 className="fw-bold mt-4 mb-2">Protect your account</h5>
            <p>
                Use a strong, unique password for TradeX. Never share your login credentials with
                anyone. If you suspect your account has been compromised, change your password
                immediately via the Forgot Password link.
            </p>

        </StaticInfoPage>
    );
}
