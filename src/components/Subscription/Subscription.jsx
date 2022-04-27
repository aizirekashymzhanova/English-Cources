import MailchimpSubscribe from "react-mailchimp-subscribe";

const myUrl =
  "https://gmail.us14.list-manage.com/subscribe/post?u=626b1f3e5d42a55037485801d&amp;id=bc1d51da28";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={myUrl} />;

// use the render prop and your custom form
const Subscription = () => (
  <MailchimpSubscribe
    url={myUrl}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);
export default Subscription;
