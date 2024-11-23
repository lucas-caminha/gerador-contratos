"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from "react-day-picker"
import { ptBR } from 'date-fns/locale'

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      mode="single"
      className={cn("p-3", className)}
      locale={ptBR}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

