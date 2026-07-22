import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    
    // TODO: Integrate Resend or SendGrid here using the 'body' data
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: body.email,
    //   subject: 'Thank you for your enquiry',
    //   html: '<p>We have received your request and will be in touch shortly.</p>'
    // });

    console.log("Contact form submission received:", body);

    return NextResponse.json(
      { message: "Successfully submitted contact enquiry." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error submitting form" },
      { status: 500 }
    );
  }
}
