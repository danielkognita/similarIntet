
(async () => {
  const axios = require('axios')
  const dbMysql = require('./dbMy')
  const dbMongo = require('./dbMongo')

  try {
    const { data: { token } } = await axios({ url: 'https://www.kognitalab.xyz/api/token', method: 'GET', headers: { 'api-key': 'kognita' } })
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    const bots = await dbMysql.selectBots()

    for (const bot of bots) {
      try {
        const body = {
          project_name: bot.name,
          NN: '5'
        }

        const intents = await axios({ url: 'https://www.kognitalab.xyz/api/knn', method: 'POST', data: body })

      
        dbMongo.intents(intents, function (err, res) {
        // console.log(intents)
          if (err) throw err
          res.close()
        })

      } catch (err) {
        console.log(err)
      }
    }
  } catch (err) {
    console.log(err)
    return 'Stop!'
  }
})()
