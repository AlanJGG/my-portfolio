import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
  const form = useRef();
  const [isVerified, setIsVerified] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  emailjs.init("hjah-tLoF09P-XaKW");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.from_name) errors.from_name = "Name is required.";
    if (!formData.from_email) {
      errors.from_email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      errors.from_email = "Invalid email address.";
    }
    if (!formData.message) errors.message = "Message is required.";
    if (!isVerified) errors.recaptcha = "Please verify the CAPTCHA.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.sendForm("service_5v34kzv", "template_tome1", form.current).then(
      () => {
        emailjs
          .sendForm("service_5v34kzv", "template_autoreply1", form.current)
          .then(
            () => {
              alert("Email sent successfully");
              setFormData({ from_name: "", from_email: "", message: "" });
              setIsVerified(false);
              setFormErrors({});
            },
            (error) => {
              alert("An error occurred while sending the auto-reply");
              console.log(error.text);
            }
          );
      },
      (error) => {
        alert("An error occurred while sending the email");
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  const handleRecaptchaChange = (value) => {
    setIsVerified(!!value);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 bg-gray-900 text-white border ${
                formErrors.from_name ? "border-red-500" : "border-slate-900"
              } rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-300`}
              required
            />
            {formErrors.from_name && (
              <span className="absolute right-0 top-0 mt-2 mr-2 text-red-500 text-sm">
                {formErrors.from_name}
              </span>
            )}
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 bg-gray-900 text-white border ${
                formErrors.from_email ? "border-red-500" : "border-slate-900"
              } rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-300`}
              required
            />
            {formErrors.from_email && (
              <span className="absolute right-0 top-0 mt-2 mr-2 text-red-500 text-sm">
                {formErrors.from_email}
              </span>
            )}
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 bg-gray-900 text-white border ${
              formErrors.message ? "border-red-500" : "border-slate-900"
            } rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-300`}
            rows="4"
            required
          />
          {formErrors.message && (
            <span className="absolute right-0 top-0 mt-2 mr-2 text-red-500 text-sm">
              {formErrors.message}
            </span>
          )}
        </div>
        <div className="flex justify-center relative">
          <ReCAPTCHA
            sitekey="6LcDZWUqAAAAABLqBRF5smA-g-ck8PLWpxdhZZDC"
            onChange={handleRecaptchaChange}
          />
          {formErrors.recaptcha && (
            <span className="absolute bottom-0 left-0 mt-2 text-red-500 text-sm">
              {formErrors.recaptcha}
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
