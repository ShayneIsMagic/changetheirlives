const donationUrl =
  "https://buy.stripe.com/test_bIY7sO9r76kw0z6149?locale=en&__embed_source=buy_btn_1Oz5SkJqcpwkdfeO5s28Ajkl";

const openDonationPage = (price) => {
  window.open(getDonationUrl(price));
};

const getDonationUrl = (price) => {
  if (price) {
    return `${donationUrl}&__prefilled_amount=${price * 100}`;
  } else {
    return donationUrl;
  }
};
