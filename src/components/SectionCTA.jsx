import cuid from "cuid";
import React from "react";
import Input from "./Input";
import SelectBox from "./SelectBox";

const inputProps = [
  {
    label: "Full Name",
    id: "full-name",
    type: "text",
    placeholder: "John Smith",
    name: "full-name",
  },
  {
    label: "Email address",
    id: "email",
    type: "email",
    placeholder: "me@example.com",
    name: "email",
  },
];

const options = [
  { value: "", label: "Please choose one option:" },
  { value: "friends", label: "Friends and family" },
  { value: "youtube", label: "YouTube video" },
  { value: "podcast", label: "Podcast" },
  { value: "ad", label: "Facebook ad" },
  { value: "others", label: "Others" },
];

function SectionCTA() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form className="cta-form" action="sign-up" netlify="true">
              <Input
                htmlFor={inputProps[0].htmlFor}
                label={inputProps[0].label}
                id={inputProps[0].id}
                type={inputProps[0].type}
                placeholder={inputProps[0].placeholder}
                name={inputProps[0].name}
                required
              />
              <Input
                htmlFor={inputProps[1].htmlFor}
                label={inputProps[1].label}
                id={inputProps[1].id}
                type={inputProps[1].type}
                placeholder={inputProps[1].placeholder}
                name={inputProps[1].name}
                required
              />
              <SelectBox>
                {options.map(function(option) {
                  return <option key={cuid()}>{option.label}</option>;
                })}
              </SelectBox>
              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default SectionCTA;
