'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  dataRequirement: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  pageSource: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

export interface ActionResult {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  try {
    const validated = contactSchema.safeParse(data)

    if (!validated.success) {
      return {
        success: false,
        message: 'Validation failed. Please check your inputs.',
        errors: validated.error.flatten().fieldErrors,
      }
    }

    const { name, company, email, phone, dataRequirement, country, message, pageSource } =
      validated.data

    const transporter = createTransporter()

    // Email to NPLUS Global team
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'NPLUS Global <noreply@nplusglobal.com>',
      to: process.env.CONTACT_EMAIL || 'info@nplusglobal.com',
      subject: `New Inquiry from ${name} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b183d; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0891b2, #2563eb); padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 700;">New Lead from NPLUS Global</h1>
            <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">You have a new inquiry!</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ['Full Name', name],
                ['Company', company],
                ['Work Email', email],
                ['Phone', phone || 'Not provided'],
                ['Country', country || 'Not provided'],
                ['Data Requirement', dataRequirement || 'Not provided'],
                ['Page Source', pageSource || 'Contact Form'],
              ]
                .map(
                  ([label, value]) => `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 600; text-transform: uppercase; width: 40%;">${label}</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #ffffff; font-size: 14px;">${value}</td>
                </tr>
              `
                )
                .join('')}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #0891b2;">
              <p style="margin: 0 0 8px; color: rgba(255,255,255,0.6); font-size: 12px; text-transform: uppercase; font-weight: 600;">Message</p>
              <p style="margin: 0; color: #ffffff; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>
          </div>
          <div style="background: rgba(0,0,0,0.3); padding: 16px; text-align: center;">
            <p style="margin: 0; color: rgba(255,255,255,0.4); font-size: 12px;">NPLUS Global | info@nplusglobal.com | +1 (204) 410-0635</p>
          </div>
        </div>
      `,
    })

    // Auto-reply to the lead
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'NPLUS Global <noreply@nplusglobal.com>',
      to: email,
      subject: `Thank you for contacting NPLUS Global, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0891b2, #2563eb); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: white;">Thank You, ${name}!</h1>
            <p style="margin: 12px 0 0; color: rgba(255,255,255,0.85); font-size: 15px;">We've received your inquiry and will be in touch within 24 hours.</p>
          </div>
          <div style="padding: 32px; color: #334155;">
            <p style="font-size: 15px; line-height: 1.7; margin-bottom: 16px;">
              Hi ${name}, thank you for reaching out to <strong>NPLUS Global</strong>. Our data experts are reviewing your requirements and will contact you with a customized solution.
            </p>
            <p style="font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
              While you wait, explore our data intelligence resources and recent case studies at <a href="https://nplusglobal.com" style="color: #0891b2;">nplusglobal.com</a>.
            </p>
            <div style="background: #f1f5f9; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <h3 style="margin: 0 0 12px; color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">What Happens Next?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 2;">
                <li>Our team reviews your data requirements</li>
                <li>We prepare a customized data sample for you</li>
                <li>A dedicated data consultant will reach out within 24 hours</li>
                <li>You receive a tailored proposal with pricing</li>
              </ul>
            </div>
          </div>
          <div style="background: #0b183d; padding: 20px; text-align: center;">
            <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 13px;">NPLUS Global | info@nplusglobal.com | +1 (204) 410-0635</p>
            <p style="margin: 6px 0 0; color: rgba(255,255,255,0.4); font-size: 11px;">1857, 1007 N Orange St. 4th Floor, Wilmington, DE-19801, USA</p>
          </div>
        </div>
      `,
    })

    return {
      success: true,
      message:
        'Thank you! Your inquiry has been received. Our team will contact you within 24 hours.',
    }
  } catch (error) {
    console.error('Email send error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please email us directly at info@nplusglobal.com',
    }
  }
}

export async function submitSampleRequest(data: {
  name: string
  email: string
  company: string
  dataType: string
}): Promise<ActionResult> {
  return submitContactForm({
    ...data,
    message: `Sample data request for: ${data.dataType}`,
    pageSource: 'Sample Request',
  })
}
