'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitContactForm } from '@/lib/actions'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  company: z.string().min(1, 'Company required'),
  email: z.string().email('Valid work email required'),
  phone: z.string().optional(),
  dataRequirement: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10, 'Please describe your requirements (min 10 chars)'),
})

type FormData = z.infer<typeof schema>

interface InquiryFormProps {
  title?: string
  subtitle?: string
  compact?: boolean
  pageSource?: string
  dataType?: string
  className?: string
}

const dataRequirements = [
  'Healthcare Professionals Data',
  'Physician Email List',
  'Hospital Email List',
  'B2B Decision Makers Data',
  'C-Suite Executives List',
  'Technology Users Database',
  'Intent Data / Buyer Signals',
  'Data Enrichment Services',
  'Custom Industry Data',
  'Channel Partners Data',
  'Other',
]

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
  'India', 'Singapore', 'UAE', 'Netherlands', 'Sweden', 'Japan', 'Other',
]

export default function InquiryForm({
  title = 'Request Free Data Sample',
  subtitle = 'Fill in your details and receive a verified data sample within 24 hours.',
  compact = false,
  pageSource = 'General Inquiry',
  dataType,
  className = '',
}: InquiryFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dataRequirement: dataType,
    },
  })

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading')
    try {
      const result = await submitContactForm({ ...data, pageSource })
      if (result.success) {
        setSubmitStatus('success')
        setStatusMessage(result.message)
        reset()
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.message)
      }
    } catch {
      setSubmitStatus('error')
      setStatusMessage('An unexpected error occurred. Please try again.')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className={`enterprise-card p-8 text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="font-display font-bold text-xl text-white mb-2">Inquiry Received!</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{statusMessage}</p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-outline text-sm px-6 py-2.5"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className={`enterprise-card p-6 lg:p-8 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h3 className="font-display font-bold text-xl lg:text-2xl text-white mb-2">{title}</h3>
          )}
          {subtitle && <p className="text-white/55 text-sm">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              {...register('name')}
              placeholder="John Smith"
              className="form-input"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
              Company *
            </label>
            <input
              {...register('company')}
              placeholder="Acme Corporation"
              className="form-input"
            />
            {errors.company && (
              <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
              Work Email *
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="john@company.com"
              className="form-input"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <input
              {...register('phone')}
              placeholder="+1 (555) 000-0000"
              className="form-input"
            />
          </div>
        </div>

        {!compact && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                Data Requirement
              </label>
              <select {...register('dataRequirement')} className="form-input">
                <option value="" className="bg-navy-900">Select data type...</option>
                {dataRequirements.map((req) => (
                  <option key={req} value={req} className="bg-navy-900">
                    {req}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                Country
              </label>
              <select {...register('country')} className="form-input">
                <option value="" className="bg-navy-900">Select country...</option>
                {countries.map((country) => (
                  <option key={country} value={country} className="bg-navy-900">
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
            Message / Requirements *
          </label>
          <textarea
            {...register('message')}
            rows={compact ? 3 : 4}
            placeholder="Describe your target audience, required fields, volume, and use case..."
            className="form-input resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        {submitStatus === 'error' && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
            <p className="text-red-400 text-sm">{statusMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitStatus === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Request Free Data Sample
            </>
          )}
        </button>

        <p className="text-center text-xs text-white/30">
          🔒 Your data is secure. We never share your information.
          Response within 24 hours guaranteed.
        </p>
      </form>
    </div>
  )
}
