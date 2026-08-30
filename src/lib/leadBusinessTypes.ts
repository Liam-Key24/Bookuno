export const leadBusinessTypeOptions = [
  { value: '', label: 'Business type (optional)' },
  { value: 'barber_hairdresser', label: 'Barber / hairdresser' },
  { value: 'beauty', label: 'Beauty professional' },
  { value: 'nails', label: 'Nail technician' },
  { value: 'therapist', label: 'Therapist' },
  { value: 'personal_trainer', label: 'Personal trainer' },
  { value: 'dog_groomer', label: 'Dog groomer' },
  { value: 'tattoo', label: 'Tattoo artist' },
  { value: 'cleaner', label: 'Cleaner' },
  { value: 'other', label: 'Other service business' },
] as const

export type LeadBusinessType = (typeof leadBusinessTypeOptions)[number]['value']

const allowedValues = new Set<string>(
  leadBusinessTypeOptions.map((option) => option.value).filter((value) => value !== ''),
)

export function isValidLeadBusinessType(value: string) {
  return value === '' || allowedValues.has(value)
}
