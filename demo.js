var adventureTime = require('./')

adventureTime({
  guide: "http://maxogden.github.io/get-dat/guide",
  server: "46.101.11.144:8080",
  id: Math.random().toString(36).slice(2)
})
