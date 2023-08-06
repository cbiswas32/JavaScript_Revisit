/* Unique id Send Email Validation - Chinmoy Biswas*/
    var to = page.F_EmailAddress1.getValue();
    var name = page.F_FirstName.getValue() + " " + page.F_LastName.getValue();
    //name = name[0];
    var id = page.F_LicenseType.getValue();

 

    var subject = "License Registration - Digital Government";

 

    var body = `<div style="border: 3px solid #000; color: #000; text-align: center;"><br />
<h4 style="text-align: center;"><span style="color: #000;">Hello `+ name + ` ,</span></h4>
<h4 style="text-align: center;"><span style="color: #000;">Greetings of the day! Thanks for applying the License.</span></h4>
    Your resgistration has been submitted successfully for License Type:- <strong>`+ id + `</strong>.<br />You will be updated shortly.<br />
<h5 style="color: #000; text-align: center;"><span style="color: #000;">Have a good day!</span></h5>
<h4 style="color: #000; text-align: center;">&nbsp;</h4>
<h4 style="color: #000; text-align: center;"><strong><span style="color: #000;">Best regards,</span></strong><br /><strong><span style="color: #000;">Digital Government</span></strong></h4>
</div>`;

 

    Streebo.sendMail(
        [to], /* To Email */
        [], /* Cc Email */
        [], /* Blank Array */
        subject,  /* Subject */
        body, /* Body */
        "",
        "",
        "",
        BO, /* Form */
        "Streebo" /* Company Name */
    );
