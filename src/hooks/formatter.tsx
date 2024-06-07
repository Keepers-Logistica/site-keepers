import { format, formatDistance, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export function useFormatter() {
  function humanizeDate(date: any, character?: string, invert?: boolean) {
    if (!date) return null

    const formattedDate = parseISO(date)

    const template = invert ? 'yyyy/MM/dd' : 'dd/MM/yyyy'

    return format(formattedDate, `${template} ${character ?? 'às '} HH:mm`, {
      locale: pt,
    })
  }

  function humanizeDistanceDate(date: any, isUpper = false) {
    if (!date) return date

    const now = new Date()
    const string = formatDistance(parseISO(date), now, {
      locale: pt,
      addSuffix: true,
    })

    if (isUpper) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return string
  }

  function onlyDate(date: any, invert = false) {
    if (!date) return null

    const template = invert ? 'yyyy-MM-dd' : 'dd-MM-yyyy'

    return format(date, template, {
      locale: pt,
    })
  }

  function onlyTime(date: any) {
    if (!date) return null

    return format(parseISO(date), 'HH:mm', {
      locale: pt,
    })
  }

  function formatPrice(value: number, fractionDigits = 2) {
    const newValue = Number(value).toFixed(fractionDigits).split('.')
    newValue[0] = newValue[0].split(/(?=(?:...)*$)/).join('.')

    return newValue.join(',')
  }

  function parsePercentage(value: number) {
    if (!value) return 0

    return parseFloat(value.toFixed(1))
  }

  function formatEllipsis(value: string | undefined, length: number) {
    if (!value) return ''

    if (value.length >= length) {
      return `${value.substring(0, length)}...`
    }
    return value
  }

  function formatI18nNextForCms(language: string) {
    if (language === 'pt') {
      return 'pt-BR'
    }

    return language
  }

  return {
    humanizeDate,
    humanizeDistanceDate,
    onlyDate,
    onlyTime,
    formatPrice,
    parsePercentage,
    formatEllipsis,
    formatI18nNextForCms,
  }
}
