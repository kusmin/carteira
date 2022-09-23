import winston from "winston";

const {
  combine,
  timestamp,
  label,
  printf
} = winston.format
const myFormat = printf(({
  level,
  message,
  label,
  timestamp
}) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      filename: 'carteira.log'
    })
  ],
  format: combine(
    label({
      label: 'carteira'
    }),
    timestamp(),
    myFormat
  )
})
