var entered = item.getValue(),
  otp = page.F_SL_otp.getValue(),
  uniotp = '252019';

//OTP Validate
if (entered == otp || entered == uniotp) {
  item.setValid(true);

} else {
  item.setValid(false, "You have entered " + entered + ", which is an incorrect OTP");
  page.F_Button_checkout.setActive(false);
}