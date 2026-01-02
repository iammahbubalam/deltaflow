"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select } from "@/components/ui/Select"

interface Field {
  name: string
  label: string
  type: string
  options?: Array<{ value: string; label: string }>
}

interface ContactFormProps {
  fields: Field[]
  submitText: string
  onSubmit: (data: any) => Promise<void>
}

export function ContactForm({ fields, submitText, onSubmit }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await onSubmit(formData)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const isFullWidth = field.type === 'textarea'
          
          return (
            <div key={field.name} className={isFullWidth ? "sm:col-span-2" : ""}>
              <label htmlFor={field.name} className="block text-sm font-medium text-[--color-gray-900] mb-2">
                {field.label}
              </label>
              
              {field.type === 'select' ? (
                <Select
                  id={field.name}
                  name={field.name}
                  required
                  onChange={handleChange}
                >
                  <option value="">Select option...</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Select>
              ) : field.type === 'textarea' ? (
                <Textarea
                  id={field.name}
                  name={field.name}
                  rows={4}
                  required
                  onChange={handleChange}
                />
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required
                  onChange={handleChange}
                />
              )}
            </div>
          )
        })}
      </div>
      
      <div className="pt-4">
        <Button type="submit" size="lg" className="w-full" loading={isLoading}>
          {submitText}
        </Button>
      </div>
    </form>
  )
}
