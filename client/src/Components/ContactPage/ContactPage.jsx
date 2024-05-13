import { Label } from "@radix-ui/react-label"
import { Checkbox } from "@radix-ui/react-checkbox"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import { t } from "i18next"

const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_nej6dxf","template_7kc7bks",form.current, "yF9X9hXsV87yTNt_E").then((result) => {
      console.log(result.text);
      console.log("message sent");
    },
    (error) => {
      console.log(error.text);
    }
  );
};

  return (
    <div className="contact-page w-full h-fit flex flex-col justify-center items-center">
      <div className="ob h-40 w-full bg-primary-multiply-color"></div>
      <div className="cont-cont h-fit w-full flex bg-white text-primary-color">
      <div className="contact2 h-[140vh] w-full flex gap-10 justify-center items-center regular">
        <div className="flex flex-col">
        <h1 className="regular bold text-7xl flex contact-header justify-self-start text-primary-color mb-3 z-10">{t("act")}</h1>
        <h1 className="regular text-5xl flex contact-header justify-self-start text-primary-color mb-3 z-10 gap-3"><span className="text-primary-multiply-color">{t("solution")}</span></h1>
        </div>
          <form className="flex flex-col justify-start gap-5 py-4 light w-1/2 bg-black p-10 rounded-2xl my-5" ref={form} onSubmit={sendEmail}>
            <div className="flex md:flex-row flex-col justify-center items-center w-full gap-5 py-4 light">
             <div className="flex flex-col justify-start gap-5 w-full">
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="fullname" className="regular">{t("f-name")}</Label>
                <input id="fullname" className="h-14" placeholder={t("f-name")} name="user_name" required />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="email" className="regular">{t("e-address")}</Label>
                <input id="email" className="h-14" placeholder={t("e-address")} name="user_email" required />
              </div>
              <div className="flex flex-col justify-start gap-2 relative">
                <Label htmlFor="email" className="regular">{t("e-phone")}</Label>
                <div className="grid grid-cols-3 gap-4">
                  <select name="user_code">
                    <option value="+20">+20</option>
                    <option value="+966">+966</option>
                  </select>
                  <input
                    id="phonenumber"
                    placeholder={t("e-phone")}
                    required
                    className="col-span-2 h-14"
                    name="user_number"
                  />
                </div>
                </div>
          <div className="flex flex-col justify-start gap-2 md:h-full h-40">
                <Label htmlFor="message" className="regular">{t("message")}</Label>
                <textarea id="message" name="message" className="h-full" placeholder={t("message")} required />
              </div>
          </div>
            </div>
            <h1 className="flex justify-center items-center gap-2">
            <Checkbox className="bg-primary-multiply-color h-4 w-4" />
            {t("e-mail")}
            </h1>
              <input type="submit" value={t("submit")} className="md:w-1/2 w-full self-end relative left-10 regular transition-all duration-500 my-5 bg-primary-multiply-color p-2 rounded-[5px] text-white hover:bg-white hover:border hover:border-primary-multiply-color hover:text-primary-multiply-color"></input>
            </form>
      </div>
      </div>
    </div>
  )
}

export default ContactPage